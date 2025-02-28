import Image from "next/image";
import { GridItemProps } from "./types";

export function GridItem({ title, content, image, imageAlt, className = "" }: GridItemProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {image && (
        <div className="relative h-48">
          <Image src={image} alt={imageAlt || title} fill className="object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {content && <p className="text-gray-600">{content}</p>}
      </div>
    </div>
  );
}
