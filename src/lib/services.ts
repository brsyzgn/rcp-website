export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDefinition {
  slug: string;
  title: string;
  description: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  paragraphs: string[];
  benefits: ServiceBenefit[];
  scope: string[];
  faq: ServiceFaqItem[];
  cta: {
    title: string;
    description: string;
  };
}

/**
 * Tek kaynaklı hizmet kataloğu.
 * Slug’lar lokal SEO için `-tuzla` ile tutulur (mevcut URL’ler bozulmaz).
 */
export const services = {
  cameraSystems: {
    slug: "kamera-sistemleri-tuzla",
    title: "Kamera Sistemleri Tuzla",
    description:
      "Yaşam Elektronik olarak Tuzla, Pendik, Kartal ve Maltepe'de IP kamera, AHD kamera ve kayıt cihazı kurulumu sunuyoruz.",
    h1: "Tuzla Kamera Sistemleri Kurulumu",
    metaTitle: "Kamera Sistemleri Tuzla | Yaşam Elektronik",
    metaDescription:
      "Tuzla ve İstanbul Anadolu Yakası'nda IP kamera, CCTV ve güvenlik kamera sistemi kurulumu. Yaşam Elektronik ile profesyonel keşif ve montaj.",
    keywords: [
      "Tuzla Kamera Sistemleri",
      "İstanbul Kamera Sistemleri",
      "CCTV Tuzla",
    ],
    paragraphs: [
      "Tuzla kamera sistemleri ihtiyacınız için ücretsiz keşif yapıyor, mekânınıza uygun kamera sayısı ve kayıt süresini birlikte planlıyoruz. Gece görüşü, hareket algılama ve mobil izleme özellikleriyle ev ve iş yerinizi 7/24 koruma altına alıyoruz.",
      "İstanbul kamera sistemleri kurulumunda deneyimli ekibimiz kablolama, montaj ve yazılım yapılandırmasını eksiksiz tamamlar. Yaşam Elektronik Tuzla merkezimizden hızlı servis sağlanır.",
    ],
    benefits: [
      {
        title: "7/24 Mobil İzleme",
        description:
          "Telefon veya tablet üzerinden canlı görüntü ve kayıt erişimi ile mekânınızı her yerden takip edin.",
      },
      {
        title: "Gece Görüşü & HD Kayıt",
        description:
          "Düşük ışıkta net görüntü ve yüksek çözünürlüklü kayıt ile olay anlarını kaçırmayın.",
      },
      {
        title: "Ücretsiz Keşif",
        description:
          "Tuzla ve çevresinde sahada keşif ile doğru kamera sayısı, açı ve kayıt süresi planlanır.",
      },
      {
        title: "Garantili Montaj",
        description:
          "Kablolama, NVR/DVR kurulumu ve kullanıcı eğitimi dahil profesyonel işçilik garantisi.",
      },
    ],
    scope: [
      "IP ve AHD güvenlik kamera kurulumu",
      "NVR / DVR kayıt cihazı montajı ve yapılandırma",
      "Gece görüşü ve hareket algılama ayarları",
      "Mobil uygulama ile uzaktan izleme",
      "Mevcut sistem genişletme ve bakım",
      "Ev, iş yeri, site ve depo çözümleri",
    ],
    faq: [
      {
        question: "Kamera kurulumu ne kadar sürer?",
        answer:
          "Standart ev veya küçük iş yeri kurulumları genellikle 1 gün içinde tamamlanır. Kamera sayısı ve kablolama mesafesine göre süre değişebilir; keşif sonrası net plan paylaşılır.",
      },
      {
        question: "İnternet olmadan kamera kaydı alınır mı?",
        answer:
          "Evet. Kayıt yerel NVR/DVR üzerinde tutulur. İnternet, uzaktan izleme ve bildirimler için kullanılır; yerel kayıt internet kesintisinde de devam eder.",
      },
      {
        question: "Kaç kamera gerekir?",
        answer:
          "Mekân büyüklüğü, giriş noktaları ve risk alanlarına göre belirlenir. Ücretsiz keşifte size özel öneri sunuyoruz.",
      },
    ],
    cta: {
      title: "Tuzla’da kamera sistemi kurulumuna başlayalım",
      description:
        "Ücretsiz keşif ve şeffaf teklif için hemen arayın veya WhatsApp’tan yazın.",
    },
  },

  alarmSystems: {
    slug: "alarm-sistemleri-tuzla",
    title: "Alarm Sistemleri Tuzla",
    description:
      "Tuzla ve çevresinde ev, site ve iş yeri alarm sistemi kurulumu. Profesyonel montaj ve garantili işçilik.",
    h1: "Tuzla Alarm Sistemleri",
    metaTitle: "Alarm Sistemleri Tuzla | Yaşam Elektronik",
    metaDescription:
      "Ev ve iş yeri alarm sistemi kurulumu Tuzla. Kablosuz ve kablolu alarm çözümleri, 7/24 güvenlik. Yaşam Elektronik uzman ekibi.",
    keywords: [
      "Tuzla Alarm Sistemleri",
      "İstanbul Alarm Sistemleri",
      "Alarm Sistemleri Tuzla",
    ],
    paragraphs: [
      "Alarm sistemleri Tuzla bölgesinde hırsızlık ve acil durumlara karşı güvenilir koruma sağlar. Manyetik kontak, hareket dedektörü ve akıllı panel sistemleri ile ihtiyacınıza özel çözümler sunuyoruz.",
      "İstanbul alarm sistemleri kurulumunda Yaşam Elektronik olarak test, kullanım eğitimi ve satış sonrası destek veriyoruz.",
    ],
    benefits: [
      {
        title: "Yerel & Uzaktan Koruma",
        description:
          "İnternetsiz siren koruması; isteğe bağlı mobil bildirim ve uzaktan kurma/kapatma.",
      },
      {
        title: "Sensör Çeşitliliği",
        description:
          "Kapı/pencere kontakları, PIR hareket, duman ve cam kırılma sensörleri ile katmanlı güvenlik.",
      },
      {
        title: "Hızlı Müdahale",
        description:
          "Tuzla merkezli ekibimiz keşif, montaj ve arıza müdahalesinde hızlı dönüş sağlar.",
      },
      {
        title: "Kullanım Eğitimi",
        description:
          "Teslimatta panel kullanımı, kodlar ve acil durum senaryoları adım adım anlatılır.",
      },
    ],
    scope: [
      "Kablolu ve kablosuz alarm paneli kurulumu",
      "Kapı / pencere manyetik kontak montajı",
      "Hareket ve cam kırılma dedektörleri",
      "İç / dış siren sistemleri",
      "Mobil bildirim ve akıllı entegrasyon",
      "Periyodik bakım ve arıza servisi",
    ],
    faq: [
      {
        question: "Alarm internet olmadan çalışır mı?",
        answer:
          "Evet. Panel, sensörler ve siren yerel olarak çalışır. İnternet mobil bildirim ve uzaktan kontrol için eklenir.",
      },
      {
        question: "Ev ve iş yeri için fark var mı?",
        answer:
          "Sensör sayısı, bölgeleme ve bildirim senaryoları mekâna göre özelleştirilir. Keşifte ihtiyaca uygun paket önerilir.",
      },
      {
        question: "Kurulum sonrası destek var mı?",
        answer:
          "Evet. Kullanım eğitimi, ayar değişiklikleri ve teknik destek satış sonrası hizmet kapsamındadır.",
      },
    ],
    cta: {
      title: "Alarm sisteminiz için ücretsiz keşif alın",
      description:
        "Ev veya iş yeriniz için doğru alarm çözümünü birlikte planlayalım.",
    },
  },

  intercomSystems: {
    slug: "diyafon-sistemleri-tuzla",
    title: "Diyafon Sistemleri Tuzla",
    description:
      "Apartman, site ve villa girişlerine görüntülü diyafon kurulumu ve bakım hizmeti.",
    h1: "Görüntülü Diyafon Sistemleri Tuzla",
    metaTitle: "Görüntülü Diyafon Tuzla | Yaşam Elektronik",
    metaDescription:
      "Apartman ve site girişlerine görüntülü diyafon kurulumu Tuzla. Görüntülü kapı telefonu montaj ve bakım hizmeti.",
    keywords: [
      "Görüntülü Diyafon Tuzla",
      "Tuzla Diyafon Sistemleri",
      "Diyafon kurulumu",
    ],
    paragraphs: [
      "Görüntülü diyafon Tuzla kurulumlarında kapı önü görüntüleme, uzaktan kapı açma ve kayıt özellikleri sunuyoruz. Yeni bina ve mevcut yapılara uyumlu çözümler üretiyoruz.",
      "Pendik, Kartal ve Maltepe bölgelerinde de diyafon sistemleri montaj ve arıza servisi sağlıyoruz.",
    ],
    benefits: [
      {
        title: "Görüntülü Güvenlik",
        description:
          "Kapı önünü ekrandan görün, sesli görüşün ve güvenle kapı açın.",
      },
      {
        title: "Mevcut Altyapıya Uyum",
        description:
          "Eski diyafon veya kapı otomasyonu olan binalarda uyumlu dönüşüm ve yenileme.",
      },
      {
        title: "Villa’dan Site’ye",
        description:
          "Tek daire villadan çok katlı apartman ve site girişlerine ölçeklenebilir çözümler.",
      },
      {
        title: "Bakım & Arıza",
        description:
          "Panel, monitör ve kapı kilidi arızalarında hızlı teknik servis.",
      },
    ],
    scope: [
      "Görüntülü ve sesli diyafon kurulumu",
      "Apartman / site giriş paneli montajı",
      "Daire içi monitör ve handset kurulumu",
      "Manyetik kilit ve kapı otomasyonu entegrasyonu",
      "Mevcut sistem yenileme ve kablolama",
      "Arıza tespiti ve periyodik bakım",
    ],
    faq: [
      {
        question: "Hangi binalara uygulanır?",
        answer:
          "Apartman, site, villa, rezidans ve iş yeri girişlerine uygulanabilir. Keşifte mevcut altyapı değerlendirilir.",
      },
      {
        question: "Eski diyafon değiştirilebilir mi?",
        answer:
          "Çoğu durumda mevcut kablolama kullanılarak görüntülü sisteme geçiş mümkündür. Uygunluk keşifte netleşir.",
      },
      {
        question: "Kurulum süresi ne kadar?",
        answer:
          "Daire sayısı ve kablolama durumuna göre değişir. Küçük projeler genellikle kısa sürede tamamlanır.",
      },
    ],
    cta: {
      title: "Görüntülü diyafon için keşif randevusu alın",
      description:
        "Binanıza uygun paneli birlikte seçelim; teklifi aynı gün netleştirelim.",
    },
  },

  satelliteSystems: {
    slug: "uydu-sistemleri-tuzla",
    title: "Uydu Sistemleri Tuzla",
    description:
      "Çanak anten, uydu ve merkezi anten kurulumu. Tuzla ve İstanbul Anadolu Yakası hizmeti.",
    h1: "Uydu ve Merkezi Anten Sistemleri Tuzla",
    metaTitle: "Uydu Anten Servisi Tuzla | Yaşam Elektronik",
    metaDescription:
      "Uydu ve merkezi anten kurulumu Tuzla. Çanak anten, merkezi sistem ve uydu yayın çözümleri. Yaşam Elektronik.",
    keywords: [
      "Uydu Anten Servisi Tuzla",
      "Tuzla Uydu Sistemleri",
      "Merkezi Anten Tuzla",
    ],
    paragraphs: [
      "Uydu anten servisi Tuzla kapsamında çanak montajı, sinyal ayarı ve merkezi anten altyapıları kuruyoruz. Kesintisiz yayın kalitesi için profesyonel ekipman kullanıyoruz.",
      "Site ve iş yerleri için merkezi anten sistemleri projelendirme ve kurulum hizmeti sunuyoruz.",
    ],
    benefits: [
      {
        title: "Kesintisiz Yayın",
        description:
          "Doğru açı, LNB ve sinyal ayarı ile net uydu ve TV yayını.",
      },
      {
        title: "Merkezi Sistem",
        description:
          "Site ve iş yerleri için merkezi anten projelendirme ve dağıtım.",
      },
      {
        title: "Güvenli Montaj",
        description:
          "Çatı ve cephe montajlarında güvenlik standartlarına uygun işçilik.",
      },
      {
        title: "Hızlı Servis",
        description:
          "Sinyal kaybı, çanak kayması ve kablo arızalarında hızlı müdahale.",
      },
    ],
    scope: [
      "Çanak anten montajı ve yön ayarı",
      "LNB, switch ve kablo altyapısı",
      "Merkezi anten sistemleri",
      "Sinyal ölçümü ve optimizasyon",
      "Site / iş yeri dağıtım panelleri",
      "Arıza, bakım ve yeniden kurulum",
    ],
    faq: [
      {
        question: "Çanak anten kurulumu ne kadar sürer?",
        answer:
          "Standart bireysel kurulumlar genellikle birkaç saat içinde tamamlanır. Merkezi sistemlerde süre proje kapsamına bağlıdır.",
      },
      {
        question: "Sinyal kaybı neden olur?",
        answer:
          "Çanak kayması, LNB arızası, kablo hasarı veya engel (ağaç/bina) sık görülen nedenlerdir. Ölçümle tespit edilir.",
      },
      {
        question: "Merkezi anten kimler için uygundur?",
        answer:
          "Çok daireli apartman ve sitelerde tek altyapıdan dağıtım için idealdir; maliyet ve kalite avantajı sağlar.",
      },
    ],
    cta: {
      title: "Uydu ve anten kurulumu için hemen ulaşın",
      description:
        "Çanak, merkezi anten veya sinyal sorunu için ücretsiz ön değerlendirme alın.",
    },
  },

  tvRepair: {
    slug: "tv-tamiri-tuzla",
    title: "TV Tamiri Tuzla",
    description:
      "LED-LCD televizyon tamiri, arka aydınlatma LED değişimi ve panel onarımı. Garantili servis.",
    h1: "LED LCD TV Tamiri Tuzla",
    metaTitle: "LED LCD TV Tamiri Tuzla | Yaşam Elektronik",
    metaDescription:
      "LED ve LCD TV tamiri, LED değişimi Tuzla. Tüm marka televizyonlarda garantili teknik servis. Yaşam Elektronik.",
    keywords: [
      "LED LCD TV Tamiri Tuzla",
      "Tuzla TV Tamiri",
      "TV servisi İstanbul",
    ],
    paragraphs: [
      "LED LCD TV tamiri Tuzla servisimizde tüm marka televizyonlarda arıza tespiti ve onarım yapıyoruz. Şeffaf fiyat politikası ile müşteri onayı sonrası işleme başlıyoruz.",
      "Tuzla TV tamiri ve LED değişimi hizmetlerimiz için Yaşam Elektronik'e telefon veya WhatsApp ile ulaşabilirsiniz.",
    ],
    benefits: [
      {
        title: "Şeffaf Fiyat",
        description:
          "Ön değerlendirme sonrası net maliyet; onayınız olmadan işleme başlanmaz.",
      },
      {
        title: "LED & Kart Onarımı",
        description:
          "Arka aydınlatma LED, güç kartı, anakart ve T-Con arızalarında uzman müdahale.",
      },
      {
        title: "Hızlı Teslim",
        description:
          "Parça uygunsa çoğu onarım aynı gün veya 1–3 iş günü içinde tamamlanır.",
      },
      {
        title: "Garantili İşçilik",
        description:
          "Yapılan onarımlarda işçilik garantisi ile güvenli servis.",
      },
    ],
    scope: [
      "LED / LCD TV arıza tespiti",
      "Arka aydınlatma LED değişimi",
      "Güç kartı ve anakart onarımı",
      "T-Con ve görüntü kartı sorunları",
      "Panel değerlendirme ve bilgilendirme",
      "Yazılım / yazılım güncelleme desteği",
    ],
    faq: [
      {
        question: "TV tamiri ne kadar sürer?",
        answer:
          "Arızaya göre aynı gün veya 1–3 iş günü. Özel parça gerektiren durumlarda süre teminine bağlıdır.",
      },
      {
        question: "Hangi markalara bakıyorsunuz?",
        answer:
          "Yaygın LED/LCD markalarında arıza tespiti ve onarım yapıyoruz. Model bilgisiyle ön değerlendirme yapılır.",
      },
      {
        question: "Panel değişimi yapılır mı?",
        answer:
          "Ekonomik ve teknik uygunluk değerlendirilir. Uygun değilse alternatif seçenekler şeffaf şekilde paylaşılır.",
      },
    ],
    cta: {
      title: "TV arızanız için ücretsiz ön değerlendirme",
      description:
        "Marka ve arıza belirtisini yazın; size süre ve maliyet tahmini verelim.",
    },
  },
} as const satisfies Record<string, ServiceDefinition>;

export type ServiceKey = keyof typeof services;
export type Service = (typeof services)[ServiceKey];

export const SERVICE_LIST: Service[] = Object.values(services);

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICE_LIST.find((service) => service.slug === slug);
}

/** @deprecated services / SERVICE_LIST kullanın */
export const SERVICE_PAGES = SERVICE_LIST.map((service) => ({
  slug: service.slug,
  title: service.title,
  metaTitle: service.metaTitle,
  metaDescription: service.metaDescription,
  h1: service.h1,
  keywords: [...service.keywords],
}));

/** @deprecated getServiceBySlug kullanın */
export const SERVICE_BODY = Object.fromEntries(
  SERVICE_LIST.map((service) => [
    service.slug,
    {
      intro: service.description,
      paragraphs: [...service.paragraphs],
      benefits: service.benefits.map((b) => ({ ...b })),
      scope: [...service.scope],
      faq: service.faq.map((f) => ({ ...f })),
      cta: { ...service.cta },
    },
  ])
);
