import Grid from "@/components/layout/dynamic-component/grid/Grid";
import { CardGrid } from "@/components/layout/dynamic-component/grid/variants/CardGrid";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";
import { ideData } from "@/data/ides";

export default function IdeCard() {
  return (
    <PaddingContainer>
      <div>
        <h2>IDE&#39;ler</h2>
        <p className="mb-4">
          Neden ide kullanmalıyız, çünkü kod yazma sürecini hızlandırır ve hata oranını azaltır.
          Otomatik tamamlama, hata denetimi, entegre terminal ve Git desteği gibi özellikler
          sayesinde daha verimli çalışmayı sağlar. Ayrıca, eklenti desteği ile framework ve
          kütüphaneler için özel araçlar sunarak geliştirme sürecini kolaylaştırır.
        </p>
        <Grid variant="card" gap="small" className="lg:grid-cols-1">
          <CardGrid items={ideData} />
        </Grid>
      </div>
    </PaddingContainer>
  );
}
