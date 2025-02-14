import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const mvcFrameworks = [
  {
    id: 1,
    title: "ASP.NET MVC",
    image: {
      src: "/mvc-tabanli/aspnet.jpg",
      alt: "aspnet-mvc",
    },
    description:
      "Microsoft'un geliştirdiği güçlü bir web framework'üdür. Model-View-Controller mimarisini temel alarak kurumsal düzeyde web uygulamaları geliştirmeye olanak tanır. Razor View Engine, güçlü routing sistemi, built-in authentication ve authorization özellikleri ile tam donanımlı bir geliştirme deneyimi sunar. C# dili ile yazılması, tip güvenliği ve Visual Studio entegrasyonu sayesinde verimli geliştirme süreçleri sağlar.",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet/mvc",
    githubStars: "36.1k",
    githubLink: "https://github.com/dotnet/aspnetcore",
  },
  {
    id: 2,
    title: "Blazor",
    image: {
      src: "/mvc-tabanli/blazor.png",
      alt: "blazor",
    },
    description:
      "Microsoft'un modern web uygulamaları için geliştirdiği yeni nesil framework'üdür. React ve Angular gibi component tabanlı framework'lere alternatif olarak sunulan Blazor, C# ile fullstack web geliştirme imkanı sağlar. WebAssembly teknolojisi sayesinde tarayıcıda .NET kodu çalıştırabilir, Single Page Application (SPA) geliştirebilirsiniz. Server-side rendering ve client-side rendering seçenekleri ile esnek bir geliştirme ortamı sunar.",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    githubStars: "36.1k",
    githubLink: "https://github.com/dotnet/aspnetcore",
  },
];

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {mvcFrameworks.map((framework) => (
        <div key={framework.id} className="bg-white rounded-xl shadow-lg w-full overflow-hidden">
          <Link href={framework.link} target="_blank" className="block">
            <div className="aspect-[16/9] relative w-full">
              <Image
                src={framework.image.src}
                alt={framework.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-t-md object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                priority
                quality={100}
                loading="eager"
                unoptimized={true}
              />
            </div>
          </Link>

          <section>
            <div className="flex items-center justify-between">
              <h4>{framework.title}</h4>
              <Link
                href={framework.githubLink}
                target="_blank"
                className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600">
                <AiFillStar />
                <div className="text-sm text-black dark:text-gray-300 font-bold">
                  {framework.githubStars}
                </div>
              </Link>
            </div>
            <p>{framework.description}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
