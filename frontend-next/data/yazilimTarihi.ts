interface TarihDataProps {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
}

export const tarihData: TarihDataProps[] = [
  {
    id: 1,
    title: "İlk Bilgisayar",
    content:
      "1946 yılında geliştirilen ENIAC (Electronic Numerical Integrator and Computer), dünyanın ilk genel amaçlı elektronik bilgisayarıdır. 167 metrekarelik bir alanı kaplayan bu dev makine, saniyede 5000 toplama işlemi yapabiliyordu.",
    image: "/yazilimTarihi/eniac.jpeg",
    imageAlt: "ENIAC - İlk Elektronik Bilgisayar",
  },
  {
    id: 2,
    title: "Assembly'nin Doğuşu",
    content:
      "1940'ların sonlarında, bilgisayarları makine dili (1 ve 0) ile programlamanın zorluğu nedeniyle Assembly dili geliştirildi. Bu dil, makine dilindeki ikili (binary) kodları insanların anlayabileceği komutlara dönüştürerek programlama sürecini kolaylaştırdı ve modern programlama dillerinin temelini attı. Bu gelişme, yazılım dünyasında devrim niteliğinde bir adım oldu.",
    image: "/yazilimTarihi/assembly.png",
    imageAlt: "Modern Yazılım Geliştirme",
  },
  {
    id: 3,
    title: "İnternetin Doğuşu",
    content:
      "ABD Savunma Bakanlığı'nın (DARPA) California'daki projesinden doğan ve 1969'da ARPANET ile başlayan internet yolculuğu, bugün milyarlarca insanı birbirine bağlayan devasa bir ağa dönüştü. İlk başta sadece akademik kurumları birbirine bağlayan bu ağ, zamanla tüm dünyayı saran bir iletişim ağına evrildi.",
    image: "/yazilimTarihi/arpanet.png",
    imageAlt: "ARPANET - İnternetin Temeli",
  },
  {
    id: 4,
    title: "Kişisel Bilgisayarların Yükselişi",
    content:
      "1970'lerin ortalarında, Altair 8800 ve Apple I gibi ilk kişisel bilgisayarların piyasaya sürülmesiyle, bilgisayar teknolojisi evlere girmeye başladı. 1981'de IBM PC'nin piyasaya çıkması ve 1984'te Apple Macintosh'in tanıtılmasıyla birlikte, kişisel bilgisayarlar günlük hayatımızın vazgeçilmez bir parçası haline geldi.",
    image: "/yazilimTarihi/apple.webp",
    imageAlt: "Apple I - İlk Kişisel Bilgisayarlardan",
  },
];
