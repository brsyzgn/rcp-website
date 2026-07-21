import { Shield } from "lucide-react";

interface ServiceScopeProps {
  items: string[];
  paragraphs?: string[];
}

export function ServiceScope({ items, paragraphs }: ServiceScopeProps) {
  return (
    <section aria-labelledby="service-scope-heading" className="py-2">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
          <Shield className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <h2
            id="service-scope-heading"
            className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl"
          >
            Hizmet Kapsamı
          </h2>
          <p className="text-sm text-slate-500">Neler dahil?</p>
        </div>
      </div>

      {paragraphs && paragraphs.length > 0 && (
        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 rounded-xl border border-navy-100/80 bg-navy-50/40 px-4 py-3 text-sm text-slate-700"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
