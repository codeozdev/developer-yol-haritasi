export type GridVariant =
  | "one-column"
  | "two-column-md"
  | "three-column"
  | "featured"
  | "masonry"
  | "card"
  | "alternating";
export type GapSize = "small" | "medium" | "base";
// export type SpacingSize = "small" | "medium" | "large" | "default";

export interface BaseGridProps {
  children: React.ReactNode;
  className?: string;
  variant: GridVariant;
  gap?: GapSize;
}

export interface GridItemProps {
  title: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  index?: number;
  className?: string;
}

export interface CardGridItem {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}
