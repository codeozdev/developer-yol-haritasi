export interface FrontendTercihProps {
  title: string;
  color: string;
  description: string;
  features: string[];
  frameworks: string[];
  link: string;
  linkText: string;
}

export const frontendTercih: FrontendTercihProps[] = [
  {
    title: ".NET (MVC)",
    color: "blue",
    description:
      "Model-View-Controller (MVC) mimarisi, Microsoft'un ASP.NET MVC gibi framework'lerde kullanılan geleneksel bir yaklaşımdır. Bu mimari, web uygulamalarını Model (veri), View (görünüm) ve Controller (kontrol) katmanlarına ayırarak daha organize bir yapı sunar.",
    features: [
      "Daha yapılandırılmış ve kurumsal projeler için uygundur",
      "Büyük ölçekli uygulamalar için tercih edilir",
    ],
    frameworks: ["ASP.NET MVC (Microsoft)", "Blazor"],
    link: "/web-dev/frontend/dotnet",
    linkText: "Detaylı Bilgi İçin Tıklayınız",
  },
  {
    title: "JavaScript (Component Tabanlı)",
    color: "green",
    description:
      "Modern component tabanlı yaklaşım, React ve Vue.js gibi framework'lerin benimsediği daha esnek ve modüler bir yapı sunar.",
    features: [
      "Hızlı geliştirme ve kolay bakım sağlar",
      "Yeniden kullanılabilir bileşenler oluşturulur",
    ],
    frameworks: ["React (Facebook/Meta)", "Next.js", "Angular (Google)", "Vue.js", "Svelte"],
    link: "/web-dev/frontend/javascript",
    linkText: "Detaylı Bilgi İçin Tıklayınız",
  },
];
