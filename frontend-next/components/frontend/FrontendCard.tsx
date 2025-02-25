import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { frontendCardData } from "@/data/frontendCardData";

export default function FrontendCard() {
  return <CardGrid items={frontendCardData} />;
}
