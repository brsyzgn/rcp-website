export interface ContactPayload {
  name: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  pageUrl?: string;
  /** Honeypot — bots fill this; humans leave empty */
  website?: string;
}

export interface ContactFieldErrors {
  name?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const MAX = {
  name: 120,
  phone: 40,
  service: 120,
  message: 4000,
  pageUrl: 500,
} as const;

export function sanitizeText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\0/g, "").trim().slice(0, max);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function validateContactPayload(
  raw: Record<string, unknown>
): { ok: true; data: ContactPayload } | { ok: false; errors: ContactFieldErrors } {
  const name = sanitizeText(raw.name, MAX.name);
  const phone = sanitizeText(raw.phone, MAX.phone);
  const service = sanitizeText(raw.service, MAX.service);
  const message = sanitizeText(raw.message, MAX.message);
  const pageUrl = sanitizeText(raw.pageUrl, MAX.pageUrl);
  const website = sanitizeText(raw.website, 200);
  const consent = raw.consent === true || raw.consent === "true" || raw.consent === "on";

  const errors: ContactFieldErrors = {};

  if (name.length < 2) errors.name = "Ad soyad en az 2 karakter olmalıdır.";
  if (normalizePhone(phone).length < 10) {
    errors.phone = "Geçerli bir telefon numarası giriniz.";
  }
  if (message.length < 5) errors.message = "Mesaj en az 5 karakter olmalıdır.";
  if (!consent) errors.consent = "KVKK onayını işaretlemeniz gerekir.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      phone,
      service,
      message,
      consent,
      pageUrl: pageUrl || undefined,
      website: website || undefined,
    },
  };
}

export function buildContactSubject(service: string): string {
  const label = service.trim() || "Yaşam Elektronik";
  return `Yeni İletişim Formu Talebi – ${label}`;
}

export function formatIstanbulDate(date = new Date()): string {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    dateStyle: "long",
    timeStyle: "short",
  }).format(date);
}

export function buildContactEmailHtml(data: ContactPayload): string {
  const service = data.service.trim() || "Belirtilmedi";
  const telHref = normalizePhone(data.phone);
  const submittedAt = formatIstanbulDate();
  const pageUrl = data.pageUrl?.trim() || "Belirtilmedi";

  const row = (label: string, valueHtml: string) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e8eef5;width:160px;vertical-align:top;font-size:13px;font-weight:600;color:#486581;">
        ${label}
      </td>
      <td style="padding:12px 16px;border-bottom:1px solid #e8eef5;font-size:14px;color:#102a43;line-height:1.55;">
        ${valueHtml}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d9e2ec;box-shadow:0 8px 24px rgba(11,35,71,0.06);">
          <tr>
            <td style="background:#0b2347;padding:28px 32px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#9fb3c8;font-weight:600;">Yaşam Elektronik</p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">Yeni İletişim Formu Talebi</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 16px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Ad Soyad", escapeHtml(data.name))}
                ${row(
                  "Telefon",
                  `<a href="tel:${escapeHtml(telHref)}" style="color:#0b2347;font-weight:600;text-decoration:none;">${escapeHtml(data.phone)}</a>`
                )}
                ${row("Hizmet Türü", escapeHtml(service))}
                ${row(
                  "Mesaj",
                  `<div style="white-space:pre-wrap;">${escapeHtml(data.message)}</div>`
                )}
                ${row("KVKK Onayı", data.consent ? "Evet" : "Hayır")}
                ${row("Gönderim Tarihi", escapeHtml(submittedAt))}
                ${row(
                  "Kaynak Sayfa",
                  pageUrl.startsWith("http")
                    ? `<a href="${escapeHtml(pageUrl)}" style="color:#2563eb;word-break:break-all;">${escapeHtml(pageUrl)}</a>`
                    : escapeHtml(pageUrl)
                )}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 28px;background:#f8fafc;border-top:1px solid #e8eef5;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#829ab1;">
                Bu e-posta yasamelektronik.com iletişim formundan otomatik olarak gönderilmiştir.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailText(data: ContactPayload): string {
  const service = data.service.trim() || "Belirtilmedi";
  return [
    "Yeni İletişim Formu Talebi",
    "",
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
    `Hizmet Türü: ${service}`,
    `Mesaj: ${data.message}`,
    `KVKK Onayı: ${data.consent ? "Evet" : "Hayır"}`,
    `Gönderim Tarihi: ${formatIstanbulDate()}`,
    `Kaynak Sayfa: ${data.pageUrl?.trim() || "Belirtilmedi"}`,
  ].join("\n");
}
