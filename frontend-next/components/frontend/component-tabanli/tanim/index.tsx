export default function Tanim() {
  return (
    <section>
      <h2>Neden Component Tabanlı Geliştirme?</h2>
      <p className="mb-4">
        Modern web uygulamaları için <span>Component tabanlı</span> geliştirme yaklaşımı en verimli
        çözümü sunar. <span>React</span>, <span>Vue</span> ve <span>Angular</span> gibi popüler
        framework&#39;ler, component mimarisi sayesinde daha modüler, yeniden kullanılabilir ve
        bakımı kolay uygulamalar geliştirmenize olanak tanır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-blue-600">Modülerlik</h4>
          <p>
            Her component kendi mantığını, görünümünü ve stilini içerir. Bu yapı sayesinde
            uygulamanızı küçük, bağımsız ve yönetilebilir parçalara bölebilirsiniz. Componentler
            arası veri akışı ve iletişim kolayca yönetilebilir.
          </p>
        </div>

        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-green-600">Yeniden Kullanılabilirlik</h4>
          <p>
            Bir kez oluşturulan component, projenin farklı yerlerinde tekrar tekrar kullanılabilir.
            Bu özellik, geliştirme sürecini hızlandırır, kod tekrarını azaltır ve tutarlı bir
            kullanıcı deneyimi sağlar.
          </p>
        </div>

        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-purple-600">Verimli Geliştirme</h4>
          <p>
            Modern araçlar ve geliştirme ortamları ile component tabanlı geliştirme çok daha
            verimlidir. Hot-reload, state yönetimi ve debugging özellikleri sayesinde hızlı ve
            etkili bir geliştirme deneyimi sunar.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4>Component Tabanlı Geliştirmenin Avantajları:</h4>
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
    </section>
  );
}
