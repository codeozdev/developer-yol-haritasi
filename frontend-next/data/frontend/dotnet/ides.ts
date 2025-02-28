interface IdeProps {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: string;
}

export const mvcIdeData: IdeProps[] = [
  {
    id: 1,
    title: "Visual Studio 2022",
    image: {
      src: "/dotnet/ides/v2022.webp",
      alt: "Visual Studio 2022",
    },
    description:
      "Microsoft'un kapsamlı geliştirme ortamı. ASP.NET MVC projeleri için en iyi IDE seçeneği. Güçlü debugging özellikleri, IntelliSense desteği ve entegre araçlarıyla tam donanımlı bir geliştirme deneyimi sunar.",
    link: "https://visualstudio.microsoft.com/vs/",
  },
  {
    id: 2,
    title: "JetBrains Rider",
    image: {
      src: "/dotnet/ides/rider.webp",
      alt: "JetBrains Rider",
    },
    description:
      "JetBrains'in .NET geliştirme ortamı. Çapraz platform desteği, güçlü kod analizi ve hızlı performansıyla öne çıkar. ASP.NET MVC projeleri için modern ve verimli bir alternatif sunar.",
    link: "https://www.jetbrains.com/rider/",
  },
  {
    id: 3,
    title: "Visual Studio Code",
    image: {
      src: "/dotnet/ides/vscode.png",
      alt: "Visual Studio Code",
    },
    description:
      "Microsoft'un hafif ve esnek kod editörü. C# ve ASP.NET uzantıları ile MVC geliştirme için uygun bir seçenek. Ücretsiz ve açık kaynak olması, zengin eklenti ekosistemi ile tercih edilen bir araç.",
    link: "https://code.visualstudio.com/",
  },
];
