import MediaCard from "@/components/layout/dynamic-component/media-card";

export default function Stackoverflow() {
  return (
    <>
      <MediaCard
        title="Stackoverflow 2024 Sonuçları"
        imageSrc="/component-tabanli/hero.png"
        imageAlt="Component Tabanlı Görsel"
        reverse={false}
        imageFull={true}
        description={
          <>
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
          </>
        }
      />
    </>
  );
}
