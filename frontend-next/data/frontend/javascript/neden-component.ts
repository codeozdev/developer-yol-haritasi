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
    title: "Modülerlik",
    description:
      "Her component kendi mantığını, görünümünü ve stilini içerir. Bu yapı sayesinde uygulamanızı küçük, bağımsız ve yönetilebilir parçalara bölebilirsiniz. Componentler arası veri akışı ve iletişim datalayca yönetilebilir.",
    color: {
      text: "text-blue-600",
      shadow: "shadow-blue-500",
    },
  },
  {
    id: 2,
    title: "Yeniden Kullanılabilirlik",
    description:
      "Bir kez oluşturulan component, projenin farklı yerlerinde tekrar tekrar kullanılabilir. Bu özellik, geliştirme sürecini hızlandırır, kod tekrarını azaltır ve tutarlı bir kullanıcı deneyimi sağlar.",
    color: {
      text: "text-green-600",
      shadow: "shadow-green-500",
    },
  },
  {
    id: 3,
    title: "Verimli Geliştirme",
    description:
      "Modern araçlar ve geliştirme ortamları ile component tabanlı geliştirme çok daha verimlidir. Hot-reload, state yönetimi ve debugging özellikleri sayesinde hızlı ve etkili bir geliştirme deneyimi sunar.",
    color: {
      text: "text-purple-600",
      shadow: "shadow-purple-500",
    },
  },
];

export const avantajlar = [
  "Daha organize ve bakımı kolay kod yapısı",
  "Yeniden kullanılabilir UI bileşenleri",
  "Daha hızlı geliştirme süreci",
  "Kolay test edilebilirlik",
  "Zengin ekosistem ve hazır component kütüphaneleri",
  "Güçlü topluluk desteği",
  "Modern web standartlarına uygunluk",
  "SEO dostu yapılar (Next.js, Nuxt.js gibi)",
];

// bir hata var tailwind renkleri uygulanmiyor o yuzden bu stilleri component icinde kullanmak zorunda kaldik
