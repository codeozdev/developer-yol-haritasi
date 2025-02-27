import Image from "next/image";
import { ReactNode } from "react";
import PaddingContainer from "../padding-container";

interface MediaCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: ReactNode;
  note?: string;
  className?: string;
  reverse?: boolean;
  imageFull?: boolean;
}

export default function MediaCard({
  title,
  imageSrc,
  imageAlt,
  description,
  note,
  reverse = true,
  imageFull = false,
}: MediaCardProps) {
  return (
    <PaddingContainer>
      <h2>{title}</h2>

      {reverse ? (
        <>
          {imageFull ? (
            <div className="w-full overflow-hidden order-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full hover:scale-105 transition-transform duration-300 rounded-lg"
                priority
              />
            </div>
          ) : (
            <div className="relative h-[140px] md:h-[260px] w-full  overflow-hidden order-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover w-full hover:scale-105 transition-transform duration-300 rounded-lg"
                priority
              />
            </div>
          )}

          <div className="order-1">
            {description}
            {note && <p className="mt-4 text-sm text-gray-600">{note}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="order-2 text-gray-700 dark:text-gray-300 leading-relaxed text-[13px] md:text-[15px]">
            {description}
            {note && <p className="mt-4 text-gray-600">{note}</p>}
          </div>

          {imageFull ? (
            <div className="w-full overflow-hidden order-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full hover:scale-105 transition-transform duration-300 rounded-lg"
                priority
              />
            </div>
          ) : (
            <div className="relative h-[140px] md:h-[260px] w-full overflow-hidden order-1">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover w-full hover:scale-105 transition-transform duration-300 rounded-lg"
                priority
              />
            </div>
          )}
        </>
      )}
    </PaddingContainer>
  );
}
