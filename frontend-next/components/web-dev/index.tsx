import { webDevData } from "@/data/web-dev";
import Grid from "../layout/dynamic-component/grid/Grid";
import AlternatingGrid from "../layout/dynamic-component/grid/variants/AlternatingGrid";
export default function WebDev() {
  return (
    <>
      <h1>Web Geliştirmenin Evrimi</h1>

      <Grid variant="alternating">
        {webDevData.map((item, index) => (
          <AlternatingGrid key={item.id} {...item} index={index} />
        ))}
      </Grid>
    </>
  );
}
