// Downloads brand logos once from the open-source favicon service
// (github.com/twentyhq/favicon, served at twenty-icons.com) into
// public/logos/<domain>.png, so the live site never hotlinks a third party.
// Run: node scripts/fetch-logos.mjs   (re-run after adding brands)
import { writeFile, access } from "node:fs/promises";
import { BRANDS } from "../data/brands.mjs";

const out = new URL("../public/logos/", import.meta.url);
let ok = 0;
const missing = [];
for (const b of BRANDS) {
  const file = new URL(`${b.domain}.png`, out);
  try {
    await access(file);
    ok++;
    continue;
  } catch {}
  const res = await fetch(`https://twenty-icons.com/${b.domain}/192`);
  const type = res.headers.get("content-type") ?? "";
  if (!res.ok || !type.startsWith("image/")) {
    missing.push(b.domain);
    continue;
  }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  ok++;
}
console.log(`${ok} logos ready; missing: ${missing.join(", ") || "none"}`);
