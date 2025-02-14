import Image from "next/image";

export default function ModernFrontend() {
  return (
    <section>
      <h2>.NET veya JavaScript Yol Ayrımı</h2>

      <div className="relative md:h-[260px] w-full my-6">
        <Image
          src="/frontend/vs.png"
          alt="Frontend Geliştirme Yolları"
          fill
          className="object-cover object-center rounded-lg"
          priority
        />
      </div>

      <div>
        <p>
          Frontend geliştirme kariyerinizde iki temel yol bulunmaktadır: <span>C# ve .NET</span>{" "}
          ekosistemi ile kurumsal yazılım dünyasında tercih edilen geleneksel yaklaşım veya{" "}
          <span>JavaScript</span> ekosistemi ile modern web geliştirmede yaygın olan{" "}
          <span>React</span>, <span>Angular</span> gibi component tabanlı yaklaşım. Her iki yol da
          kendi içinde değerli fırsatlar sunar. Tercih yaparken hedef şirketlerin teknoloji
          seçimlerini göz önünde bulundurmanız önemlidir.
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Not: Günümüzde projelerin %70-80&#39;inde JavaScript ekosistemi ve component tabanlı
          yaklaşım tercih edilmektedir. Ancak kurumsal projelerde .NET ekosistemi hala güçlü bir
          seçenek olarak öne çıkmaktadır.
        </p>
      </div>
    </section>
  );
}
