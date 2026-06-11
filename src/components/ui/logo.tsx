import { useId } from "react";
import { cn } from "@/lib/utils";

export type LogoVariant = "full" | "icon";
export type LogoTheme = "light" | "dark";

export interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
}

const COLORS = {
  navy: "#0B2347",
  blue: "#2563EB",
  blueLight: "#3B82F6",
  grey: "#7B8FA3",
  greyMuted: "#94A3B8",
  white: "#FFFFFF",
} as const;

function LogoMark({
  uid,
  theme,
}: {
  uid: string;
  theme: LogoTheme;
}) {
  const gradY = `${uid}-y`;
  const gradOrbit = `${uid}-orbit`;
  const eFill = theme === "dark" ? COLORS.greyMuted : COLORS.grey;
  const orbitEnd = theme === "dark" ? "#B8C5D6" : COLORS.grey;

  return (
    <g>
      <defs>
        <linearGradient id={gradY} x1="36" y1="58" x2="36" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor={COLORS.navy} />
          <stop offset="1" stopColor={COLORS.blueLight} />
        </linearGradient>
        <linearGradient id={gradOrbit} x1="8" y1="54" x2="64" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor={COLORS.blue} />
          <stop offset="1" stopColor={orbitEnd} />
        </linearGradient>
      </defs>

      {/* E — arka plan */}
      <path
        fill={eFill}
        d="M37 15h21v7H44v5h11v7H44v5h14v7H37V15z"
      />

      {/* Y — ön plan */}
      <path
        fill={`url(#${gradY})`}
        d="M13 13L27 39V55h6V39l14-26h-8l-8 21-8-21h-8z"
      />

      {/* Yörünge */}
      <path
        fill="none"
        stroke={`url(#${gradOrbit})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M9 52C18 22 42 8 58 16"
      />

      {/* Uydu gövdesi */}
      <rect x="54" y="10" width="6" height="5" rx="1" fill={COLORS.navy} />
      <rect x="48" y="11.5" width="5" height="2" rx="0.5" fill={COLORS.blue} />
      <rect x="61" y="11.5" width="5" height="2" rx="0.5" fill={COLORS.blue} />

      {/* Sinyal dalgaları */}
      <path
        fill="none"
        stroke={COLORS.navy}
        strokeWidth="1.2"
        strokeLinecap="round"
        d="M52 20c2 1 3 2.5 3 4M49 22c3.5 2 5.5 4.5 5.5 7.5"
        opacity={theme === "dark" ? 0.85 : 1}
      />
    </g>
  );
}

export function Logo({
  variant = "full",
  theme = "light",
  width,
  height,
  className,
  title = "Yaşam Elektronik",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const primaryText = theme === "dark" ? COLORS.white : COLORS.navy;
  const secondaryText = theme === "dark" ? COLORS.greyMuted : COLORS.grey;

  if (variant === "icon") {
    const size = width ?? height ?? 40;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        width={size}
        height={height ?? size}
        className={cn("shrink-0", className)}
        role="img"
        aria-label={title}
      >
        <title>{title}</title>
        <LogoMark uid={uid} theme={theme} />
      </svg>
    );
  }

  const w = width ?? 200;
  const h = height ?? 48;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 56"
      width={w}
      height={h}
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g transform="translate(0 1) scale(0.8)">
        <LogoMark uid={uid} theme={theme} />
      </g>
      <text
        x="62"
        y="25"
        fill={primaryText}
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="18.5"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        YAŞAM
      </text>
      <text
        x="62"
        y="46"
        fill={secondaryText}
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        ELEKTRONİK
      </text>
    </svg>
  );
}
