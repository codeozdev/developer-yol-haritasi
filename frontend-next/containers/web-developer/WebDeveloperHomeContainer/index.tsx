import GridComponent from "@/components/layout/dynamic-component/grid";
import GridItem from "@/components/layout/dynamic-component/grid/grid-item";
import { webDevolutionData } from "@/data/web-dev-data";
export default function WebDeveloperHomeContainer() {
  return (
    <div>
      <h1>Web Geliştirmenin Evrimi</h1>

      <GridComponent>
        {webDevolutionData.map((item, index) => (
          <GridItem key={item.id} {...item} index={index} />
        ))}
      </GridComponent>
    </div>
  );
}
