"use client";

import { useMemo, useState } from "react";
import { Basis, Card, Eyebrow } from "@/components/ui";
import { ACCOUNT_DEFAULTS, SKU_DEFAULTS, type AccountInputs } from "@/data/economics";

const k$ = (n: number) => {
  const a = Math.abs(n);
  const s = a >= 1_000_000 ? `$${(a / 1_000_000).toFixed(2)}M` : `$${Math.round(a / 1000).toLocaleString()}K`;
  return n < 0 ? `−${s}` : s;
};

/**
 * One brand account, two ways to get paid. Service: a retainer plus a share of
 * GMV, no inventory. Distribution: buy the product wholesale and sell it on
 * the Shop, carrying fees, commission, ads and inventory risk for the margin.
 */
function model(v: AccountInputs, gmv: number) {
  const service = v.teamCost + v.liveHours * v.liveCostPerHour;
  const feeRevenue = v.retainer + gmv * v.gmvShare;
  const fee = feeRevenue - service;

  const s = SKU_DEFAULTS;
  const netGmv = gmv * (1 - s.returns);
  const variable =
    gmv * v.wholesale + // product bought from the brand
    netGmv * s.referral +
    netGmv * s.commission * s.affiliateShare +
    gmv * s.adShare +
    (gmv / v.aov) * (s.fulfillment + s.sampleCost);
  const dist = netGmv - variable - service;
  return { feeRevenue, fee, distRevenue: netGmv, dist, service };
}

export default function AccountPnL() {
  const [v, setV] = useState<AccountInputs>(ACCOUNT_DEFAULTS);
  const m = useMemo(() => model(v, v.gmv), [v]);
  const ladder = useMemo(
    () => [50_000, 150_000, 400_000, 1_000_000].map((g) => ({ g, ...model(v, g) })),
    [v],
  );
  const set = (key: keyof AccountInputs, val: number) => setV((p) => ({ ...p, [key]: val }));

  // Both models are linear in GMV, so the crossover solves directly.
  const crossover = useMemo(() => {
    const a = model(v, 0);
    const b = model(v, 1_000_000);
    const slope = (b.dist - b.fee - (a.dist - a.fee)) / 1_000_000;
    if (slope <= 0) return null;
    const g = -(a.dist - a.fee) / slope;
    return g > 0 ? g : 0;
  }, [v]);

  const sliders: { key: keyof AccountInputs; label: string; min: number; max: number; step: number; show: (n: number) => string }[] = [
    { key: "gmv", label: "Brand GMV / month", min: 20_000, max: 1_500_000, step: 10_000, show: k$ },
    { key: "retainer", label: "Monthly retainer", min: 0, max: 40_000, step: 500, show: k$ },
    { key: "gmvShare", label: "Share of GMV", min: 0, max: 0.15, step: 0.005, show: (n) => `${(n * 100).toFixed(1)}%` },
    { key: "teamCost", label: "Team cost / month", min: 2_000, max: 60_000, step: 500, show: k$ },
    { key: "liveHours", label: "LIVE hours / month", min: 0, max: 200, step: 5, show: (n) => `${n} h` },
    { key: "wholesale", label: "Wholesale cost (distribution)", min: 0.2, max: 0.7, step: 0.01, show: (n) => `${Math.round(n * 100)}% of list` },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
        <Card>
          <Eyebrow className="mb-5">One brand account, one month</Eyebrow>
          <div className="space-y-4">
            {sliders.map((f) => (
              <label key={f.key} className="block">
                <div className="mb-1 flex items-baseline justify-between gap-3">
                  <span className="text-[13.5px] text-ink">{f.label}</span>
                  <span className="u-num text-[13px] text-ink">{f.show(v[f.key])}</span>
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
          <Eyebrow className="mb-5">Agency contribution from this account</Eyebrow>
          <div className="grid grid-cols-2 gap-4">
            <ModelCol
              name="Service model"
              sub="Retainer + share of GMV"
              revenue={m.feeRevenue}
              contribution={m.fee}
            />
            <ModelCol
              name="Distribution model"
              sub="Buy wholesale, sell on the Shop"
              revenue={m.distRevenue}
              contribution={m.dist}
            />
          </div>
          <p className="u-prose mt-5 text-[13.5px]">
            Service revenue is small and safe: it scales with GMV only through the share. Distribution
            books the whole GMV as revenue and keeps the retail margin, but it carries inventory,
            fees, commission and ad risk on its own balance sheet. Which one wins depends on scale,
            which is why the table below matters more than any single number.
          </p>
          <div className="mt-4">
            <Basis kind="illustrative" />
          </div>
        </Card>
      </div>

      <Card>
        <Eyebrow className="mb-4">Same account, different scale</Eyebrow>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-line">
                {["Brand GMV / mo", "Service contribution", "Distribution contribution", "Better model"].map((h) => (
                  <th key={h} className="u-label py-2 pr-4 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ladder.map((row) => {
                const better = row.dist > row.fee ? "Distribution" : "Service";
                return (
                  <tr key={row.g} className="border-b border-line last:border-0">
                    <td className="u-num py-2.5 pr-4 text-[13.5px]">{k$(row.g)}</td>
                    <td className={`u-num py-2.5 pr-4 text-[13.5px] ${row.fee < 0 ? "text-live" : ""}`}>{k$(row.fee)}</td>
                    <td className={`u-num py-2.5 pr-4 text-[13.5px] ${row.dist < 0 ? "text-live" : ""}`}>{k$(row.dist)}</td>
                    <td className="py-2.5 text-[13.5px] font-medium">{better}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[14.5px] font-medium text-ink">
          {crossover === null
            ? "At these inputs, service terms win at every scale: the retail margin left after fees, commission and ads is thinner than the GMV share."
            : `At these inputs, distribution overtakes service at about ${k$(crossover)} of monthly GMV. Below that, the agency is better off not owning the inventory.`}
        </p>
        <p className="u-prose mt-2 text-[13.5px]">
          Uses the SKU economics from the calculator above for fees, commission, ads, fulfillment and
          sampling. Team cost and LIVE hours are held flat, which flatters large accounts; in practice
          they step up with GMV.
        </p>
      </Card>
    </div>
  );
}

function ModelCol({
  name,
  sub,
  revenue,
  contribution,
}: {
  name: string;
  sub: string;
  revenue: number;
  contribution: number;
}) {
  return (
    <div className="rounded-md border border-line bg-paper p-4">
      <div className="text-[14px] font-medium text-ink">{name}</div>
      <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint">{sub}</div>
      <div className="mt-4 u-label">Revenue booked</div>
      <div className="u-num text-[18px] text-ink">{k$(revenue)}</div>
      <div className="mt-3 u-label">Contribution</div>
      <div className={`u-num text-[26px] ${contribution < 0 ? "text-live" : "text-ink"}`}>{k$(contribution)}</div>
    </div>
  );
}
