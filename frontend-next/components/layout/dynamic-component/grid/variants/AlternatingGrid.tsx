import Image from "next/image";
import { variantStyles } from "./styles";

interface GridItemProps {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  index: number;
}

// ts icindeki span verilerini stil ile render etmek icin
const renderContent = (content: string) => {
  const parts = content.split(/(<span>.*?<\/span>)/g);
  return parts.map((part, index) => {
    if (part.startsWith("<span>") && part.endsWith("</span>")) {
      const text = part.replace(/<\/?span>/g, "");
      return <span key={index}>{text}</span>;
    }
    return part;
  });
};

export default function AlternatingGrid({ title, content, image, imageAlt, index }: GridItemProps) {
  const isReversed = index % 2 === 1;
  const styles = variantStyles.alternating;

  return (
    <div className={styles.container}>
      <div className={`w-full ${isReversed ? "lg:order-1" : "lg:order-none"}`}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={imageAlt} fill className={styles.image} />
        </div>
      </div>
      <div className={`${styles.content} ${isReversed ? "lg:order-0" : "lg:order-none"}`}>
        <h3>{title}</h3>
        <p className={styles.description}>{renderContent(content)}</p>
      </div>
    </div>
  );
}
