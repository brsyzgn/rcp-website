import { COMPANY } from "@/lib/constants";

export function getContactEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || COMPANY.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Yaşam Elektronik <onboarding@resend.dev>";

  return {
    apiKey,
    to,
    from,
    isConfigured: Boolean(apiKey),
    usesTestFrom: from.includes("@resend.dev"),
  };
}
