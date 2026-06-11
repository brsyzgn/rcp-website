export function TimelinePattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -top-20 right-0 h-[400px] w-[400px] blur-[1px] text-brand-navy/[0.05]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M40 40 H260 V260 H40 Z M80 80 H220 V220 H80 Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.75" />
        <path
          d="M150 90 V210 M90 150 H210"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        className="absolute -bottom-16 -left-16 h-[350px] w-[350px] blur-[2px] text-brand-navy/[0.04]"
        viewBox="0 0 280 280"
        fill="none"
      >
        <path
          d="M20 140 H260 M140 20 V260"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M60 60 L220 220 M220 60 L60 220"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <rect
          x="100"
          y="100"
          width="80"
          height="80"
          rx="4"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}
