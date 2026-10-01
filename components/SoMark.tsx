import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/three/logoPath";

/** The SuperOrdinary mark as inline SVG, inheriting the text colour. */
export default function SoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox={LOGO_VIEWBOX.join(" ")} className={className} aria-label="SuperOrdinary" role="img">
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}
