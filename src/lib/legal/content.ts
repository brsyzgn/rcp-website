import { COMPANY } from "@/lib/constants";

export type LegalDocId = "kvkk" | "privacy" | "cookies";

export interface LegalDoc {
  id: LegalDocId;
  title: string;
  shortTitle: string;
  lastUpdated: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const LEGAL_DOCS: Record<LegalDocId, LegalDoc> = {
  kvkk: {
    id: "kvkk",
    title: "KVKK Aydınlatma Metni",
    shortTitle: "Aydınlatma Metni",
    lastUpdated: "21 Temmuz 2026",
    sections: [
      {
        heading: "1. Veri Sorumlusu",
        paragraphs: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu; Yaşam Elektronik (“Şirket”) olup, iletişim bilgileri aşağıdaki gibidir:",
          ...[
            COMPANY.legalName ? `Unvan: ${COMPANY.legalName}` : null,
            `Adres: ${COMPANY.fullAddress}`,
            `Telefon: ${COMPANY.phone} · E-posta: ${COMPANY.email}`,
            COMPANY.taxOffice && COMPANY.taxNumber
              ? `Vergi Dairesi / No: ${COMPANY.taxOffice} / ${COMPANY.taxNumber}`
              : null,
            COMPANY.mersisNumber ? `MERSİS: ${COMPANY.mersisNumber}` : null,
            COMPANY.tradeRegistryNumber
              ? `Ticaret Sicil No: ${COMPANY.tradeRegistryNumber}`
              : null,
            COMPANY.kepAddress ? `KEP: ${COMPANY.kepAddress}` : null,
          ].filter((line): line is string => Boolean(line)),
        ],
      },
      {
        heading: "2. İşlenen Kişisel Veriler",
        paragraphs: [
          "İletişim formu, telefon, WhatsApp veya e-posta yoluyla bizimle iletişime geçtiğinizde; ad-soyad, telefon numarası, e-posta adresi, talep konusu, mesaj içeriği ve iletişim kaydı tarih/saat bilgileri işlenebilir.",
          "Web sitemizi ziyaret ettiğinizde teknik zorunluluklar kapsamında IP adresi, tarayıcı türü, cihaz bilgisi ve çerez verileri de sınırlı ölçüde işlenebilir.",
        ],
      },
      {
        heading: "3. İşleme Amaçları",
        paragraphs: [
          "Kişisel verileriniz; taleplerinizin alınması ve yanıtlanması, keşif/teklif süreçlerinin yürütülmesi, hizmet sunumu, müşteri ilişkileri yönetimi, yasal yükümlülüklerin yerine getirilmesi ve bilgi güvenliğinin sağlanması amaçlarıyla işlenir.",
        ],
      },
      {
        heading: "4. Hukuki Sebepler",
        paragraphs: [
          "Veriler; KVKK m.5/2-(c) sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, m.5/2-(ç) hukuki yükümlülük, m.5/2-(f) meşru menfaat ve gerektiğinde açık rızanız (m.5/1) hukuki sebeplerine dayanılarak işlenir.",
        ],
      },
      {
        heading: "5. Aktarım",
        paragraphs: [
          "Kişisel verileriniz; yasal zorunluluklar ve hizmetin ifası için gerekli olduğu ölçüde, barındırma/e-posta altyapısı sağlayıcıları ile yetkili kamu kurumlarına aktarılabilir. Yurt dışına aktarım yapılacaksa KVKK’da öngörülen şartlara uyulur.",
        ],
      },
      {
        heading: "6. Saklama Süresi",
        paragraphs: [
          "Verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir.",
        ],
      },
      {
        heading: "7. Haklarınız",
        paragraphs: [
          "KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içi/yurt dışı aktarılan üçüncü kişileri bilme, düzeltme, silme/yok etme, itiraz ve zarar halinde tazminat talep etme haklarına sahipsiniz.",
          "Başvurularınızı info@yasamelektronik.com adresine veya yukarıdaki posta adresine yazılı olarak iletebilirsiniz. Talepleriniz en geç 30 gün içinde sonuçlandırılır.",
        ],
      },
    ],
  },
  privacy: {
    id: "privacy",
    title: "Gizlilik Politikası",
    shortTitle: "Gizlilik Politikası",
    lastUpdated: "21 Temmuz 2026",
    sections: [
      {
        heading: "1. Kapsam",
        paragraphs: [
          "Bu Gizlilik Politikası, Yaşam Elektronik web sitesi (yasamelektronik.com) ve ilişkili iletişim kanalları üzerinden toplanan bilgilerin nasıl korunduğunu açıklar. Politikamız, KVKK ve ilgili mevzuatla uyumlu şekilde hazırlanmıştır.",
        ],
      },
      {
        heading: "2. Toplanan Bilgiler",
        paragraphs: [
          "Doğrudan sağladığınız bilgiler: iletişim formundaki ad, telefon, hizmet talebi ve mesaj içeriği.",
          "Otomatik toplanan bilgiler: site kullanımı, cihaz/tarayıcı teknik verileri ve çerez tercihlerinize bağlı analitik veriler.",
        ],
      },
      {
        heading: "3. Kullanım Amaçları",
        paragraphs: [
          "Bilgileriniz yalnızca hizmet taleplerinizi karşılamak, iletişimi sürdürmek, site performansını iyileştirmek ve yasal yükümlülükleri yerine getirmek için kullanılır. Pazarlama iletişimi yalnızca açık rızanız varsa yapılır.",
        ],
      },
      {
        heading: "4. Güvenlik",
        paragraphs: [
          "Verilerinize yetkisiz erişimi önlemek için teknik ve idari tedbirler uygularız. Buna rağmen internet üzerinden iletimin mutlak güvenliği garanti edilemez; hassas bilgilerinizi paylaşırken dikkatli olmanızı öneririz.",
        ],
      },
      {
        heading: "5. Üçüncü Taraflar",
        paragraphs: [
          "Sitemizde Google Haritalar gibi üçüncü taraf hizmetler yer alabilir. Bu hizmetlerin kendi gizlilik politikaları geçerlidir. Sosyal medya bağlantıları ilgili platformların politikalarına tabidir.",
        ],
      },
      {
        heading: "6. Çocukların Gizliliği",
        paragraphs: [
          "Hizmetlerimiz 18 yaş altı çocuklara yönelik değildir. Bilerek 18 yaşından küçüklerden kişisel veri toplamayız.",
        ],
      },
      {
        heading: "7. Güncellemeler",
        paragraphs: [
          "Bu politika zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır; “Son güncelleme” tarihi değişiklikleri gösterir.",
        ],
      },
      {
        heading: "8. İletişim",
        paragraphs: [
          "Gizlilik ile ilgili sorularınız için: info@yasamelektronik.com · 0507 378 19 15",
        ],
      },
    ],
  },
  cookies: {
    id: "cookies",
    title: "Çerez Politikası",
    shortTitle: "Çerez Politikası",
    lastUpdated: "21 Temmuz 2026",
    sections: [
      {
        heading: "1. Çerez Nedir?",
        paragraphs: [
          "Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliği, güvenlik ve (tercihinize bağlı olarak) analitik/pazarlama amaçlarıyla kullanılır.",
        ],
      },
      {
        heading: "2. Kullandığımız Çerez Türleri",
        paragraphs: [
          "Zorunlu çerezler: Site güvenliği, oturum yönetimi ve çerez tercihlerinizin hatırlanması için gereklidir. Bu çerezler olmadan temel işlevler çalışmaz.",
          "Analitik çerezler: Trafik ve kullanım istatistiklerini anonim/agrega biçimde ölçmek için kullanılır. Yalnızca onayınızla etkinleşir.",
          "Pazarlama çerezleri: İlgi alanlarınıza uygun içerik sunmak veya reklam performansını ölçmek için kullanılabilir. Yalnızca onayınızla etkinleşir.",
        ],
      },
      {
        heading: "3. Tercih Yönetimi",
        paragraphs: [
          "İlk ziyaretinizde çerez banner’ı üzerinden “Tümünü Kabul Et”, “Sadece Zorunlu” veya “Tercihleri Yönet” seçeneklerini kullanabilirsiniz. Tercihleriniz cihazınızda saklanır; dilerseniz tarayıcı ayarlarından çerezleri silebilirsiniz.",
        ],
      },
      {
        heading: "4. Saklama",
        paragraphs: [
          "Oturum çerezleri tarayıcı kapatılınca silinir. Kalıcı çerezler, türüne göre değişen sürelerle saklanır. Tercih kaydı, tekrar sorulmaması için yerel depolamada tutulur.",
        ],
      },
      {
        heading: "5. İletişim",
        paragraphs: [
          "Çerez politikamız hakkında sorularınız için: info@yasamelektronik.com",
        ],
      },
    ],
  },
};

export const LEGAL_LINKS: { id: LegalDocId; label: string }[] = [
  { id: "kvkk", label: "KVKK Aydınlatma Metni" },
  { id: "privacy", label: "Gizlilik Politikası" },
  { id: "cookies", label: "Çerez Politikası" },
];
