import Link from "next/link";
export default function ModernFramework() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MVC Yaklaşımı */}
        <section className=" h-full flex flex-col">
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
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md w-full text-xs md:text-base text-center">
            MVC Yaklaşımının Detayları
          </Link>
        </section>

        {/* Component Tabanlı Yaklaşım */}
        <section className="h-full flex flex-col">
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
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md w-full text-xs md:text-base text-center">
            Component Tabanlı Yaklaşımın Detayları
          </Link>
        </section>
      </div>
    </div>
  );
}
