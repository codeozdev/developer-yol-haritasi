import { frameworks } from "@/data/frameworks";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {frameworks.map((framework) => (
        <div key={framework.id} className="bg-white rounded-xl shadow-lg w-full">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src={framework.image.src}
              alt={framework.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-t-md object-left h-full w-full"
              priority
            />
          </div>

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
            <p className="h-[280px]">{framework.description}</p>
            <div className="flex items-center gap-5 mt-6">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                Daha fazla bilgi için tıklayınız
                <Link href={framework.link} target="_blank">
                  <CgFileDocument className="text-gray-700" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
