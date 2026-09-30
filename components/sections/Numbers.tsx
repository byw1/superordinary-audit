"use client";

import { useState } from "react";
import AccountPnL from "@/components/AccountPnL";
import CreatorFunnel from "@/components/CreatorFunnel";
import Reveal from "@/components/Reveal";
import UnitEconomics from "@/components/UnitEconomics";

const TABS = [
  { id: "wave", label: "One sample wave", note: "Where the creator engine makes or loses money." },
  { id: "order", label: "One order", note: "Where each dollar goes, and the ad return needed to break even." },
  { id: "account", label: "One account", note: "Service fees vs. owning the inventory, and where the model flips." },
];

export default function Numbers() {
  const [tab, setTab] = useState("wave");
  const t = TABS.find((x) => x.id === tab)!;
  return (
    <Reveal>
      <div className="no-print mb-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
          {TABS.map((x) => (
            <button
              key={x.id}
              onClick={() => setTab(x.id)}
              className={`rounded-full px-4 py-1.5 text-[13px] transition-all ${
                x.id === tab ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <span className="text-[13px] text-mute">{t.note}</span>
      </div>
      <div key={tab} className="u-rise">
        {tab === "wave" && <CreatorFunnel />}
        {tab === "order" && <UnitEconomics />}
        {tab === "account" && <AccountPnL />}
      </div>
    </Reveal>
  );
}
