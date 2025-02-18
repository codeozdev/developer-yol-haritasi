import { Button } from "@/components/ui/button";
import { webDevolutionData } from "@/data/web-dev-data";
import Image from "next/image";
import Link from "next/link";

export default function WebDeveloperHomeContainer() {
  return (
    <main className="py-8">
      <h1>Web Geliştirmenin Evrimi</h1>

      <div className="grid gap-12">
        {webDevolutionData.map((section) => (
          <section key={section.id} className="grid md:grid-cols-2 gap-8 items-center">
            {section.imageLeft !== false ? (
              <>
                <div className="relative h-[300px]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3>{section.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                  {section.hasLink && (
                    <div className="mt-8">
                      <Link
                        href="/web-dev/frontend"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                        <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xs">
                          Modern Developer'i Keşfet →
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3>{section.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
