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
          background: "#f5f2eb",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#e0412b" }} />
          <div style={{ fontSize: 24, letterSpacing: 3, color: "#16140f", fontFamily: "monospace" }}>
            SO / AUDIT
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, color: "#16140f" }}>
            SuperOrdinary, read like an operator.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#3d3a33", fontFamily: "sans-serif" }}>
            The TikTok Shop operating engine: workflows, unit economics, scorecard, first 90 days.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#6b665b", fontFamily: "monospace" }}>
          Prepared by William Lee
        </div>
      </div>
    ),
    size,
  );
}
