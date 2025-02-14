"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FrameworkSection {
  title: string;
  color: string;
  description: string;
  features: string[];
  frameworks: string[];
  link: string;
  linkText: string;
}

const sections: FrameworkSection[] = [
  {
    title: "MVC Mimarisi / .NET",
    color: "blue",
    description:
      "Model-View-Controller (MVC) mimarisi, Microsoft'un ASP.NET MVC gibi framework'lerde kullanılan geleneksel bir yaklaşımdır. Bu mimari, web uygulamalarını Model (veri), View (görünüm) ve Controller (kontrol) katmanlarına ayırarak daha organize bir yapı sunar.",
    features: [
      "Daha yapılandırılmış ve kurumsal projeler için uygundur",
      "Büyük ölçekli uygulamalar için tercih edilir",
    ],
    frameworks: ["ASP.NET MVC (Microsoft)", "Blazor"],
    link: "/web-dev/frontend/mvc-tabanli",
    linkText: "Detaylı Bilgi İçin Tıklayınız",
  },
  {
    title: "Component Tabanlı / JavaScript",
    color: "green",
    description:
      "Modern component tabanlı yaklaşım, React ve Vue.js gibi framework'lerin benimsediği daha esnek ve modüler bir yapı sunar.",
    features: [
      "Hızlı geliştirme ve kolay bakım sağlar",
      "Yeniden kullanılabilir bileşenler oluşturulur",
    ],
    frameworks: ["React (Facebook/Meta)", "Next.js", "Angular (Google)", "Vue.js", "Svelte"],
    link: "/web-dev/frontend/component-tabanli",
    linkText: "Detaylı Bilgi İçin Tıklayınız",
  },
];

export default function ModernFramework() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col">
            <h4>{section.title}</h4>
            <div className="flex-grow">
              <p className="mb-4">{section.description}</p>
              <ul className="space-y-2 text-gray-600">
                {section.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span
                      className={`${
                        section.title === "Component Tabanlı" ? "text-green-500" : "text-blue-500"
                      } mr-2`}>
                      •
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-medium text-gray-800">
                  Popüler {section.title} Framework&#39;leri:
                </p>
                <ul className="space-y-1 text-gray-600">
                  {section.frameworks.map((framework) => (
                    <li key={framework}>• {framework}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href={section.link}
              className={`mt-4 bg-gray-800 text-white px-4 py-2 rounded-md w-fit text-xs md:text-base text-center`}>
              {section.linkText}
            </Link>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
