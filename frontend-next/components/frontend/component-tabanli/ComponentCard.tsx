import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { frameworks } from "@/data/frameworks";

export default function ComponentCard() {
  return <CardGrid items={frameworks} />;
}
