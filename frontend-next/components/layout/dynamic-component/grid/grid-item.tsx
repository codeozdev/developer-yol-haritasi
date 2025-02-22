import ImageComponent from "@/components/layout/dynamic-component/Image";

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

export default function GridItem({ title, content, image, imageAlt, index }: GridItemProps) {
  const isReversed = index % 2 === 1;

  return (
    <div className="grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 items-center p-3 md:p-6 bg-white rounded-lg shadow-2xl dark:shadow-md dark:shadow-green-500">
      <div className={`w-full ${isReversed ? "lg:order-1" : "lg:order-none"}`}>
        <ImageComponent src={image} alt={imageAlt} />
      </div>
      <div className={`w-full ${isReversed ? "lg:order-0" : "lg:order-none"}`}>
        <h2>{title}</h2>
        <p>{renderContent(content)}</p>
      </div>
    </div>
  );
}
