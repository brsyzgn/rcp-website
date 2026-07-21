import { PROCESS_STEPS } from "@/lib/constants";

interface ServiceProcessProps {
  note?: string;
}

export function ServiceProcess({ note }: ServiceProcessProps) {
  return (
    <section aria-labelledby="service-process-heading" className="py-2">
      <h2
        id="service-process-heading"
        className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl"
      >
        Çalışma Süreci
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
        {note ??
          "İlk görüşmeden destek aşamasına kadar şeffaf ve kontrollü ilerleriz."}
      </p>

      <ol className="mt-8 space-y-0">
        {PROCESS_STEPS.map((step, index) => (
          <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {index < PROCESS_STEPS.length - 1 && (
              <span
                className="absolute top-10 bottom-0 left-[17px] w-px bg-navy-100"
                aria-hidden
              />
            )}
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white shadow-md shadow-navy-900/20 ring-4 ring-white">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 rounded-2xl border border-navy-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-emerald-700 uppercase">
                Adım {index + 1}
              </p>
              <h3 className="mt-1 text-base font-bold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
