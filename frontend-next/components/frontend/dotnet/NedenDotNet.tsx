import Grid from "@/components/layout/dynamic-component/grid/Grid";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";
import { avantajlar, data } from "@/data/frontend/dotnet/neden-dotnet";

export default function NedenDotNet() {
  return (
    <PaddingContainer>
      <section>
        <h2>Neden MVC Mimarisi ile Frontend Geliştirmeliyiz?</h2>
        <p className="mb-4">
          MVC (Model-View-Controller) mimarisi, büyük ölçekli web uygulamaları için güçlü bir yapı
          sunar. Bu mimari yaklaşım, uygulamayı üç temel bileşene ayırarak kod organizasyonunu ve
          bakımını kolaylaştırır:
        </p>
        <Grid variant="three-column" gap="medium">
          {data.map((item) => (
            <div
              key={item.id}
              className={`md:bg-white shadow-md ${item.color.shadow} p-4 md:p-6 rounded-lg`}>
              <h4 className={item.color.text}>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </Grid>
        <div className="mt-6">
          <h4>MVC&#39;nin Avantajları:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {avantajlar.map((avantaj) => (
              <li key={avantaj}>{avantaj}</li>
            ))}
          </ul>
        </div>
      </section>
    </PaddingContainer>
  );
}
