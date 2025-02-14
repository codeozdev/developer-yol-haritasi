import Image from "next/image";

const htmlCards = [
  {
    id: 1,
    title: "HTML",
    image: {
      src: "/frontend/html.jpg",
      alt: "HTML kod örneği",
    },
    description:
      "İşaretleme dili olan Html, web sayfalarının hazırlanmasında kullanılan sistemdir. Bir programlama dili olmayan Html bilgisayarlarımızda kullandığımız web sitelerinin oluşturulmasında kullanılır. Chrome, Firefox ve İnternet Explorer gibi tarayıcılar html kodlarını işleyerek bu kodları web sayfasına dönüştürür.",
  },
  {
    id: 2,
    title: "CSS",
    image: {
      src: "/frontend/css.png",
      alt: "CSS kod örneği",
    },
    description:
      "CSS (Cascading Style Sheets), web sayfalarının görünümünü ve düzenini kontrol eden stil dilidir. HTML elementlerinin renklerini, boyutlarını, konumlarını, animasyonlarını ve diğer görsel özelliklerini belirlemek için kullanılır. Responsive tasarım ile farklı ekran boyutlarına uyum sağlayan modern web siteleri oluşturmamızı sağlar.",
  },
  {
    id: 3,
    title: "C#",
    image: {
      src: "/frontend/csharp.png",
      alt: "C# kod örneği",
    },
    description:
      "C#, Microsoft'un geliştirdiği güçlü bir programlama dilidir. ASP.NET ve Blazor gibi framework'ler ile modern web uygulamaları geliştirebilirsiniz. Özellikle kurumsal projelerde tercih edilen C#, tip güvenliği, nesne yönelimli programlama özellikleri ve Visual Studio gibi güçlü geliştirme araçları ile web geliştirme sürecini verimli hale getirir.",
  },
  {
    id: 4,
    title: "JavaScript",
    image: {
      src: "/frontend/javascript.png",
      alt: "JavaScript kod örneği",
    },
    description:
      "JavaScript, web sayfalarını interaktif hale getiren güçlü bir programlama dilidir. Kullanıcı etkileşimlerine yanıt verme, form doğrulama, dinamik içerik güncelleme, animasyonlar oluşturma ve API'lerle veri alışverişi yapma gibi işlevleri gerçekleştirir. Modern web uygulamalarının vazgeçilmez bir parçası olan JavaScript, hem frontend hem de backend geliştirmede kullanılabilir.",
  },
];

export default function HtmlCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {htmlCards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl shadow-lg w-full overflow-hidden">
          <div className="h-[300px] relative w-full">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              className="rounded-t-md object-cover h-full w-full hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <section>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
