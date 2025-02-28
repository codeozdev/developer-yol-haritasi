import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { data } from "@/data/frontend/javascript/component-card";

export default function ComponentCard() {
  return <CardGrid items={data} />;
}
