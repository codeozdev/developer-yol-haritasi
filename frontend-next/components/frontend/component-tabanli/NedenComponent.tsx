import Grid from "@/components/layout/dynamic-component/grid/Grid";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";

const nedenlerData = [
  {
    id: 1,
    title: "Modülerlik",
    description:
      "Her component kendi mantığını, görünümünü ve stilini içerir. Bu yapı sayesinde uygulamanızı küçük, bağımsız ve yönetilebilir parçalara bölebilirsiniz. Componentler arası veri akışı ve iletişim kolayca yönetilebilir.",
    color: {
      text: "text-blue-600 dark:text-blue-400",
      shadow: "dark:shadow-blue-500",
    },
  },
  {
    id: 2,
    title: "Yeniden Kullanılabilirlik",
    description:
      "Bir kez oluşturulan component, projenin farklı yerlerinde tekrar tekrar kullanılabilir. Bu özellik, geliştirme sürecini hızlandırır, kod tekrarını azaltır ve tutarlı bir kullanıcı deneyimi sağlar.",
    color: {
      text: "text-green-600 dark:text-green-400",
      shadow: "dark:shadow-green-500",
    },
  },
  {
    id: 3,
    title: "Verimli Geliştirme",
    description:
      "Modern araçlar ve geliştirme ortamları ile component tabanlı geliştirme çok daha verimlidir. Hot-reload, state yönetimi ve debugging özellikleri sayesinde hızlı ve etkili bir geliştirme deneyimi sunar.",
    color: {
      text: "text-purple-600 dark:text-purple-400",
      shadow: "dark:shadow-purple-500",
    },
  },
];

export default function NedenComponent() {
  return (
    <PaddingContainer>
      <h2>Neden Component Tabanlı Geliştirme?</h2>
      <p>
        Modern web uygulamaları için <span>Component tabanlı</span> geliştirme yaklaşımı en verimli
        çözümü sunar. <span>React</span>, <span>Vue</span> ve <span>Angular</span> gibi popüler
        framework&#39;ler, component mimarisi sayesinde daha modüler, yeniden kullanılabilir ve
        bakımı kolay uygulamalar geliştirmenize olanak tanır.
      </p>

      <Grid variant="three-column" gap="medium">
        {nedenlerData.map((neden) => (
          <div
            key={neden.id}
            className={`md:bg-white shadow-md ${neden.color.shadow} p-4 md:p-6 rounded-lg`}>
            <h4 className={neden.color.text}>{neden.title}</h4>
            <p>{neden.description}</p>
          </div>
        ))}
      </Grid>

      <div>
        <h4 className="md:text-left">Component Tabanlı Geliştirmenin Avantajları</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Daha organize ve bakımı kolay kod yapısı</li>
          <li>Yeniden kullanılabilir UI bileşenleri</li>
          <li>Daha hızlı geliştirme süreci</li>
          <li>Kolay test edilebilirlik</li>
          <li>Zengin ekosistem ve hazır component kütüphaneleri</li>
          <li>Güçlü topluluk desteği</li>
          <li>Modern web standartlarına uygunluk</li>
          <li>SEO dostu yapılar (Next.js, Nuxt.js gibi)</li>
        </ul>
      </div>
    </PaddingContainer>
  );
}
