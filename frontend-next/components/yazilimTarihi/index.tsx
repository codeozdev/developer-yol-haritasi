import { tarihData } from "@/data/yazilimTarihi";
import GridComponent from "../layout/dynamic-component/grid";
import GridItem from "../layout/dynamic-component/grid/grid-item";

export default function YazilimTarihi() {
  return (
    <div>
      <h1>Yazılım Dünyasının Yolculuğu</h1>

      <GridComponent>
        {tarihData.map((item, index) => (
          <GridItem key={item.id} {...item} index={index} />
        ))}
      </GridComponent>
    </div>
  );
}
