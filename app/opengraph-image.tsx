import { ImageResponse } from "next/og";
import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/three/logoPath";

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
          justifyContent: "space-between",
          alignItems: "center",
          background: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, letterSpacing: 4, color: "#121212" }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#f23726" }} />
            GM, TIKTOK SHOP OPERATIONS
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 36, fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -3, color: "#121212" }}>
            <span>SuperOrdinary,</span>
            <span style={{ color: "#f23726" }}>read like an</span>
            <span>operator.</span>
          </div>
          <div style={{ marginTop: 36, fontSize: 26, color: "#3f3f3f" }}>
            The company, the portfolio, the engine, the numbers. By William Lee.
          </div>
        </div>
        <svg width="340" height="340" viewBox={LOGO_VIEWBOX.join(" ")}>
          <path fill="#121212" fillRule="evenodd" d={LOGO_PATH} />
        </svg>
      </div>
    ),
    size,
  );
}
