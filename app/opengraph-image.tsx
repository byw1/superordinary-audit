import { ImageResponse } from "next/og";

export const alt = "SuperOrdinary, read like an operator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "radial-gradient(900px 500px at 80% 40%, rgba(255,90,54,0.35), #09090b 70%)",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#e0412b" }} />
          <div style={{ fontSize: 24, letterSpacing: 3, color: "#f4f1eb", fontFamily: "sans-serif" }}>
            SUPERORDINARY · AN OPERATOR’S READ
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.02, color: "#f4f1eb" }}>
            SuperOrdinary, read like an operator.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#bdb8ae", fontFamily: "sans-serif" }}>
            The TikTok Shop engine: the business, where value leaks, the numbers, the plan.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#8d887e", fontFamily: "sans-serif" }}>
          Prepared by William Lee
        </div>
      </div>
    ),
    size,
  );
}
