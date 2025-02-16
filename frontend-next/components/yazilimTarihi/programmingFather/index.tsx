import { AnimatedTestimonials } from "../../ui/animated-testimonials";

export const ProgrammingFather = () => {
  return (
    <div>
      <h1>Modern Programlamanın Temelleri</h1>
      <p>
        1970&#39;lerin başında, Dennis Ritchie tarafından geliştirilen <span>C</span> programlama
        dili ile yazılım dünyası yeni bir çağa girdi. Assembly&#39;den farklı olarak, donanımdan
        bağımsız kod yazılabilmesini sağlayan <span>C</span> dili, yüksek seviyeli programlama
        dillerinin öncüsü oldu. Bu gelişme, programcıların daha karmaşık yazılımları daha kolay
        geliştirebilmesinin önünü açtı ve günümüzde kullandığımız birçok modern programlama dilinin
        temelini oluşturdu.
      </p>
      <AnimatedTestimonials
        testimonials={[
          {
            name: "Dennis Ritchie",
            quote:
              "1972'de Bell Labs'te C programlama dilini geliştirdi. Aynı zamanda UNIX işletim sistemi üzerinde de büyük katkıları oldu. C, birçok modern programlama diline temel oluşturduğu için Ritchie, bilgisayar bilimlerinin en önemli isimlerinden biri olarak kabul edilir",
            designation: "C Programming Language",
            src: "/home/father/dennis.webp",
          },
          {
            name: "Bjarne Stroustrup",
            quote:
              "1983 yılında C++ programlama dilini geliştirdi. Amacı, C dilinin performansını koruyarak nesne yönelimli programlama gibi yeni özellikler eklemekti. Günümüzde C++, oyun motorlarından işletim sistemlerine kadar geniş bir kullanım alanına sahiptir",
            designation: "C++ Programming Language",
            src: "/home/father/bjarne.jpg",
          },
          {
            name: "Guido van Rossum",
            quote:
              "1991 yılında Python dilini geliştirerek yazılım dünyasına sade, okunaklı ve güçlü bir dil kazandırdı. Python, veri bilimi, yapay zeka ve web geliştirme gibi birçok alanda yaygın olarak kullanılıyor.",
            designation: "Python Programming Language",
            src: "/home/father/guido.jpg",
          },
          {
            name: "Rasmus Lerdorf",
            quote:
              "1994 yılında kişisel web sayfası için PHP’yi yazdı. Daha sonra genişletilen PHP, dinamik web siteleri oluşturmak için en çok kullanılan dillerden biri oldu.",
            designation: "PHP Programming Language",
            src: "/home/father/rasmus.webp",
          },

          {
            name: "Anders Hejlsberg",
            quote:
              "1995 yılında C# programlama dilini geliştirdi. C# dilinin amacı, C ve C++ dilinin karmaşık yapılarını basitleştirmekti. Günümüzde C#, oyun motorlarından işletim sistemlerine kadar geniş bir kullanım alanına sahiptir",
            designation: "C# Programming Language",
            src: "/home/father/anders.webp",
          },
          {
            name: "James Gosling",
            quote:
              "1995 yılında Sun Microsystems'te Java programlama dilini oluşturdu. 'Bir kez yaz, her yerde çalıştır' felsefesiyle geliştirilen Java, taşınabilirliği sayesinde web, mobil ve kurumsal uygulamalarda popüler hale geldi.",
            designation: "Java Programming Language",
            src: "/home/father/james.jpg",
          },
          {
            name: "Brendan Eich",
            quote:
              "1995 yılında JavaScript'i sadece 10 günde geliştirdi. Başlangıçta Netscape için tasarlanan bu dil, günümüzde web geliştirme için vazgeçilmez bir hale geldi.",
            designation: "JavaScript Programming Language",
            src: "/home/father/brendan.jpg",
          },
        ]}
      />
    </div>
  );
};
