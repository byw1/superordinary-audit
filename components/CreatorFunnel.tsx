"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Basis } from "@/components/ui";

const FunnelScene = dynamic(() => import("@/components/three/FunnelScene"), { ssr: false });

interface Inputs {
  samples: number;
  sampleCost: number;
  postRate: number;
  ordersPerPost: number;
  aov: number;
  margin: number;
}

const DEFAULTS: Inputs = { samples: 400, sampleCost: 14, postRate: 0.3, ordersPerPost: 18, aov: 30, margin: 0.22 };

const $ = (n: number) => `${n < 0 ? "−" : ""}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;

/** One month of sampling for one brand. Post rate is the first multiplier. */
function run(v: Inputs) {
  const posts = v.samples * v.postRate;
  const orders = posts * v.ordersPerPost;
  const gmv = orders * v.aov;
  const spend = v.samples * v.sampleCost;
  return { posts, orders, gmv, spend, contribution: gmv * v.margin - spend, perSample: gmv / Math.max(v.samples, 1) };
}

export default function CreatorFunnel() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const r = useMemo(() => run(v), [v]);
  const lifted = useMemo(() => run({ ...v, postRate: Math.min(1, v.postRate + 0.1) }), [v]);
  const set = (k: keyof Inputs, n: number) => setV((p) => ({ ...p, [k]: n }));

  const fields: { k: keyof Inputs; label: string; min: number; max: number; step: number; show: (n: number) => string }[] = [
    { k: "samples", label: "Samples shipped / month", min: 50, max: 2000, step: 10, show: (n) => n.toLocaleString() },
    { k: "postRate", label: "Sample → post rate", min: 0.05, max: 0.8, step: 0.01, show: (n) => `${Math.round(n * 100)}%` },
    { k: "ordersPerPost", label: "Orders per post", min: 1, max: 80, step: 1, show: (n) => `${n}` },
    { k: "sampleCost", label: "Cost per sample", min: 3, max: 40, step: 1, show: (n) => `$${n}` },
    { k: "aov", label: "Average order value", min: 10, max: 120, step: 1, show: (n) => `$${n}` },
    { k: "margin", label: "Margin before sampling", min: 0.05, max: 0.5, step: 0.01, show: (n) => `${Math.round(n * 100)}%` },
  ];

  const stages: [string, number][] = [["Samples", v.samples], ["Posts", r.posts], ["Orders", r.orders]];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="u-card rounded-3xl p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[13px] text-ink">One brand, one month of sampling</span>
          <button onClick={() => setV(DEFAULTS)} className="text-[12px] text-mute underline underline-offset-4 hover:text-ink">
            Reset
          </button>
        </div>
        <div className="space-y-5">
          {fields.map((f) => (
            <label key={f.k} className="block">
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] text-ink-2">{f.label}</span>
                <span className="u-num text-[13.5px] text-ink">{f.show(v[f.k])}</span>
              </div>
              <input type="range" min={f.min} max={f.max} step={f.step} value={v[f.k]} onChange={(e) => set(f.k, Number(e.target.value))} className="w-full" aria-label={f.label} />
            </label>
          ))}
        </div>
      </div>

      <div className="u-card flex flex-col overflow-hidden rounded-3xl">
        <div className="relative h-[380px]">
          <div className="absolute inset-0">
            <FunnelScene values={[v.samples, r.posts, r.orders]} />
          </div>
          <div className="pointer-events-none relative flex h-full items-start justify-between p-6 sm:p-8">
            <div className="flex h-full flex-col justify-between py-2">
              {stages.map(([label, n], i) => (
                <div key={label}>
                  <div className={`text-[11px] ${i === 2 ? "text-live-deep" : "text-faint"}`}>{label}</div>
                  <div className="u-num text-[22px] text-ink">{Math.round(n).toLocaleString()}</div>
                </div>
              ))}
            </div>
            <Basis kind="illustrative" />
          </div>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-px border-t border-line bg-sunk">
          {[
            ["GMV from this wave", $(r.gmv), false],
            ["GMV per sample", $(r.perSample), false],
            ["Sample spend", $(r.spend), false],
            ["Contribution after sampling", $(r.contribution), r.contribution < 0],
          ].map(([l, val, bad]) => (
            <div key={l as string} className="bg-paper/80 p-4 backdrop-blur">
              <div className="text-[11px] text-faint">{l}</div>
              <div className={`u-num mt-1 text-[22px] ${bad ? "text-live" : "text-ink"}`}>{val}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-live/30 bg-live/[0.08] p-5 text-[14px] leading-[1.55] text-ink">
          <span className="text-live-deep">Ten more points of post rate:</span> same samples, same spend,
          GMV {$(r.gmv)} → {$(lifted.gmv)} and contribution {$(r.contribution)} → {$(lifted.contribution)}.
          That’s why the first thing I’d measure is who actually posts.
        </div>
      </div>
    </div>
  );
}
