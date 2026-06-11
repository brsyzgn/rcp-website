import { cn } from "@/lib/utils";

const LOGO_ASPECT = 1121 / 377;

export interface LogoProps {
  className?: string;
  title?: string;
}

export function Logo({
  className,
  title = "Yaşam Elektronik",
}: LogoProps) {
  return (
    <img
      src="/rcp.png"
      alt={title}
      width={Math.round(52 * LOGO_ASPECT)}
      height={52}
      decoding="async"
      className={cn(
        "block h-11 w-auto max-w-none object-contain object-left sm:h-12",
        className
      )}
    />
  );
}
