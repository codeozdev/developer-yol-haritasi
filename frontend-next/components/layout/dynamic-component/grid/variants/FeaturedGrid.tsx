import Grid from "@/components/layout/dynamic-component/grid/Grid";
import GridItem from "@/components/layout/dynamic-component/grid/GridItem";
import { GridItemProps } from "../types";

interface FeaturedGridProps {
  featuredItem: GridItemProps;
  items: GridItemProps[];
  className?: string;
}

export function FeaturedGrid({ featuredItem, items, className = "" }: FeaturedGridProps) {
  return (
    <Grid variant="featured" className={className}>
      <GridItem {...featuredItem} className="featured-item" />
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </Grid>
  );
}
