import Grid from "@/components/layout/dynamic-component/grid/Grid";
import MediaCard from "@/components/layout/dynamic-component/media-card";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";

const javascriptAvantajlari = [
  "Kolay öğrenme eğrisi ve esnek yapı",
  "Dünyanın en büyük paket ekosistemi (npm)",
  "Hem frontend hem backend geliştirme imkanı",
  "TypeScript ile güçlü tip sistemi desteği",
  "Zengin framework ve kütüphane seçenekleri",
  "Büyük ve aktif geliştirici topluluğu",
  "Modern web standartlarına tam uyum",
  "Yüksek performanslı JIT derleyiciler",
];

const yolHaritasi = [
  "HTML ve CSS temelleri",
  "JavaScript programlama dili",
  "Modern JavaScript (ES6+) özellikleri",
  "React/Nextjs/Angular/Vue/Svelte framework'lerinden birisi seçilmeli (sadece birisi üzerinde odaklanılmalı)",
  "State yönetimi (React Context API, Redux)",
  "Son olarak TypeScript öğrenmeli ve projelerimizi TypeScript ile oluşturmalıyız.",
];

export default function OnerilenYolHaritasi() {
  return (
    <PaddingContainer>
      <h2>Şimdi Ne Yapmalıyız?</h2>
      <div className="space-y-8">
        <p>
          Modern web uygulamaları için <span>Component tabanlı</span> geliştirme yaklaşımı en
          verimli çözümü sunar. <span>React</span>, <span>Vue</span> ve <span>Angular</span> gibi
          popüler framework&#39;ler ile profesyonel web uygulamaları geliştirebilirsiniz. Geniş
          ekosistem, güçlü topluluk desteği ve modern araçlar ile hızlı ve etkili bir geliştirme
          deneyimi elde edebilirsiniz.
        </p>
        <MediaCard
          title="JavaScript Ekosistemi"
          imageSrc="/javascript/javascript.png"
          imageAlt="JavaScript Ekosistemi"
          reverse={false}
          description="JavaScript ekosistemi, modern web geliştirmenin temelini oluşturan geniş bir teknoloji ve araç setidir. npm (Node Package Manager) üzerinden erişilebilen yüz binlerce paket, framework ve kütüphane ile web uygulamaları geliştirebilirsiniz. Node.js ile sunucu tarafında da çalışabilen JavaScript, tam kapsamlı web projeleri geliştirmenize olanak tanır. TypeScript ise JavaScript&#39;e tip güvenliği ekleyen, Microsoft tarafından geliştirilen üst seviye bir programlama dilidir. Nesne yönelimli programlama özellikleri ve gelişmiş IDE desteği ile kurumsal projelerde tercih edilir."
        />
        <Grid variant="two-column-md" gap="small">
          <div className="p-6">
            <h4>Neden JavaScript&#39;i Tercih Etmelisiniz?</h4>
            <ul className="list-disc pl-6 space-y-2">
              {javascriptAvantajlari.map((avantaj, index) => (
                <li key={index}>{avantaj}</li>
              ))}
            </ul>
          </div>

          <div className="p-6">
            <h4 className="">Önerilen Yol Haritası</h4>
            <ol className="list-decimal pl-6 space-y-2">
              {yolHaritasi.map((adim, index) => (
                <li key={index}>{adim}</li>
              ))}
            </ol>
          </div>
        </Grid>
      </div>
    </PaddingContainer>
  );
}
