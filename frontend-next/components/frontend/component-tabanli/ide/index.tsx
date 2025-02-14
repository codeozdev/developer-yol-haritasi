import { ideData } from "@/data/ides";
import Image from "next/image";
import Link from "next/link";

export default function Ide() {
  return (
    <section>
      <h2>IDE&#39;ler</h2>
      <p className="mb-4">
        Neden ide kullanmalıyız, çünkü kod yazma sürecini hızlandırır ve hata oranını azaltır.
        Otomatik tamamlama, hata denetimi, entegre terminal ve Git desteği gibi özellikler sayesinde
        daha verimli çalışmayı sağlar. Ayrıca, eklenti desteği ile framework ve kütüphaneler için
        özel araçlar sunarak geliştirme sürecini kolaylaştırır.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ideData.map((ide) => (
          <div key={ide.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Link href={ide.link} target="_blank" className="block">
              <div className="aspect-[16/9] relative w-full ">
                <Image
                  src={ide.image}
                  alt={ide.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <section>
                <h4>{ide.title}</h4>
                <p className="h-[232px]">{ide.description}</p>
              </section>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
