export type CookieCategory = "necessary" | "analytics" | "marketing";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

export const COOKIE_STORAGE_KEY = "ye-cookie-consent-v1";

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: "",
};

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (typeof parsed?.necessary !== "boolean" || !parsed.decidedAt) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decidedAt: parsed.decidedAt,
    };
  } catch {
    return null;
  }
}

export function writeCookiePreferences(
  prefs: Omit<CookiePreferences, "necessary" | "decidedAt"> & {
    analytics: boolean;
    marketing: boolean;
  }
): CookiePreferences {
  const value: CookiePreferences = {
    necessary: true,
    analytics: prefs.analytics,
    marketing: prefs.marketing,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(value));
  return value;
}

export function acceptAllCookies(): CookiePreferences {
  return writeCookiePreferences({ analytics: true, marketing: true });
}

export function acceptNecessaryOnly(): CookiePreferences {
  return writeCookiePreferences({ analytics: false, marketing: false });
}
