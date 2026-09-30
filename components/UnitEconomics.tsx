"use client";

import { useMemo, useState } from "react";
import { Basis, Card, Eyebrow } from "@/components/ui";
import { SKU_DEFAULTS, type SkuInputs } from "@/data/economics";

const fmt$ = (n: number) =>
  `${n < 0 ? "−" : ""}$${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const fmtPct = (n: number) => `${(n * 100).toFixed(1)}%`;

interface Field {
  key: keyof SkuInputs;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: "$" | "%";
  hint: string;
}

const FIELDS: Field[] = [
  { key: "price", label: "Selling price", min: 10, max: 120, step: 1, unit: "$", hint: "List price of the hero SKU." },
  { key: "discount", label: "Average discount", min: 0, max: 0.4, step: 0.01, unit: "%", hint: "All seller-funded discounts stacked, blended across the month." },
  { key: "cogs", label: "COGS", min: 0.1, max: 0.6, step: 0.01, unit: "%", hint: "Landed product cost as a share of list price." },
  { key: "referral", label: "Platform referral fee", min: 0.02, max: 0.12, step: 0.005, unit: "%", hint: "TikTok Shop's fee on each sale. Reported to have risen from 6% to 8% for most U.S. categories in Aug 2026." },
  { key: "affiliateShare", label: "Orders via affiliates", min: 0, max: 1, step: 0.05, unit: "%", hint: "Share of orders attributed to creator content or LIVE." },
  { key: "commission", label: "Creator commission", min: 0, max: 0.4, step: 0.01, unit: "%", hint: "Commission rate paid on affiliate-attributed orders." },
  { key: "adShare", label: "Ad spend", min: 0, max: 0.4, step: 0.01, unit: "%", hint: "Paid media (GMV Max, Spark, LIVE ads) as a share of GMV." },
  { key: "fulfillment", label: "Fulfillment per order", min: 0, max: 15, step: 0.25, unit: "$", hint: "Pick, pack and ship, via FBT or the brand's 3PL." },
  { key: "sampleCost", label: "Sampling per order", min: 0, max: 8, step: 0.1, unit: "$", hint: "Free samples to creators, spread across the orders they generate." },
  { key: "returns", label: "Return rate", min: 0, max: 0.2, step: 0.01, unit: "%", hint: "Orders refunded; revenue lost, most costs already spent." },
];

export default function UnitEconomics() {
  const [v, setV] = useState<SkuInputs>(SKU_DEFAULTS);

  const r = useMemo(() => {
    const net = v.price * (1 - v.discount);
    const kept = 1 - v.returns;
    const revenue = net * kept;
    const lines = [
      { label: "COGS", value: v.price * v.cogs },
      { label: "Referral fee", value: net * v.referral * kept },
      { label: "Creator commission", value: net * v.commission * v.affiliateShare * kept },
      { label: "Ads", value: net * v.adShare },
      { label: "Fulfillment", value: v.fulfillment },
      { label: "Sampling", value: v.sampleCost },
    ];
    const costs = lines.reduce((s, l) => s + l.value, 0);
    const contribution = revenue - costs;
    // Breakeven ROAS: the ad efficiency at which contribution before ads is
    // exactly spent. Below it, every ad dollar loses money.
    const beforeAds = contribution + lines[3].value;
    const breakevenRoas = beforeAds > 0 ? net / beforeAds : Infinity;
    const roas = v.adShare > 0 ? 1 / v.adShare : Infinity;
    return { net, revenue, lines, contribution, margin: contribution / net, breakevenRoas, roas };
  }, [v]);

  const set = (key: keyof SkuInputs, val: number) => setV((p) => ({ ...p, [key]: val }));
  const scale = Math.max(r.net, 1);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
      <Card>
        <div className="mb-5 flex items-center justify-between gap-3">
          <Eyebrow>One order of a hero SKU</Eyebrow>
          <button
            onClick={() => setV(SKU_DEFAULTS)}
            className="font-mono text-[10px] uppercase tracking-[0.08em] text-mute underline underline-offset-4 hover:text-ink"
          >
            Reset
          </button>
        </div>
        <div className="space-y-4">
          {FIELDS.map((f) => (
            <label key={f.key} className="block" title={f.hint}>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] text-ink">{f.label}</span>
                <span className="u-num text-[13px] text-ink">
                  {f.unit === "$" ? `$${v[f.key].toFixed(f.step < 1 ? 2 : 0)}` : fmtPct(v[f.key])}
                </span>
              </div>
              <input
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v[f.key]}
                onChange={(e) => set(f.key, Number(e.target.value))}
                className="w-full"
                aria-label={f.label}
              />
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <Eyebrow className="mb-5">Where the money goes</Eyebrow>
        <div className="space-y-2.5">
          <Bar label="Net price after discount" value={r.net} scale={scale} strong />
          {r.lines.map((l) => (
            <Bar key={l.label} label={l.label} value={-l.value} scale={scale} />
          ))}
          {v.returns > 0 && (
            <Bar label="Lost to returns" value={-(r.net - r.revenue)} scale={scale} />
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
          <Out
            label="Contribution per order"
            value={fmt$(r.contribution)}
            live={r.contribution < 0}
          />
          <Out label="Contribution margin" value={fmtPct(r.margin)} live={r.margin < 0} />
          <Out
            label="Breakeven ROAS"
            value={Number.isFinite(r.breakevenRoas) ? `${r.breakevenRoas.toFixed(2)}×` : "never"}
          />
          <Out
            label="ROAS at this ad spend"
            value={Number.isFinite(r.roas) ? `${r.roas.toFixed(2)}×` : "no ads"}
            live={r.roas < r.breakevenRoas}
          />
        </div>

        <p className="u-prose mt-5 text-[13.5px]">
          {r.contribution < 0
            ? "This order loses money. The usual culprits, in order: discount stacking, ad spend set against revenue instead of margin, and commission rates negotiated creator by creator without a ceiling."
            : r.roas < r.breakevenRoas * 1.25
              ? "Profitable, but thin. At this margin, a single stacked promo or a ROAS dip during a campaign flips it negative. This is where a per-brand margin floor earns its keep."
              : "Healthy. The question now is whether there's room to buy more growth: raise commission for top creators, or push ad spend toward breakeven ROAS."}
        </p>
        <div className="mt-4">
          <Basis kind="illustrative" />
        </div>
      </Card>
    </div>
  );
}

function Bar({
  label,
  value,
  scale,
  strong = false,
}: {
  label: string;
  value: number;
  scale: number;
  strong?: boolean;
}) {
  const w = Math.min(100, (Math.abs(value) / scale) * 100);
  return (
    <div className="grid grid-cols-[132px_1fr_72px] items-center gap-3 sm:grid-cols-[170px_1fr_80px]">
      <span className={`truncate text-[12.5px] ${strong ? "font-medium text-ink" : "text-ink-2"}`}>{label}</span>
      <span className="h-3 rounded-sm bg-sunk">
        <span
          className={`block h-3 rounded-sm ${strong ? "bg-ink" : "bg-ink/35"}`}
          style={{ width: `${w}%` }}
        />
      </span>
      <span className="u-num text-right text-[12.5px] text-ink">{fmt$(value)}</span>
    </div>
  );
}

function Out({ label, value, live = false }: { label: string; value: string; live?: boolean }) {
  return (
    <div>
      <div className="u-label mb-1">{label}</div>
      <div className={`u-num text-[24px] ${live ? "text-live" : "text-ink"}`}>{value}</div>
    </div>
  );
}
