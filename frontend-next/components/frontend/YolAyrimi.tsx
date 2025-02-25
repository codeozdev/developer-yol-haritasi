import MediaCard from "../layout/dynamic-component/media-card";

export default function YolAyrimi() {
  return (
    <MediaCard
      title=".NET veya JavaScript Yol Ayrımı"
      imageSrc="/frontend/vs.png"
      imageAlt="Frontend Geliştirme Yolları"
      note="Not: Günümüzde projelerin %70-80'inde JavaScript ekosistemi ve component tabanlı yaklaşım tercih edilmektedir. Ancak kurumsal projelerde .NET ekosistemi hala güçlü bir seçenek olarak öne çıkmaktadır."
      description={
        <>
          Frontend geliştirme kariyerinizde iki temel yol bulunmaktadır: <span>C# ve .NET</span>{" "}
          ekosistemi ile kurumsal yazılım dünyasında tercih edilen geleneksel yaklaşım veya{" "}
          <span>JavaScript</span> ekosistemi ile modern web geliştirmede yaygın olan{" "}
          <span>React</span>, <span>Angular</span> gibi component tabanlı yaklaşım. Her iki yol da
          kendi içinde değerli fırsatlar sunar. Tercih yaparken hedef şirketlerin teknoloji
          seçimlerini göz önünde bulundurmanız önemlidir.
        </>
      }
    />
  );
}
