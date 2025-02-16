interface ImageData {
  src: string;
  alt: string;
}

interface WebDevSection {
  id: number;
  title: string;
  content: string;
  image: ImageData;
  imageLeft?: boolean;
  hasLink?: boolean;
}

export const webDevolutionData: WebDevSection[] = [
  {
    id: 1,
    title: "İlk Web Sitesi ve HTML'in Doğuşu",
    content: `1991'de CERN'de yayınlanan ilk web sitesi, basit bir <span>HTML</span> yapısına sahipti. Web'in babası <span>Tim Berners-Lee</span>, HTML'i metin belgelerini birbirine bağlayan ve farklı cihazlarda görüntülenebilen bir format olarak tasarladı. Bu, modern web geliştirmenin temelini oluşturdu.`,
    image: {
      src: "/web-dev/ilk.jpg",
      alt: "İlk Web Sitesi - CERN",
    },
  },
  {
    id: 2,
    title: "CSS ve Tasarım Devrimi",
    content: `1994'te <span>Håkon Wium Lie</span>, HTML'den stil özelliklerini ayırmak için <span>CSS</span>'i önerdi. Bu, web tasarımında devrim yarattı. Artık içerik ve sunum ayrılabiliyordu. Web siteleri daha estetik ve yönetilebilir hale geldi. Tablolarla yapılan sayfa düzenleri yerini modern CSS tekniklerine bıraktı.`,
    image: {
      src: "/web-dev/css.webp",
      alt: "CSS Evrimi",
    },
    imageLeft: false,
  },
  {
    id: 3,
    title: "JavaScript ve Dinamik Web",
    content: `1995'te <span>Brendan Eich</span>, Netscape için <span>JavaScript</span>'i geliştirdi. Başlangıçta basit form validasyonları için kullanılan JavaScript, zamanla tam teşekküllü bir programlama diline dönüştü. AJAX'ın gelişiyle sayfaları yenilemeden veri alışverişi mümkün hale geldi.`,
    image: {
      src: "/web-dev/javascript.jpg",
      alt: "JavaScript'in Evrimi",
    },
  },
  {
    id: 4,
    title: "Web 2.0 ve Sosyal Medya",
    content: `2004-2010 arası <span>Web 2.0</span> dönemi, kullanıcı etkileşimini ön plana çıkardı. Facebook, Twitter gibi platformlar, web developer'ların karmaşık sosyal özellikler ve gerçek zamanlı güncellemeler geliştirmesini gerektirdi. Bu dönem, modern frontend framework'lerinin temelini attı.`,
    image: {
      src: "/web-dev/face.jpeg",
      alt: "Web 2.0 Dönemi",
    },
    imageLeft: false,
  },
  {
    id: 5,
    title: "Web 3.0 ve Blockchain Teknolojileri",
    content: `<span>Web 3.0</span> ile birlikte internet merkeziyetsiz bir yapıya doğru evrilmeye başladı. <span>Blockchain</span> teknolojisi, <span>Akıllı Kontratlar</span> ve <span>DApps</span> (Merkeziyetsiz Uygulamalar) gibi yeni kavramlar hayatımıza girdi. Kullanıcılar artık sadece veri tüketen değil, dijital varlıklarının gerçek sahipleri haline geldi.`,
    image: {
      src: "/web-dev/web3.0.png",
      alt: "Web 3.0 ve Blockchain Teknolojileri",
    },
    hasLink: true,
  },
];
