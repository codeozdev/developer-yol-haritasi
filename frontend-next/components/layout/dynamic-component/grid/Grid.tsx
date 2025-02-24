import { BaseGridProps } from "./types";

export default function Grid({ children, variant, gap = "base", className = "" }: BaseGridProps) {
  const gridStyles = {
    "two-column": "grid md:grid-cols-2",
    "three-column": "grid md:grid-cols-2 lg:grid-cols-3",
    featured: "grid md:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:md:col-span-2",
    masonry: "columns-1 md:columns-2 lg:columns-3",
    card: "grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6",
    alternating: "grid grid-cols-1",
  }[variant];

  const gapStyles = {
    small: "gap-2 md:gap-4", // ayarli degil
    medium: "gap-4 md:gap-6", // ayarli degil
    base: "gap-6 md:gap-12 lg:gap-10 xl:gap-16",
  }[gap];

  // const paddingStyles = {
  //   small: "p-2 md:p-4",
  //   medium: "p-4 md:p-6",
  //   large: "p-6 md:p-8",
  //   default: "",
  // }[padding];

  return <div className={`${gridStyles} ${gapStyles} ${className}`}>{children}</div>;
}
