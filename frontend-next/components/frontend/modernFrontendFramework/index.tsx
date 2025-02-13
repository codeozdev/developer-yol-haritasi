import Link from "next/link";

export default function ModernFrontendFramework() {
  return (
    <div>
      {/* Modern Frontend Framework'leri Bölümü */}
      <section className="mt-12 bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Modern Frontend Framework'leri</h2>
        <p className="mb-6">
          Frontend geliştirme kariyerinizi planlarken iki temel yol bulunmaktadır: Kurumsal yazılım
          dünyasında tercih edilen .NET MVC gibi geleneksel yaklaşımlar ve modern web geliştirmede
          yaygın olan component tabanlı yaklaşım (React, Vue.js, Angular). Her iki yol da kendi
          içinde değerli fırsatlar sunar ve tercih yaparken hedef şirketlerin teknoloji seçimlerini
          göz önünde bulundurmanız önemlidir.
        </p>

        <p className="my-6 text-xs text-gray-500 italic">
          Not: Her iki yaklaşımın da kendi avantajları vardır ve proje gereksinimlerine göre tercih
          edilmelidir. Fakat %70 - %80 projelerinde modern frontend framework'leri component tabanlı
          yaklaşımı tercih etmektedir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MVC Yaklaşımı */}
          <div className="bg-gray-50 rounded-lg md:p-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">MVC Mimarisi</h3>
            <div className="flex-grow">
              <p className="mb-4">
                Model-View-Controller (MVC) mimarisi, Microsoft'un ASP.NET MVC gibi framework'lerde
                kullanılan geleneksel bir yaklaşımdır. Bu mimari, web uygulamalarını Model (veri),
                View (görünüm) ve Controller (kontrol) katmanlarına ayırarak daha organize bir yapı
                sunar. <br />
                Bu yaklaşımda:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Daha yapılandırılmış ve kurumsal projeler için uygundur
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Büyük ölçekli uygulamalar için tercih edilir
                </li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-medium text-gray-800">Popüler MVC Framework'leri:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• ASP.NET MVC (Microsoft)</li>
                  <li>• Ember.js</li>
                </ul>
              </div>
            </div>
            <Link
              href="/web-developer/frontend/mvc-tabanli"
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md w-full text-center">
              MVC Yaklaşımının Detayları
            </Link>
          </div>

          {/* Component Tabanlı Yaklaşım */}
          <div className="bg-gray-50 rounded-lg md:p-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Component Tabanlı</h3>
            <div className="flex-grow">
              <p className="text-gray-700 leading-relaxed mb-4">
                Modern component tabanlı yaklaşım, React ve Vue.js gibi framework'lerin benimsediği
                daha esnek ve modüler bir yapı sunar. Bu yaklaşımda:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Hızlı geliştirme ve kolay bakım sağlar
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Yeniden kullanılabilir bileşenler oluşturulur
                </li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-medium text-gray-800">Popüler Component Framework'leri:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• React (Facebook/Meta)</li>
                  <li>• Next.js</li>
                  <li>• Angular (Google)</li>
                  <li>• Vue.js</li>
                  <li>• Svelte</li>
                </ul>
              </div>
            </div>
            <Link
              href="/web-developer/frontend/component-tabanli"
              className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md w-full text-center">
              Component Tabanlı Yaklaşımın Detayları
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
