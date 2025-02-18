import { Button } from "@/components/ui/button";
import { frameworks } from "@/data/frameworks";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {frameworks.map((framework) => (
        <div
          key={framework.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full overflow-hidden">
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
                  <Link href={framework.githubLink} target="_blank">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-yellow-50 dark:hover:bg-yellow-900/20 px-0">
                      <Star
                        className="mr-2 h-4 w-4 transition-colors text-yellow-500 dark:text-yellow-400 group-hover:fill-yellow-500 dark:group-hover:fill-yellow-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        {framework.githubStars}
                      </span>
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group hover:bg-yellow-50 dark:hover:bg-yellow-900/20 cursor-default">
                    <Star
                      className="mr-2 h-4 w-4 transition-colors text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      {framework.githubStars}
                    </span>
                  </Button>
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
