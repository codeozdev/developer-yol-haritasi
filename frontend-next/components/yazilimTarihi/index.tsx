import { tarihData } from "@/data/yazilimTarihi";
import Grid from "../layout/dynamic-component/grid/Grid";
import AlternatingGrid from "../layout/dynamic-component/grid/variants/AlternatingGrid";

export default function YazilimTarihi() {
  return (
    <>
      <h1>Yazılım Dünyasının Yolculuğu</h1>

      <Grid variant="alternating">
        {tarihData.map((item, index) => (
          <AlternatingGrid key={item.id} {...item} index={index} />
        ))}
      </Grid>
    </>
  );
}
