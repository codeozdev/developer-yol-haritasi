import Grid from "@/components/layout/dynamic-component/grid/Grid";
import MediaCard from "@/components/layout/dynamic-component/media-card";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";

const dotnetAvantajlari = [
  "Kurumsal düzeyde Microsoft desteği",
  "Güçlü tip sistemi ve yüksek performans",
  "Geniş kütüphane ekosistemi (NuGet)",
  "Visual Studio gibi güçlü geliştirme araçları",
  "Açık kaynak ve aktif geliştirici topluluğu",
  "Kapsamlı güvenlik özellikleri",
  "Azure ile kolay bulut entegrasyonu",
  "Cross-platform destek (.NET Core)",
];

const yolHaritasi = [
  "HTML ve CSS temelleri",
  "Bootstrap ile responsive tasarım",
  "C# programlama dili ve OOP kavramları",
  "ASP.NET MVC temel kavramları",
  "Entity Framework ile veritabanı işlemleri",
  "Blazor ile modern web uygulamaları",
];

export default function OnerilenYolHaritasi() {
  return (
    <PaddingContainer>
      <h2>Şimdi Ne Yapmalıyız?</h2>
      <div className="space-y-8">
        <p>
          MVC mimarisi ile web geliştirme yapmak istiyorsanız, Microsoft&#39;un sunduğu{" "}
          <span>.NET ekosistemi</span> en güçlü seçenek olacaktır. <span>ASP.NET MVC</span> ile
          başlayıp, modern web uygulamaları için <span>Blazor</span>&#39;a geçiş yapabilirsiniz.
          Microsoft&#39;un kurumsal düzeydeki desteği, geniş geliştirici topluluğu ve kapsamlı
          dokümantasyonu ile profesyonel web uygulamaları geliştirebilirsiniz.
        </p>

        <MediaCard
          title=".NET Ekosistemi Nedir?"
          imageSrc="/dotnet/dotnetEkosistem.png"
          imageAlt=".NET Ekosistemi"
          reverse={false}
          description=".NET, Microsoft tarafından geliştirilen açık kaynaklı, çapraz platform destekli bir geliştirme platformudur. C# programlama dili ile birlikte kullanılan .NET, web uygulamaları, mobil uygulamalar, oyunlar ve masaüstü uygulamaları geliştirmek için kullanılabilir. ASP.NET MVC ve Blazor gibi web framework&#39;leri ile modern ve güvenli web uygulamaları geliştirebilirsiniz."
        />

        <Grid variant="two-column-md" gap="small">
          <div className="p-6">
            <h4>Neden .NET&#39;i Tercih Etmelisiniz?</h4>
            <ul className="list-disc pl-6 space-y-2">
              {dotnetAvantajlari.map((avantaj, index) => (
                <li key={index}>{avantaj}</li>
              ))}
            </ul>
          </div>

          <div className="p-6">
            <h4>Önerilen Yol Haritası</h4>
            <ol className="list-decimal pl-6 space-y-2">
              {yolHaritasi.map((yol, index) => (
                <li key={index}>{yol}</li>
              ))}
            </ol>
          </div>
        </Grid>
      </div>
    </PaddingContainer>
  );
}
