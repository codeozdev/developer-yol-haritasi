import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h2 className="text-center md:text-left">Stackoverflow 2024 Sonuçları</h2>
      <p>
        <a
          href="https://survey.stackoverflow.co/2024/technology#most-popular-technologies-webframe-prof"
          target="_blank"
          className="underline font-bold">
          Stackoverflow
        </a>
        , dünya genelindeki yazılımcıları ve programcıları bir araya getiren bir soru-cevap
        platformudur. Stack Overflow yazılımcılar için bir bilgi deposu ve kütüphanesi olarak
        görülür. Stack Exchange Network&#39;ün amiral gemisi olan Stackoverflow, her ay 100
        milyondan fazla ziyaretçiyi ağırlar. <br />
        <b>Sonuçlara göre en çok kullanılan programlama framework&#39;leri:</b>
      </p>
      <Image
        src="/component-tabanli/hero.png"
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
