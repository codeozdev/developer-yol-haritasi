import Image from "next/image";
import Grid from "../Grid";
import { CardGridItem } from "../types";
import { variantStyles } from "./styles";

interface CardGridProps {
  items: CardGridItem[];
  className?: string;
}

export function CardGrid({ items, className = "" }: CardGridProps) {
  const styles = variantStyles.card;

  return (
    <Grid variant="card" gap="base" className={className}>
      {items.map((card) => (
        <div key={card.id} className={`${styles.container}`}>
          <div className={`${styles.imageWrapper}`}>
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              className={`${styles.image}`}
              priority
            />
          </div>
          <div className={`${styles.content}`}>
            <h3>{card.title}</h3>
            <p className={`${styles.description}`}>{card.description}</p>
          </div>
        </div>
      ))}
    </Grid>
  );
}
