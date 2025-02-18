import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const frontendTechSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "vuedotjs",
  "angular",
  "sass",
  "tailwindcss",
  "bootstrap",
  "webpack",
  "vite",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "jest",
  "cypress",
  "storybook",
];

export default function FrontendNedir() {
  return (
    <section>
      <h2>Frontend Geliştirme Nedir?</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <p>
          Frontend geliştirme, web uygulamalarının kullanıcı tarafında görünen ve etkileşimde
          bulunulan kısmının oluşturulmasını kapsar. HTML, CSS ve JavaScript gibi temel web
          teknolojilerini kullanarak, kullanıcı dostu arayüzler ve etkileşimli web siteleri
          geliştirmeyi içerir. Frontend geliştiriciler, kullanıcı deneyimini (UX) ve kullanıcı
          arayüzünü (UI) optimize ederek, web sitelerinin hem görsel açıdan çekici hem de işlevsel
          olmasını sağlarlar. Modern frontend geliştirmede React, Vue.js gibi{" "}
          <span>JavaScript</span>
          framework&#39;leri yanında, .NET ekosisteminden <span>ASP.NET</span> MVC ve Blazor gibi
          teknolojiler de yaygın olarak kullanılmaktadır. Bu çeşitlilik, geliştiricilere
          projelerinin ihtiyaçlarına en uygun teknolojiyi seçme esnekliği sağlar.
        </p>
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg border px-20 pb-20 pt-8">
          <IconCloud iconSlugs={frontendTechSlugs} />
        </div>
      </div>
    </section>
  );
}
