export default function Tanim() {
  return (
    <section>
      <h2>Neden MVC Mimarisi ile Frontend Geliştirmeliyiz?</h2>
      <p className="mb-4">
        MVC (Model-View-Controller) mimarisi, büyük ölçekli web uygulamaları için güçlü bir yapı
        sunar. Bu mimari yaklaşım, uygulamayı üç temel bileşene ayırarak kod organizasyonunu ve
        bakımını kolaylaştırır:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-blue-600">Model</h4>
          <p>
            Veri yapısını ve iş mantığını yönetir. Veritabanı işlemleri, veri doğrulama ve iş
            kuralları bu katmanda yer alır. Uygulama verilerinin tek kaynak noktası olarak çalışır.
          </p>
        </div>
        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-green-600">View</h4>
          <p>
            Kullanıcı arayüzünü temsil eder. Model&#39;den gelen verileri görsel olarak sunar ve
            kullanıcı etkileşimlerini Controller&#39;a iletir. Sadece görüntüleme mantığı içerir.
          </p>
        </div>
        <div className="md:bg-white md:shadow-lg md:p-6 rounded-lg">
          <h4 className="text-purple-600">Controller</h4>
          <p>
            Model ve View arasındaki iletişimi yönetir. Kullanıcı isteklerini işler, gerekli iş
            mantığını çağırır ve sonuçları View&#39;a iletir. Uygulama akışının kontrolünü sağlar.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h4>MVC&#39;nin Avantajları:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kodun modüler ve organize yapısı sayesinde bakım kolaylığı</li>
          <li>Sorumlulukların net ayrımı ile daha temiz kod yapısı</li>
          <li>Ekip çalışması için uygun yapı</li>
          <li>Test edilebilirliğin artması</li>
          <li>Kurumsal projelere uygunluk</li>
        </ul>
      </div>
    </section>
  );
}
