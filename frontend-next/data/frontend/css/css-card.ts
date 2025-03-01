export interface DataProps {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: string;
  githubStars?: string;
  githubLink?: string;
}

export const data: DataProps[] = [
  {
    id: 1,
    title: "Vanilla CSS",
    image: {
      src: "/css/vanilla.png",
      alt: "vanilla-css",
    },
    description:
      "Vanilla CSS, web sayfalarını biçimlendirmek için kullanılan temel stil dilidir. Herhangi bir ön işlemci veya framework kullanmadan, saf CSS ile çalışmayı ifade eder. Seçiciler, özellikler ve değerler kullanarak HTML elementlerinin görünümünü ve düzenini kontrol etmeye olanak tanır. Flexbox, Grid gibi modern CSS özellikleri ile karmaşık sayfa düzenleri oluşturulabilir. Tarayıcı uyumluluğu ve performans açısından avantajlıdır.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 2,
    title: "SASS/SCSS",
    image: {
      src: "/css/sass.jpg",
      alt: "sass",
    },
    description:
      "SASS (Syntactically Awesome Style Sheets), CSS'i daha güçlü ve kullanışlı hale getiren bir ön işlemcidir. Değişkenler, iç içe kurallar, mixinler ve fonksiyonlar gibi özellikler sunar. SCSS sözdizimi ile standart CSS'e daha yakın bir yazım sağlar. Kod tekrarını azaltır, bakımı kolaylaştırır ve modüler CSS yazımına olanak tanır. Büyük projelerde kod organizasyonunu ve yönetimini kolaylaştırır.",
    link: "https://sass-lang.com/",
  },
  {
    id: 3,
    title: "Bootstrap",
    image: {
      src: "/css/bootstrap.jpg",
      alt: "bootstrap",
    },
    description:
      "Bootstrap, web siteleri ve uygulamalar için popüler bir CSS framework'üdür. Hazır bileşenler, grid sistemi ve utility sınıfları ile hızlı prototipleme ve geliştirme sağlar. Responsive tasarım için önceden tanımlanmış medya sorguları içerir. Geniş bileşen kütüphanesi ile kullanıcı arayüzü geliştirmeyi hızlandırır. Kapsamlı dokümantasyonu ve büyük topluluk desteği ile öğrenmesi ve kullanması kolaydır.",
    link: "https://getbootstrap.com/",
    githubStars: "171k",
    githubLink: "https://github.com/twbs/bootstrap",
  },
  {
    id: 4,
    title: "Tailwind",
    image: {
      src: "/css/tailwind.png",
      alt: "tailwind",
    },
    description:
      "Tailwind CSS, utility-first yaklaşımını benimseyen modern bir CSS framework'üdür. HTML içinde utility sınıfları kullanarak stillendirme yapmanıza olanak tanır. Özelleştirilebilir tasarım sistemi ve düşük seviyeli utility sınıfları ile benzersiz tasarımlar oluşturulabilir. JIT (Just-In-Time) derleyici ile sadece kullanılan stiller derlenir, bu da küçük bundle boyutu sağlar. Hızlı geliştirme ve kolay bakım için idealdir.",
    link: "https://tailwindcss.com/",
    githubStars: "85.6k",
    githubLink: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    id: 5,
    title: "Bulma",
    image: {
      src: "/css/bulma.png",
      alt: "bulma",
    },
    description:
      "Bulma, modern ve esnek bir CSS framework'üdür. Flexbox tabanlı grid sistemi ile responsive tasarımlar oluşturmayı kolaylaştırır. Modüler yapısı sayesinde sadece ihtiyaç duyulan bileşenleri kullanmaya olanak tanır. Özelleştirilebilir SASS/SCSS değişkenleri ile tema oluşturmayı destekler. Sade ve anlaşılır sınıf isimleri ile hızlı geliştirme yapılabilir. JavaScript bağımlılığı olmadan çalışabilmesi önemli avantajlarından biridir.",
    link: "https://bulma.io/",
    githubStars: "49.6k",
    githubLink: "https://github.com/jgthms/bulma",
  },
];
