"use client";

import { useMemo, useState } from "react";
import { Basis, Card, Eyebrow } from "@/components/ui";

interface Inputs {
  samples: number;
  sampleCost: number;
  postRate: number;
  ordersPerPost: number;
  aov: number;
  margin: number;
}

const DEFAULTS: Inputs = {
  samples: 400,
  sampleCost: 14,
  postRate: 0.3,
  ordersPerPost: 18,
  aov: 30,
  margin: 0.22,
};

const $ = (n: number) =>
  `${n < 0 ? "−" : ""}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;

/**
 * One month of sampling for one brand. The point it makes: post rate is the
 * first multiplier, so it's worth more than any other lever in the engine.
 */
function run(v: Inputs) {
  const posts = v.samples * v.postRate;
  const orders = posts * v.ordersPerPost;
  const gmv = orders * v.aov;
  const spend = v.samples * v.sampleCost;
  const contribution = gmv * v.margin - spend;
  return { posts, orders, gmv, spend, contribution, perSample: gmv / Math.max(v.samples, 1) };
}

export default function CreatorFunnel() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const r = useMemo(() => run(v), [v]);
  const lifted = useMemo(() => run({ ...v, postRate: Math.min(1, v.postRate + 0.1) }), [v]);
  const set = (k: keyof Inputs, n: number) => setV((p) => ({ ...p, [k]: n }));

  const fields: { k: keyof Inputs; label: string; min: number; max: number; step: number; show: (n: number) => string }[] = [
    { k: "samples", label: "Samples shipped / month", min: 50, max: 2000, step: 10, show: (n) => n.toLocaleString() },
    { k: "sampleCost", label: "Cost per sample (product + shipping)", min: 3, max: 40, step: 1, show: (n) => `$${n}` },
    { k: "postRate", label: "Sample → post rate", min: 0.05, max: 0.8, step: 0.01, show: (n) => `${Math.round(n * 100)}%` },
    { k: "ordersPerPost", label: "Orders per post", min: 1, max: 80, step: 1, show: (n) => `${n}` },
    { k: "aov", label: "Average order value", min: 10, max: 120, step: 1, show: (n) => `$${n}` },
    { k: "margin", label: "Contribution margin before sampling", min: 0.05, max: 0.5, step: 0.01, show: (n) => `${Math.round(n * 100)}%` },
  ];

  const stages = [
    { label: "Samples", value: v.samples },
    { label: "Posts", value: r.posts },
    { label: "Orders", value: r.orders },
  ];
  const top = Math.max(...stages.map((s) => s.value), 1);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
      <Card>
        <div className="mb-5 flex items-center justify-between">
          <Eyebrow>One brand, one month of sampling</Eyebrow>
          <button
            onClick={() => setV(DEFAULTS)}
            className="font-mono text-[10px] uppercase tracking-[0.08em] text-mute underline underline-offset-4 hover:text-ink"
          >
            Reset
          </button>
        </div>
        <div className="space-y-4">
          {fields.map((f) => (
            <label key={f.k} className="block">
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] text-ink">{f.label}</span>
                <span className="u-num text-[13px] text-ink">{f.show(v[f.k])}</span>
              </div>
              <input
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v[f.k]}
                onChange={(e) => set(f.k, Number(e.target.value))}
                className="w-full"
                aria-label={f.label}
              />
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <Eyebrow className="mb-5">The funnel</Eyebrow>
        <div className="space-y-2.5">
          {stages.map((s) => (
            <div key={s.label} className="grid grid-cols-[80px_1fr_70px] items-center gap-3">
              <span className="text-[12.5px] text-ink-2">{s.label}</span>
              <span className="h-3 rounded-sm bg-sunk">
                <span className="block h-3 rounded-sm bg-ink/70" style={{ width: `${Math.max(1, (s.value / top) * 100)}%` }} />
              </span>
              <span className="u-num text-right text-[12.5px]">{Math.round(s.value).toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
          <Out label="GMV from this wave" value={$(r.gmv)} />
          <Out label="GMV per sample" value={$(r.perSample)} />
          <Out label="Sample spend" value={$(r.spend)} />
          <Out label="Contribution after sampling" value={$(r.contribution)} live={r.contribution < 0} />
        </div>

        <div className="mt-5 rounded-md border border-live/40 bg-live-wash p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-live-deep">
            Ten more points of post rate
          </div>
          <p className="mt-1.5 text-[14px] leading-[1.55] text-ink">
            Same samples, same spend: GMV goes from {$(r.gmv)} to {$(lifted.gmv)}, and contribution
            from {$(r.contribution)} to {$(lifted.contribution)}. That’s why the first thing I’d
            measure is who actually posts, and why non-posters stop getting samples.
          </p>
        </div>
        <div className="mt-4">
          <Basis kind="illustrative" />
        </div>
      </Card>
    </div>
  );
}

function Out({ label, value, live = false }: { label: string; value: string; live?: boolean }) {
  return (
    <div>
      <div className="u-label mb-1">{label}</div>
      <div className={`u-num text-[22px] ${live ? "text-live" : "text-ink"}`}>{value}</div>
    </div>
  );
}
