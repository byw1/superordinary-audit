import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BRANDS } from "@/data/brands.mjs";
import { SPOTLIGHTS } from "@/data/company";

type Brand = (typeof BRANDS)[number];

const BEAUTY = new Set([
  "Cosmetics", "Skincare", "Haircare", "Suncare", "Beauty group", "Nails", "Personal care",
  "Consumer health", "Grooming", "Beauty devices", "Bath & body", "Body care", "CBD beauty",
]);

// Listed from public/logos at build time (next.config.mjs).
const LOGOS = new Set((process.env.LOGO_DOMAINS ?? "").split(","));

function hasLogo(domain: string) {
  return LOGOS.has(domain);
}

function Logo({ b, size = 48 }: { b: { name: string; domain: string }; size?: number }) {
  return hasLogo(b.domain) ? (
    <Image src={`/logos/${b.domain}.png`} alt={`${b.name} logo`} width={size} height={size} className="rounded-xl object-contain" style={{ width: size, height: size }} />
  ) : (
    <span
      className="flex items-center justify-center rounded-xl bg-ink font-[family-name:var(--font-display)] font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {b.name[0]}
    </span>
  );
}

function Tile({ b, big = false }: { b: Brand; big?: boolean }) {
  return (
    <div className="u-card flex h-full flex-col p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
      <Logo b={b} size={big ? 48 : 36} />
      <div className={`mt-4 font-medium leading-snug text-ink ${big ? "text-[14.5px]" : "text-[13px]"}`}>{b.name}</div>
      <div className="mt-0.5 text-[11.5px] text-mute">{b.category}</div>
      {b.note && <div className="mt-2 text-[11.5px] leading-snug text-ink-2">{b.note}</div>}
    </div>
  );
}

function Group({ title, sub, items, cols = "lg:grid-cols-8" }: { title: string; sub: string; items: Brand[]; cols?: string }) {
  return (
    <Reveal>
      <div className="mt-20">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="u-display text-[24px] text-ink sm:text-[28px]">{title}</h3>
          <span className="text-[13px] text-mute">{sub}</span>
        </div>
        <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${cols}`}>
          {items.map((b) => (
            <Tile key={b.domain} b={b} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  const by = (g: Brand["group"]) => BRANDS.filter((b) => b.group === g);
  const tiktok = by("tiktok");
  const partner = by("partner");
  const current = [...tiktok, ...partner];
  const beauty = current.filter((b) => BEAUTY.has(b.category)).length;
  const strip = BRANDS.filter((b) => hasLogo(b.domain));

  return (
    <>
      <Reveal>
        <div className="mb-12 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-4">
          {[
            [String(BRANDS.length), "brands publicly tied to SuperOrdinary since 2018"],
            [String(tiktok.length), "named as TikTok Shop partners in releases, postings or interviews"],
            [`${beauty}/${current.length}`, "of today’s partners are beauty, personal care or consumer health"],
            ["4", "China-era partners it lists beside their later exits"],
          ].map(([n, l]) => (
            <div key={l} className="bg-paper p-6">
              <div className="u-num text-[44px] font-semibold leading-none text-ink">{n}</div>
              <div className="mt-2 text-[13.5px] leading-snug text-ink-2">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="no-print relative mb-16 overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="u-marquee flex w-max gap-12">
          {[...strip, ...strip].map((b, i) => (
            <Image key={`${b.domain}-${i}`} src={`/logos/${b.domain}.png`} alt="" width={40} height={40} className="h-10 w-10 object-contain grayscale transition hover:grayscale-0" />
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h3 className="u-display text-[24px] text-ink sm:text-[28px]">On TikTok Shop</h3>
          <span className="text-[13px] text-mute">Named as TikTok Shop partners by a public source</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {tiktok.map((b) => (
            <Tile key={b.domain} b={b} big />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {SPOTLIGHTS.map((s) => (
            <a key={s.brand} href={s.url} className="u-card group flex flex-col gap-5 p-6 transition-colors hover:border-ink sm:p-7">
              <div className="flex items-center gap-3">
                <Logo b={{ name: s.brand, domain: s.domain }} size={40} />
                <div className="text-[16px] font-semibold text-ink">{s.brand}</div>
                <span className="ml-auto text-[12px] text-faint transition-colors group-hover:text-live">↗</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {s.stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="u-num text-[40px] font-semibold leading-none text-ink">{v}</div>
                    <div className="mt-1.5 text-[12.5px] text-mute">{l}</div>
                  </div>
                ))}
              </div>
              <p className="text-[14px] leading-[1.55] text-ink-2">{s.line}</p>
              <div className="mt-auto text-[11px] text-faint">{s.source}</div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-[12px] leading-[1.6] text-faint">
          Followers and items sold are TikTok Shop’s own lifetime counters, read on October 1, 2026. They
          show the scale of the brands, not sales attributable to SuperOrdinary.
        </p>
      </Reveal>

      <Group title="On the brand wall" sub="Shown on the 2026 investor site; channel not stated" items={partner} />
      <Group title="The Amazon years" sub="U.S. Amazon partners, 2021–2023, per trade press" items={by("amazon")} />
      <Group title="The China years" sub="Tmall, Douyin and Xiaohongshu, 2018–2022" items={by("china")} cols="lg:grid-cols-9" />
      <Group title="Bets" sub="Investments, incubations and acquisitions" items={by("bet")} cols="lg:grid-cols-4" />

      <p className="mt-12 text-[12px] leading-[1.6] text-faint">
        Logos via the open-source favicon service from Twenty. A logo on SuperOrdinary’s site shows a
        relationship, not which channel it runs on. Exit acquirers for Farmacy and Supergoop! are as the
        company states them.
      </p>
    </>
  );
}
