import Grid from "@/components/layout/dynamic-component/grid/Grid";
import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";
import { mvcIdeData } from "@/data/frontend/dotnet/ides";

export default function IdeCard() {
  return (
    <PaddingContainer>
      <div>
        <h2>IDE&#39;ler</h2>
        <p className="mb-4">
          MVC geliştirme için IDE seçimi önemlidir. Güçlü debugging özellikleri, IntelliSense
          desteği ve entegre araçlar sayesinde geliştirme sürecini hızlandırır. Özellikle ASP.NET
          MVC projeleri için Visual Studio gibi kapsamlı IDE&#39;ler tercih edilir.
        </p>
        <Grid variant="one-column">
          <CardGrid items={mvcIdeData} />
        </Grid>
      </div>
    </PaddingContainer>
  );
}
