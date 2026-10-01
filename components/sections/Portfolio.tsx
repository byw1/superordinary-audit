import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import Reveal from "@/components/Reveal";
import { BRANDS } from "@/data/brands.mjs";

type Brand = (typeof BRANDS)[number];

const BEAUTY = new Set(["Cosmetics", "Skincare", "Haircare", "Suncare", "Beauty group", "Nails", "Personal care", "Consumer health", "Men’s grooming"]);

function hasLogo(b: Brand) {
  return existsSync(path.join(process.cwd(), "public", "logos", `${b.domain}.png`));
}

function Tile({ b }: { b: Brand }) {
  const logo = hasLogo(b);
  return (
    <div className="group u-card flex h-full flex-col p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
      <div className="flex h-14 items-center">
        {logo ? (
          <Image
            src={`/logos/${b.domain}.png`}
            alt={`${b.name} logo`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-xl object-contain"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink font-[family-name:var(--font-display)] text-[18px] font-semibold text-white">
            {b.name[0]}
          </span>
        )}
      </div>
      <div className="mt-4 text-[14.5px] font-medium leading-snug text-ink">{b.name}</div>
      <div className="mt-0.5 text-[12px] text-mute">{b.category}</div>
      {b.channel && (
        <div className="mt-3">
          <span className="rounded-full bg-live/10 px-2 py-0.5 text-[11px] font-medium text-live">{b.channel}</span>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const current = BRANDS.filter((b) => b.group === "current");
  const china = BRANDS.filter((b) => b.group === "china");
  const beauty = current.filter((b) => BEAUTY.has(b.category)).length;
  const strip = current.filter(hasLogo);

  return (
    <>
      <Reveal>
        <div className="mb-12 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3">
          {[
            [String(current.length), "brands shown publicly as current partners"],
            [`${beauty}/${current.length}`, "are beauty, personal care or consumer health"],
            [String(china.length), "China-era partners the company lists beside their later exits"],
          ].map(([n, l]) => (
            <div key={l} className="bg-paper p-6">
              <div className="u-num text-[44px] font-semibold leading-none text-ink">{n}</div>
              <div className="mt-2 text-[13.5px] text-ink-2">{l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="no-print relative mb-12 overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="u-marquee flex w-max gap-12">
          {[...strip, ...strip].map((b, i) => (
            <Image key={`${b.domain}-${i}`} src={`/logos/${b.domain}.png`} alt="" width={40} height={40} className="h-10 w-10 object-contain grayscale transition hover:grayscale-0" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {current.map((b, i) => (
          <Reveal key={b.domain} delay={(i % 6) * 50} className="h-full">
            <Tile b={b} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <h3 className="u-display text-[30px] text-ink sm:text-[36px]">The China-era track record.</h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-2">
              The company’s investor site lists brands it supported in China that later reached strategic
              exits. These were partners, not owned brands.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {china.map((b) => (
              <Tile key={b.domain} b={b} />
            ))}
          </div>
        </div>
      </Reveal>

      <p className="mt-10 text-[12.5px] leading-[1.6] text-faint">
        Logos via the open-source favicon service from Twenty. A logo on SuperOrdinary’s site shows a
        relationship, not which channel it runs on; channel tags appear only where a source says so.
      </p>
    </>
  );
}
