import Grid from "@/components/layout/dynamic-component/grid/Grid";
import { GridItem } from "../GridItem";
import { GridItemProps } from "../types";

interface MasonryGridProps {
  items: GridItemProps[];
  className?: string;
}

export function MasonryGrid({ items, className = "" }: MasonryGridProps) {
  return (
    <Grid variant="masonry" className={className}>
      {items.map((item, index) => (
        <GridItem key={index} {...item} className="mb-4 break-inside-avoid" />
      ))}
    </Grid>
  );
}
