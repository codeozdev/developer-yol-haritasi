import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
}

export default function ImageComponent({ src, alt }: ImageComponentProps) {
  return (
    <div className="relative min-h-[120px] md:min-h-[200px] lg:h-[320px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover w-full rounded-sm lg:rounded-2xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
