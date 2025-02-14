import Image from "next/image";

export default function SimdiNeYapmaliyiz() {
  return (
    <section>
      <h2>Şimdi Ne Yapmalıyız?</h2>
      <div className="space-y-8">
        <p>
          MVC mimarisi ile web geliştirme yapmak istiyorsanız, Microsoft&#39;un sunduğu{" "}
          <span>.NET ekosistemi</span> en güçlü seçenek olacaktır. <span>ASP.NET MVC</span> ile
          başlayıp, modern web uygulamaları için <span>Blazor</span>&#39;a geçiş yapabilirsiniz.
          Microsoft&#39;un kurumsal düzeydeki desteği, geniş geliştirici topluluğu ve kapsamlı
          dokümantasyonu ile profesyonel web uygulamaları geliştirebilirsiniz.
        </p>

        <div className="">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] relative w-full">
              <Image
                src="/mvc-tabanli/dotnet.jpg"
                alt=".NET Ekosistemi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={100}
              />
            </div>
            <div className="px-6 pt-6">
              <h4>.NET Ekosistemi Nedir?</h4>
              <p>
                .NET, Microsoft tarafından geliştirilen açık kaynaklı, çapraz platform destekli bir
                geliştirme platformudur. C# programlama dili ile birlikte kullanılan .NET, web
                uygulamaları, mobil uygulamalar, oyunlar ve masaüstü uygulamaları geliştirmek için
                kullanılabilir. ASP.NET MVC ve Blazor gibi web framework&#39;leri ile modern ve
                güvenli web uygulamaları geliştirebilirsiniz.
              </p>
            </div>
            <div className="p-6">
              <h4>Neden .NET&#39;i Tercih Etmelisiniz?</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kurumsal düzeyde Microsoft desteği</li>
                <li>Güçlü tip sistemi ve yüksek performans</li>
                <li>Geniş kütüphane ekosistemi (NuGet)</li>
                <li>Visual Studio gibi güçlü geliştirme araçları</li>
                <li>Açık kaynak ve aktif geliştirici topluluğu</li>
                <li>Kapsamlı güvenlik özellikleri</li>
                <li>Azure ile kolay bulut entegrasyonu</li>
                <li>Cross-platform destek (.NET Core)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h4>Önerilen Yol Haritası</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>HTML ve CSS temelleri</li>
            <li>Bootstrap ile responsive tasarım</li>
            <li>C# programlama dili ve OOP kavramları</li>
            <li>ASP.NET MVC temel kavramları</li>
            <li>Entity Framework ile veritabanı işlemleri</li>
            <li>Blazor ile modern web uygulamaları</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
