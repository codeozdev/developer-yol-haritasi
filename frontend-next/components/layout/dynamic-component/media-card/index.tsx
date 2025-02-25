import Image from "next/image";
import { ReactNode } from "react";

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
    <div className="bg-white rounded-lg lg:rounded-lg shadow-lg w-full overflow-hidden lg:shadow-2xl dark:shadow-md dark:shadow-green-500 p-3 md:p-6 flex flex-col">
      <h2>{title}</h2>

      {reverse ? (
        <>
          {imageFull ? (
            <div className="w-full my-6 overflow-hidden order-2">
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
            <div className="relative h-[140px] md:h-[260px] w-full my-6 overflow-hidden order-2">
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
          <div className="order-1">
            {description}
            {note && <p className="mt-4 text-sm text-gray-600">{note}</p>}
          </div>

          {imageFull ? (
            <div className="w-full my-6 overflow-hidden order-2">
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
            <div className="relative h-[140px] md:h-[260px] w-full my-6 overflow-hidden order-2">
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
    </div>
  );
}
