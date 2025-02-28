export type IDE = {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
};

export const ideData: IDE[] = [
  {
    id: 1,
    title: "Visual Studio Code",
    description:
      "Microsoft tarafından geliştirilen ücretsiz, açık kaynaklı ve çapraz platform destekli bir kod editörüdür. Zengin eklenti ekosistemi, entegre terminal, Git desteği ve IntelliSense kod tamamlama özelliği ile öne çıkar. JavaScript, TypeScript, Python ve birçok dil için mükemmel destek sunar.",
    image: {
      src: "/component-tabanli/ides/vscode.png",
      alt: "Visual Studio Code",
    },
    link: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    title: "WebStorm",
    description:
      "JetBrains tarafından geliştirilen profesyonel bir JavaScript IDE'sidir. Güçlü kod analizi, hata ayıklama araçları, entegre terminal ve Git desteği sunar. React, Vue, Angular gibi modern framework'ler için özel destek içerir. Ücretli bir IDE olmakla birlikte öğrencilere ücretsiz lisans sağlar.",
    image: {
      src: "/component-tabanli/ides/webstorm.webp",
      alt: "WebStorm",
    },
    link: "https://www.jetbrains.com/webstorm/",
  },
  {
    id: 3,
    title: "Cursor",
    description:
      "Yapay zeka destekli modern bir kod editörüdür. VS Code tabanlı olan Cursor, AI ile kod tamamlama, kod açıklama ve hata düzeltme özellikleri sunar. Gerçek zamanlı işbirliği araçları ve chat özelliği ile geliştiricilerin verimliliğini artırır.",
    image: {
      src: "/component-tabanli/ides/cursor.png",
      alt: "Cursor",
    },
    link: "https://cursor.sh/",
  },
  {
    id: 4,
    title: "Sublime Text",
    description:
      "Hızlı ve hafif yapısıyla bilinen güçlü bir metin editörüdür. Çoklu imleç desteği, hızlı dosya gezinme ve güçlü arama özellikleri sunar. Paket yöneticisi sayesinde birçok eklenti ile özelleştirilebilir. Ücretli bir yazılım olmakla birlikte süresiz deneme sürümü kullanılabilir.",
    image: {
      src: "/component-tabanli/ides/sublime.jpg",
      alt: "Sublime Text",
    },
    link: "https://www.sublimetext.com/",
  },
];
