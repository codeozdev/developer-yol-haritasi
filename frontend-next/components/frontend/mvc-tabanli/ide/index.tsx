import Image from "next/image";
import Link from "next/link";

const mvcIdeData = [
  {
    id: 1,
    title: "Visual Studio 2022",
    image: "/mvc-tabanli/ides/v2022.webp",
    description:
      "Microsoft'un kapsamlı geliştirme ortamı. ASP.NET MVC projeleri için en iyi IDE seçeneği. Güçlü debugging özellikleri, IntelliSense desteği ve entegre araçlarıyla tam donanımlı bir geliştirme deneyimi sunar.",
    link: "https://visualstudio.microsoft.com/vs/",
  },
  {
    id: 2,
    title: "JetBrains Rider",
    image: "/mvc-tabanli/ides/rider.webp",
    description:
      "JetBrains'in .NET geliştirme ortamı. Çapraz platform desteği, güçlü kod analizi ve hızlı performansıyla öne çıkar. ASP.NET MVC projeleri için modern ve verimli bir alternatif sunar.",
    link: "https://www.jetbrains.com/rider/",
  },
  {
    id: 3,
    title: "Visual Studio Code",
    image: "/mvc-tabanli/ides/vscode.png",
    description:
      "Microsoft'un hafif ve esnek kod editörü. C# ve ASP.NET uzantıları ile MVC geliştirme için uygun bir seçenek. Ücretsiz ve açık kaynak olması, zengin eklenti ekosistemi ile tercih edilen bir araç.",
    link: "https://code.visualstudio.com/",
  },
];

export default function Ide() {
  return (
    <section>
      <h2>IDE&#39;ler</h2>
      <p className="mb-4">
        MVC geliştirme için IDE seçimi önemlidir. Güçlü debugging özellikleri, IntelliSense desteği
        ve entegre araçlar sayesinde geliştirme sürecini hızlandırır. Özellikle ASP.NET MVC
        projeleri için Visual Studio gibi kapsamlı IDE&#39;ler tercih edilir.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mvcIdeData.map((ide) => (
          <div key={ide.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Link href={ide.link} target="_blank" className="block">
              <div className="aspect-[16/9] relative w-full">
                <Image
                  src={ide.image}
                  alt={ide.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                  quality={100}
                  loading="eager"
                  unoptimized={true}
                />
              </div>
              <section>
                <h4 className="text-blue-500">{ide.title}</h4>
                <p className="md:h-[150px]">{ide.description}</p>
              </section>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
