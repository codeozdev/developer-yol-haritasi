import { frameworks } from "@/data/frameworks";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {frameworks.map((framework) => (
        <div key={framework.id} className="bg-white rounded-xl shadow-lg w-full overflow-hidden">
          <Link href={framework.link} target="_blank" className="block">
            <div className="aspect-[16/9] relative w-full">
              <Image
                src={framework.image.src}
                alt={framework.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-t-md object-left h-full w-full hover:scale-105 transition-transform duration-300"
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
              {framework.githubStars &&
                (framework.githubLink ? (
                  <Link
                    href={framework.githubLink}
                    target="_blank"
                    className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600">
                    <AiFillStar />
                    <span className="text-sm">{framework.githubStars}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 text-gray-400">
                    <AiFillStar />
                    <span className="text-sm">{framework.githubStars}</span>
                  </div>
                ))}
            </div>
            <p className="md:h-[275px]">{framework.description}</p>
            {/* populer siteler */}
            <div className="mt-6">
              <div className="text-neutral-500 text-[9px] md:text-[10px]">
                Bu sitelerde bu framework kullanılmıştır.
              </div>
              <div className="flex flex-wrap gap-x-2">
                {framework.sites?.map((site, index, array) => (
                  <div key={site} className="text-neutral-500 text-[10px]">
                    {site}
                    {index !== array.length - 1 ? "," : ""}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
