"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLegal } from "@/components/legal/legal-provider";
import { cn } from "@/lib/utils";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  className?: string;
}

export function ConsentCheckbox({
  checked,
  onChange,
  error,
  className,
}: ConsentCheckboxProps) {
  const { openLegal } = useLegal();
  const inputId = useId();
  const errorId = useId();

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn(
          "group flex items-start gap-3 rounded-xl border p-3.5 transition-all duration-200",
          checked
            ? "border-emerald-300/80 bg-emerald-50/60 shadow-sm shadow-emerald-500/10"
            : "border-navy-100 bg-navy-50/40 hover:border-navy-200 hover:bg-navy-50",
          error && !checked && "border-red-300 bg-red-50/40"
        )}
      >
        <button
          type="button"
          id={inputId}
          role="checkbox"
          aria-checked={checked}
          aria-invalid={Boolean(error) && !checked}
          aria-describedby={error ? errorId : undefined}
          onClick={() => onChange(!checked)}
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2",
            checked
              ? "border-emerald-500 bg-emerald-500 shadow-sm shadow-emerald-500/30"
              : "border-navy-300 bg-white group-hover:border-navy-400"
          )}
        >
          <motion.span
            initial={false}
            animate={checked ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            aria-hidden
          >
            <Check className="size-3.5 text-white" strokeWidth={3} />
          </motion.span>
        </button>

        <p className="text-sm leading-relaxed text-slate-600">
          <button
            type="button"
            onClick={() => openLegal("kvkk")}
            className="font-semibold text-navy-800 underline decoration-navy-300 underline-offset-2 transition-colors hover:text-navy-950 hover:decoration-navy-500"
          >
            KVKK Aydınlatma Metni
          </button>
          &apos;ni ve{" "}
          <button
            type="button"
            onClick={() => openLegal("privacy")}
            className="font-semibold text-navy-800 underline decoration-navy-300 underline-offset-2 transition-colors hover:text-navy-950 hover:decoration-navy-500"
          >
            Gizlilik Politikası
          </button>
          &apos;nı okudum, kişisel verilerimin işlenmesini kabul ediyorum.
          <span className="text-red-500" aria-hidden>
            {" "}
            *
          </span>
        </p>
      </div>

      {/* Native required input for HTML5 form validation fallback */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        tabIndex={-1}
        aria-hidden
        className="sr-only"
      />

      {error && !checked && (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
