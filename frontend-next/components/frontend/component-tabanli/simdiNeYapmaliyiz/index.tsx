import Image from "next/image";

export default function SimdiNeYapmaliyiz() {
  return (
    <section>
      <h2>Şimdi Ne Yapmalıyız?</h2>
      <div className="space-y-8">
        <p>
          Modern web uygulamaları için <span>Component tabanlı</span> geliştirme yaklaşımı en
          verimli çözümü sunar. <span>React</span>, <span>Vue</span> ve <span>Angular</span> gibi
          popüler framework&#39;ler ile profesyonel web uygulamaları geliştirebilirsiniz. Geniş
          ekosistem, güçlü topluluk desteği ve modern araçlar ile hızlı ve etkili bir geliştirme
          deneyimi elde edebilirsiniz.
        </p>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src="/component-tabanli/javascript.png"
              alt="JavaScript Ekosistemi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={100}
            />
          </div>
          <div className="px-6 pt-6">
            <h4>JavaScript Ekosistemi Nedir?</h4>
            <p>
              JavaScript ekosistemi, modern web geliştirmenin temelini oluşturan geniş bir teknoloji
              ve araç setidir. npm (Node Package Manager) üzerinden erişilebilen yüz binlerce paket,
              framework ve kütüphane ile web uygulamaları geliştirebilirsiniz. Node.js ile sunucu
              tarafında da çalışabilen JavaScript, tam kapsamlı web projeleri geliştirmenize olanak
              tanır. <span>TypeScript</span> ise JavaScript&#39;e tip güvenliği ekleyen, Microsoft
              tarafından geliştirilen üst seviye bir programlama dilidir. Nesne yönelimli
              programlama özellikleri ve gelişmiş IDE desteği ile kurumsal projelerde tercih edilir.
            </p>
          </div>
          <div className="p-6">
            <h4>Neden JavaScript&#39;i Tercih Etmelisiniz?</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kolay öğrenme eğrisi ve esnek yapı</li>
              <li>Dünyanın en büyük paket ekosistemi (npm)</li>
              <li>Hem frontend hem backend geliştirme imkanı</li>
              <li>TypeScript ile güçlü tip sistemi desteği</li>
              <li>Zengin framework ve kütüphane seçenekleri</li>
              <li>Büyük ve aktif geliştirici topluluğu</li>
              <li>Modern web standartlarına tam uyum</li>
              <li>Yüksek performanslı JIT derleyiciler</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h4>Önerilen Yol Haritası</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>HTML ve CSS temelleri</li>
            <li>JavaScript programlama dili</li>
            <li>Modern JavaScript (ES6+) özellikleri</li>
            <li>
              React/Nextjs/Angular/Vue/Svelte framework&#39;lerinden birisi seçilmeli (sadece birisi
              üzerinde odaklanılmalı)
            </li>
            <li>State yönetimi (React Context API, Redux)</li>
            <li>Son olarak TypeScript öğrenmeli ve projelerimizi TypeScript ile oluşturmalıyız.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
