import { NextResponse } from "next/server";
import { getContactEmailConfig } from "@/lib/email/config";
import { validateContactPayload } from "@/lib/email/contact-template";
import { checkContactRateLimit } from "@/lib/email/rate-limit";
import { sendContactEmail } from "@/lib/email/send-contact-email";

export const runtime = "nodejs";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = checkContactRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: "Çok fazla istek gönderildi. Lütfen biraz sonra tekrar deneyin.",
        },
        {
          status: 429,
          headers: rate.retryAfterSec
            ? { "Retry-After": String(rate.retryAfterSec) }
            : undefined,
        }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { ok: false, error: "Geçersiz istek gövdesi." },
        { status: 400 }
      );
    }

    const honeypot =
      typeof body.website === "string" ? body.website.trim() : "";
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const validated = validateContactPayload(body);
    if (!validated.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Form alanlarını kontrol edin.",
          errors: validated.errors,
        },
        { status: 400 }
      );
    }

    const { isConfigured } = getContactEmailConfig();
    if (!isConfigured) {
      console.error("[contact] RESEND_API_KEY eksik");
      return NextResponse.json(
        {
          ok: false,
          error:
            "E-posta servisi yapılandırılmamış. Lütfen telefon veya WhatsApp ile ulaşın.",
        },
        { status: 503 }
      );
    }

    await sendContactEmail(validated.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] send failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}

/** Kurulum kontrolü — API key değerini asla döndürmez */
export async function GET() {
  const { isConfigured, to, usesTestFrom } = getContactEmailConfig();
  return NextResponse.json({
    ok: true,
    configured: isConfigured,
    to,
    usesTestFrom,
  });
}
