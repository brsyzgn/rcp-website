/**
 * @deprecated İçerik artık src/lib/services.ts içinde.
 * Bu dosya geriye dönük importlar için re-export sağlar.
 */
export type {
  ServiceFaqItem,
  ServiceBenefit,
  ServiceDefinition as ServiceContent,
} from "@/lib/services";

export {
  services,
  SERVICE_LIST,
  SERVICE_BODY,
  getServiceBySlug,
} from "@/lib/services";
