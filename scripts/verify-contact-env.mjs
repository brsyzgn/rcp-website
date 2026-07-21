#!/usr/bin/env node
/**
 * İletişim formu env kontrolü.
 * Kullanım: npm run verify:contact
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const envLocal = path.join(root, ".env.local");

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const out = {};
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const env = {
  ...parseEnv(path.join(root, ".env")),
  ...parseEnv(envLocal),
  ...process.env,
};

const key = (env.RESEND_API_KEY || "").trim();
const to = (env.CONTACT_TO_EMAIL || "info@yasamelektronik.com").trim();
const from = (env.CONTACT_FROM_EMAIL || "").trim();

console.log("\nYaşam Elektronik — iletişim formu kurulumu\n");
console.log(`  .env.local        : ${fs.existsSync(envLocal) ? "var" : "YOK"}`);
console.log(
  `  RESEND_API_KEY    : ${key ? (key.startsWith("re_") ? "tanımlı" : "geçersiz format") : "EKSİK"}`
);
console.log(`  CONTACT_TO_EMAIL  : ${to}`);
console.log(
  `  CONTACT_FROM_EMAIL: ${from || "(varsayılan onboarding@resend.dev)"}`
);

if (!key) {
  console.log(`
Sonraki adımlar:
  1. https://resend.com/signup
  2. Domains → yasamelektronik.com + DNS Verify
  3. API Keys → Create API Key
  4. .env.local içine RESEND_API_KEY=re_... yazın
  5. npm run dev → formu test edin

Vercel (canlı):
  Project → Settings → Environment Variables
  RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL ekleyin → Redeploy
`);
  process.exit(1);
}

if (!key.startsWith("re_")) {
  console.log("\nHata: RESEND_API_KEY 're_' ile başlamalı.\n");
  process.exit(1);
}

console.log("\nOrtam hazır. npm run dev ile formu test edebilirsiniz.\n");
process.exit(0);
