import Image from "next/image";

export default function YazilimTarihi() {
  return (
    <main className="py-8">
      <h1>Yazılım Dünyasının Yolculuğu</h1>

      <div className="grid gap-12">
        {/* İlk Bilgisayar Bölümü */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px]">
            <Image
              src="/home/yazilimTarihi/eniac.jpeg"
              alt="ENIAC - İlk Elektronik Bilgisayar"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h3>İlk Bilgisayar</h3>
            <p>
              1946 yılında geliştirilen <span>ENIAC</span> (Electronic Numerical Integrator and
              Computer), dünyanın ilk genel amaçlı elektronik bilgisayarıdır. 167 metrekarelik bir
              alanı kaplayan bu dev makine, saniyede 5000 toplama işlemi yapabiliyordu.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3>Assembly&#39;nin Doğuşu</h3>
            <p>
              1940&#39;ların sonlarında, bilgisayarları makine dili (1 ve 0) ile programlamanın
              zorluğu nedeniyle <span>Assembly</span> dili geliştirildi. Bu dil, makine dilindeki
              ikili (binary) kodları insanların anlayabileceği komutlara dönüştürerek programlama
              sürecini kolaylaştırdı ve modern programlama dillerinin temelini attı. Bu gelişme,
              yazılım dünyasında devrim niteliğinde bir adım oldu.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/home/yazilimTarihi/assembly.png"
              alt="Modern Yazılım Geliştirme"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* İnternetin Doğuşu Bölümü */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px]">
            <Image
              src="/home/yazilimTarihi/arpanet.png"
              alt="ARPANET - İnternetin Temeli"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h3>İnternetin Doğuşu</h3>
            <p>
              ABD Savunma Bakanlığı&#39;nın (DARPA) California'daki projesinden doğan ve 1969&#39;da
              <span> ARPANET</span> ile başlayan internet yolculuğu, bugün milyarlarca insanı
              birbirine bağlayan devasa bir ağa dönüştü. İlk başta sadece akademik kurumları
              birbirine bağlayan bu ağ, zamanla tüm dünyayı saran bir iletişim ağına evrildi.
            </p>
          </div>
        </section>

        {/* Kişisel Bilgisayarlar Bölümü */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 relative h-[300px]">
            <Image
              src="/home/yazilimTarihi/apple.webp"
              alt="Apple I - İlk Kişisel Bilgisayarlardan"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <h3>Kişisel Bilgisayarların Yükselişi</h3>
            <p>
              1970&#39;lerin ortalarında, <span>Altair 8800</span> ve <span>Apple I</span> gibi ilk
              kişisel bilgisayarların piyasaya sürülmesiyle, bilgisayar teknolojisi evlere girmeye
              başladı. 1981&#39;de IBM PC&#39;nin piyasaya çıkması ve 1984&#39;te Apple
              Macintosh&#39;in tanıtılmasıyla birlikte, kişisel bilgisayarlar günlük hayatımızın
              vazgeçilmez bir parçası haline geldi.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
