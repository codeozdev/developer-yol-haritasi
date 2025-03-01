interface DataProps {
  id: number;
  title: string;
  description: string;
  color: {
    text: string;
    shadow: string;
  };
}

export const data: DataProps[] = [
  {
    id: 1,
    title: "Model",
    description:
      " Veri yapısını ve iş mantığını yönetir. Veritabanı işlemleri, veri doğrulama ve iş kuralları bu katmanda yer alır. Uygulama verilerinin tek kaynak noktası olarak çalışır.",
    color: {
      text: "text-blue-600 dark:text-blue-400",
      shadow: "dark:shadow-blue-500",
    },
  },
  {
    id: 2,
    title: "View",
    description:
      "Kullanıcı arayüzünü temsil eder. Model'den gelen verileri görsel olarak sunar ve kullanıcı etkileşimlerini Controller'a iletir. Sadece görüntüleme mantığı içerir.",
    color: {
      text: "text-green-600 dark:text-green-400",
      shadow: "dark:shadow-green-500",
    },
  },
  {
    id: 3,
    title: "Controller",
    description:
      "Model ve View arasındaki iletişimi yönetir. Kullanıcı isteklerini işler, gerekli iş mantığını çağırır ve sonuçları View'a iletir. Uygulama akışının kontrolünü sağlar.",
    color: {
      text: "text-purple-600 dark:text-purple-400",
      shadow: "dark:shadow-purple-500",
    },
  },
];

export const avantajlar = [
  "Kodun modüler ve organize yapısı sayesinde bakım kolaylığı",
  "Sorumlulukların net ayrımı ile daha temiz kod yapısı",
  "Ekip çalışması için uygun yapı",
  "Test edilebilirliğin artması",
  "Kurumsal projelere uygunluk",
];
