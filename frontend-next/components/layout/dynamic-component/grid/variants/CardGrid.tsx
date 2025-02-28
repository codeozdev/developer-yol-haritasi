import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <Grid variant="card" gap="medium" className={className}>
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
            {/* title */}
            <div className="flex items-center justify-between">
              <h3>{card.title}</h3>
              <div>
                {card.githubStars &&
                  (card.githubLink ? (
                    <Link href={card.githubLink} target="_blank">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group hover:bg-yellow-50 dark:hover:bg-[#161B22]  px-0">
                        <Star
                          className="mr-2 h-4 w-4 transition-colors text-yellow-500 dark:text-yellow-400 group-hover:fill-yellow-500 dark:group-hover:fill-yellow-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                          {card.githubStars}
                        </span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group hover:bg-yellow-50 dark:hover:bg-[#161B22] cursor-default">
                      <Star
                        className="mr-2 h-4 w-4 transition-colors text-gray-400 dark:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        {card.githubStars}
                      </span>
                    </Button>
                  ))}
              </div>
            </div>
            <p className={`${styles.description}`}>{card.description}</p>
            {card.sites && (
              <div className="mt-2">
                <p className="text-neutral-500 text-[9px] md:text-[10px] text-center md:text-left">
                  Bu framework, aşağıdaki popüler platformlarda kullanılmaktadır
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.sites.map((site) => (
                    <p key={site} className="text-neutral-500 text-[10px]">
                      {site}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Grid>
  );
}
