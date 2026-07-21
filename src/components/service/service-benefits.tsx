import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  items: { title: string; description: string }[];
}

export function ServiceBenefits({ items }: ServiceBenefitsProps) {
  return (
    <section aria-labelledby="service-benefits-heading" className="py-2">
      <h2
        id="service-benefits-heading"
        className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl"
      >
        Neden Bu Hizmet?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
        Kurumsal standartlarda, ölçülebilir fayda sağlayan çözümler.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.title}
            className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200/80 hover:shadow-md hover:shadow-emerald-500/10"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <CheckCircle2 className="size-4" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
