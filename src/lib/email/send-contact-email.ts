import { Resend } from "resend";
import { getContactEmailConfig } from "@/lib/email/config";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  buildContactSubject,
  normalizePhone,
  type ContactPayload,
} from "@/lib/email/contact-template";

export async function sendContactEmail(data: ContactPayload) {
  const { apiKey, to, from, isConfigured } = getContactEmailConfig();

  if (!isConfigured) {
    throw new Error("RESEND_API_KEY tanımlı değil.");
  }

  const resend = new Resend(apiKey);
  const subject = buildContactSubject(data.service);
  const phoneHref = normalizePhone(data.phone);

  const result = await resend.emails.send({
    from,
    to: [to],
    subject,
    html: buildContactEmailHtml(data),
    text: buildContactEmailText(data),
    // Müşteri e-postası yok; telefona hızlı dönüş için headers notu yeterli
    headers: {
      "X-Contact-Phone": phoneHref,
      "X-Entity-Ref": "yasam-elektronik-contact-form",
    },
  });

  if (result.error) {
    throw new Error(result.error.message || "E-posta gönderilemedi.");
  }

  return result.data;
}
