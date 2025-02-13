import Image from "next/image";

export default function HtmlCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* HTML Card */}
      <div className="bg-white rounded-xl shadow-lg w-full">
        <div className="h-[300px] relative w-full">
          <Image
            src="/frontend/html.jpg"
            alt="HTML kod örneği"
            fill
            className="rounded-t-md object-cover"
            priority
          />
        </div>

        <div className="p-6">
          <h4>HTML</h4>
          <p>
            İşaretleme dili olan Html, web sayfalarının hazırlanmasında kullanılan sistemdir. Bir
            programlama dili olmayan Html bilgisayarlarımızda kullandığımız web sitelerinin
            oluşturulmasında kullanılır. Chrome, Firefox ve İnternet Explorer gibi tarayıcılar html
            kodlarını işleyerek bu kodları web sayfasına dönüştürür.
          </p>
        </div>
      </div>

      {/* CSS Card */}
      <div className="bg-white rounded-xl shadow-lg w-full">
        <div className="h-[300px] relative w-full">
          <Image
            src="/frontend/css.png"
            alt="CSS kod örneği"
            fill
            className="rounded-t-md object-cover object-left"
            priority
          />
        </div>

        <div className="p-6">
          <h4>CSS</h4>
          <p>
            CSS (Cascading Style Sheets), web sayfalarının görünümünü ve düzenini kontrol eden stil
            dilidir. HTML elementlerinin renklerini, boyutlarını, konumlarını, animasyonlarını ve
            diğer görsel özelliklerini belirlemek için kullanılır. Responsive tasarım ile farklı
            ekran boyutlarına uyum sağlayan modern web siteleri oluşturmamızı sağlar.
          </p>
        </div>
      </div>

      {/* JavaScript Card */}
      <div className="bg-white rounded-xl shadow-lg w-full">
        <div className="h-[300px] relative w-full">
          <Image
            src="/frontend/javascript.png"
            alt="JavaScript kod örneği"
            fill
            className="rounded-t-md object-cover  object-left"
            priority
          />
        </div>

        <div className="p-6">
          <h4>JavaScript</h4>
          <p>
            JavaScript, web sayfalarını interaktif hale getiren güçlü bir programlama dilidir.
            Kullanıcı etkileşimlerine yanıt verme, form doğrulama, dinamik içerik güncelleme,
            animasyonlar oluşturma ve API'lerle veri alışverişi yapma gibi işlevleri gerçekleştirir.
            Modern web uygulamalarının vazgeçilmez bir parçası olan JavaScript, hem frontend hem de
            backend geliştirmede kullanılabilir.
          </p>
        </div>
      </div>
    </div>
  );
}
