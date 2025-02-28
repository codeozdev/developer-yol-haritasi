import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import { data } from "@/data/frontend/dotnet/dotnet-card";

export default function DotNetCard() {
  return <CardGrid items={data} />;
}
