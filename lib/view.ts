import { headers } from "next/headers";

/** Server-side view, as decided by middleware. Defaults to the public view. */
export async function getView() {
  const h = await headers();
  const prepAllowed = h.get("x-so-prep-allowed") === "1";
  const share = h.get("x-so-view") !== "prep";
  return { prepAllowed, share };
}
