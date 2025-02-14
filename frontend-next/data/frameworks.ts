export interface Framework {
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

export const frameworks: Framework[] = [
  {
    id: 1,
    title: "React",
    image: {
      src: "/component-tabanli/react.jpg",
      alt: "react",
    },
    description:
      "React, kullanıcı arayüzleri oluşturmayı kolaylaştıran bileşen tabanlı bir JavaScript kütüphanesidir. Tek sayfa uygulamaları (SPA) ve dinamik web siteleri geliştirmek için kullanılır. Sanal DOM yapısı sayesinde hızlı ve verimli güncellemeler yaparak performansı artırır. Açık kaynaklı olması ve geniş topluluk desteği sayesinde sürekli gelişen React, modern web uygulamalarının temel taşlarından biri haline gelmiştir.",
    link: "https://react.dev",
    githubStars: "232k",
    githubLink: "https://github.com/facebook/react",
  },
  {
    id: 2,
    title: "Nextjs",
    image: {
      src: "/component-tabanli/nextjs.jpeg",
      alt: "nextjs",
    },
    description:
      "Next.js, React tabanlı bir framework olup, web uygulamalarını daha verimli ve optimize edilmiş şekilde geliştirmeye olanak tanır. Sunucu tarafında render alma (SSR) ve statik site üretme (SSG) gibi özellikler sayesinde hızlı yüklenen ve SEO dostu sayfalar oluşturur. API desteği, otomatik yönlendirme ve sayfa önbellekleme gibi yetenekleri ile geliştiricilere esneklik sunar. Büyük ölçekli projelerde sıkça tercih edilen Next.js, performans ve kullanıcı deneyimini ön planda tutarak modern web çözümleri sağlar.",
    link: "https://nextjs.org/",
    githubStars: "129k",
    githubLink: "https://github.com/vercel/next.js",
  },
  {
    id: 3,
    title: "Angular",
    image: {
      src: "/component-tabanli/angular.jpg",
      alt: "angular",
    },
    description:
      "Angular, Google tarafından geliştirilen kapsamlı bir web uygulama framework'üdür. TypeScript tabanlı yapısı ile tip güvenliği sağlarken, güçlü dependency injection sistemi ve modüler yapısı ile büyük ölçekli uygulamalar için idealdir. İki yönlü veri bağlama, form yönetimi, routing ve HTTP istemcisi gibi zengin özellikleri ile tam donanımlı bir geliştirme deneyimi sunar. Kurumsal düzeyde uygulamalar için tercih edilen Angular, güvenilir ve ölçeklenebilir çözümler sağlar.",
    link: "https://angular.io/",
    githubStars: "96k",
    githubLink: "https://github.com/angular/angular",
  },
  {
    id: 4,
    title: "Vue.js",
    image: {
      src: "/component-tabanli/vue.webp",
      alt: "vue",
    },
    description:
      "Vue.js, kullanımı kolay ve esnek bir JavaScript framework'üdür. Aşamalı mimari yaklaşımı sayesinde projeye kademeli olarak entegre edilebilir. Reaktif veri sistemi, bileşen tabanlı yapısı ve sanal DOM kullanımı ile performanslı uygulamalar geliştirmeye olanak tanır. Detaylı dokümantasyonu ve arkasındaki güçlü topluluk desteği ile öğrenmesi kolay, geliştirmesi keyifli bir framework sunar. Hem küçük hem de büyük ölçekli projeler için uygun çözümler sağlar.",
    link: "https://vuejs.org/",
    githubStars: "48.8k",
    githubLink: "https://github.com/vuejs/core",
  },
  {
    id: 5,
    title: "Svelte",
    image: {
      src: "/component-tabanli/svelte2.webp",
      alt: "svelte",
    },
    description:
      "Svelte, geleneksel framework yaklaşımından farklı olarak derleme zamanında çalışan modern bir JavaScript framework'üdür. Sanal DOM kullanmak yerine, kodu doğrudan DOM'u güncelleyecek şekilde derleyerek daha küçük paket boyutu ve daha yüksek performans sağlar. Basit ve sezgisel sözdizimi, reaktif programlama yaklaşımı ve minimum boilerplate kod ile geliştiricilere temiz ve verimli bir kod yazma deneyimi sunar. Özellikle hız ve boyut optimizasyonu gerektiren projeler için ideal bir seçimdir.",
    link: "https://svelte.dev/",
    githubStars: "81.3k",
    githubLink: "https://github.com/sveltejs/svelte",
  },
];
