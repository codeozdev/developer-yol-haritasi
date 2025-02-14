import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h2 className="text-center md:text-left">Stateofcss 2024 Sonuçları</h2>
      <p>
        <a
          href="https://2024.stateofcss.com/en-US/tools/"
          target="_blank"
          className="underline font-bold">
          StateOfCSS
        </a>
        , web geliştirme dünyasındaki CSS teknolojilerinin kullanım trendlerini ve popülerliğini
        gösteren yıllık bir araştırmadır. Bu araştırma, dünya genelindeki binlerce geliştiricinin
        katılımıyla gerçekleştirilir ve CSS ekosistemindeki en güncel eğilimleri ortaya koyar.{" "}
        <br />
        <b>Sonuçlara göre en çok kullanılan programlama framework'leri:</b>
      </p>
      <Image
        src="/css/1.png"
        alt="Component Tabanlı Görsel"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto mt-4"
        priority
      />
    </section>
  );
}
