interface DataProps {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: string;
  githubStars: string;
  githubLink: string;
}

export const data: DataProps[] = [
  {
    id: 1,
    title: "ASP.NET MVC",
    image: {
      src: "/dotnet/aspnet.jpg",
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
      src: "/dotnet/blazor.png",
      alt: "blazor",
    },
    description:
      "Microsoft'un modern web uygulamaları için geliştirdiği yeni nesil framework'üdür. React ve Angular gibi component tabanlı framework'lere alternatif olarak sunulan Blazor, C# ile fullstack web geliştirme imkanı sağlar. WebAssembly teknolojisi sayesinde tarayıcıda .NET kodu çalıştırabilir, Single Page Application (SPA) geliştirebilirsiniz. Server-side rendering ve client-side rendering seçenekleri ile esnek bir geliştirme ortamı sunar.",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    githubStars: "36.1k",
    githubLink: "https://github.com/dotnet/aspnetcore",
  },
];
