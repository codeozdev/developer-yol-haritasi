import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { data } from "@/data/frontend/css/css-card";

export default function CssCard() {
  return <CardGrid items={data} />;
}
