import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { frontendCard } from "@/data/frontend/frontend-card";

export default function FrontendCard() {
  return <CardGrid items={frontendCard} />;
}
