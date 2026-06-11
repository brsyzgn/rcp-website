export const COMPANY = {
  name: "YAŞAM ELEKTRONİK",
  slogan: "Güvenliğiniz Bizim İşimiz",
  phone: "0507 378 19 15",
  phoneRaw: "+905073781915",
  whatsapp: "https://wa.me/905073781915",
  address: "İstasyon Mahallesi, Vatan Caddesi No:129",
  city: "Tuzla / İstanbul",
  fullAddress: "İstasyon Mahallesi, Vatan Caddesi No:129, Tuzla / İstanbul",
  email: "info@yasamelektronik.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ya%C5%9Fam+Elektronik+%C4%B0stasyon+Mahallesi+Vatan+Caddesi+No%3A129+Tuzla+%C4%B0stanbul",
} as const;

/** Gerçek hesap URL'lerinizi buraya yazın. Boş bırakılanlar sitede görünmez. */
export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/yasamelektroniktuzla",
    icon: "instagram" as const,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1JP167NwNo/",
    icon: "facebook" as const,
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://x.com/yasamelektronik",
    icon: "twitter" as const,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/recep-karata%C5%9F-4b7ba7412",
    icon: "linkedin" as const,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "",
    icon: "tiktok" as const,
  },
] as const;

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Sürecimiz", href: "#surec" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export const SERVICES = [
  {
    id: "kamera-alarm",
    href: "/kamera-sistemleri-tuzla",
    title: "Kamera ve Alarm Sistemleri",
    description:
      "IP kamera, DVR/NVR kayıt ve akıllı alarm sistemleriyle ev ve iş yerinizi 7/24 koruyoruz.",
    icon: "cctv" as const,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=85&auto=format&fit=crop",
    imageAlt: "Güvenlik kontrol merkezi ve CCTV izleme ekranları",
  },
  {
    id: "diyafon",
    href: "/diyafon-sistemleri-tuzla",
    title: "Görüntülü Diyafon Sistemleri",
    description:
      "Kapı girişleriniz için yüksek çözünürlüklü görüntülü diyafon kurulum ve bakım hizmetleri.",
    icon: "intercom" as const,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&auto=format&fit=crop",
    imageAlt: "Modern apartman girişi ve görüntülü kapı kontrol sistemi",
  },
  {
    id: "uydu",
    href: "/uydu-sistemleri-tuzla",
    title: "Uydu ve Merkezi Anten Sistemleri",
    description:
      "Uydu, merkezi anten ve çanak kurulumlarında kesintisiz yayın kalitesi sağlıyoruz.",
    icon: "satellite" as const,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=85&auto=format&fit=crop",
    imageAlt: "Çatı üzerinde profesyonel uydu anten kurulumu",
  },
  {
    id: "tv-servis",
    href: "/tv-tamiri-tuzla",
    title: "LED - LCD TV Tamiri ve LED Değişimi",
    description:
      "Tüm marka LED ve LCD televizyonlarda uzman teknik servis, garantili onarım ve arka aydınlatma LED değişimi.",
    icon: "tv" as const,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&auto=format&fit=crop",
    imageAlt: "Profesyonel elektronik servis ve televizyon tamiri",
  },
] as const;

export const WHY_US = [
  {
    title: "15+ Yıllık Deneyim",
    description:
      "Tuzla ve çevresinde yılların getirdiği tecrübeyle güvenilir hizmet sunuyoruz.",
    icon: "award" as const,
  },
  {
    title: "Profesyonel Ekip",
    description:
      "Sertifikalı ve deneyimli teknisyenlerimizle her projede kalite standartlarını koruyoruz.",
    icon: "users" as const,
  },
  {
    title: "Hızlı Müdahale",
    description:
      "Arıza ve kurulum taleplerinize aynı gün içinde hızlı geri dönüş sağlıyoruz.",
    icon: "zap" as const,
  },
  {
    title: "Garantili İşçilik",
    description:
      "Tüm kurulum ve onarım işlemlerimizde işçilik garantisi ile huzur veriyoruz.",
    icon: "shield" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: "iletisim",
    label: "İletişim",
    title: "İlk Görüşme",
    description:
      "Telefon veya WhatsApp üzerinden ihtiyaçlarınızı dinliyoruz.",
    icon: "phone" as const,
  },
  {
    id: "kesif",
    label: "Keşif",
    title: "Ücretsiz Keşif",
    description:
      "Alanınızı analiz ederek en uygun çözümü belirliyoruz.",
    icon: "search" as const,
  },
  {
    id: "teklif",
    label: "Teklif",
    title: "Teklif ve Planlama",
    description: "Size özel çözüm ve fiyatlandırma sunuyoruz.",
    icon: "fileText" as const,
  },
  {
    id: "kurulum",
    label: "Kurulum",
    title: "Profesyonel Kurulum",
    description: "Uzman ekibimiz sistemlerinizi eksiksiz kuruyor.",
    icon: "wrench" as const,
  },
  {
    id: "destek",
    label: "Destek",
    title: "Teslimat ve Destek",
    description: "Testleri tamamlıyor ve satış sonrası destek sağlıyoruz.",
    icon: "shield" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Mehmet K.",
    location: "Tuzla",
    text: "Evimize kamera sistemi kurdurdum. Kurulum çok profesyoneldi, görüntü kalitesi mükemmel. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Ayşe D.",
    location: "Pendik",
    text: "Diyafon sistemimiz bozulmuştu, aynı gün gelip tamir ettiler. Fiyatları da çok makul, teşekkürler Yaşam Elektronik.",
    rating: 5,
  },
  {
    name: "Ali R.",
    location: "Kartal",
    text: "İş yerimize alarm ve kamera sistemi kurulumu yaptırdık. Ekip çok ilgili ve işini iyi biliyor. Güvenle çalışıyoruz.",
    rating: 5,
  },
] as const;

export const SERVICE_AREAS = [
  "Tuzla",
  "Pendik",
  "Kartal",
  "Maltepe",
  "İstanbul Anadolu Yakası",
] as const;

export const SCHEMA_SERVICES = [
  "Kamera Sistemleri",
  "Alarm Sistemleri",
  "Görüntülü Diyafon",
  "Uydu Sistemleri",
  "Merkezi Anten Sistemleri",
  "LED LCD TV Tamiri",
] as const;

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.5!2d29.3!3d40.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ5JzEyLjAiTiAyOcKwMTgnMDAuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str";
