import Grid from "@/components/layout/dynamic-component/grid/Grid";
import PaddingContainer from "@/components/layout/dynamic-component/padding-container";
import { avantajlar, data } from "@/data/frontend/javascript/neden-component";

export default function NedenComponent() {
  return (
    <PaddingContainer>
      <h2>Neden Component Tabanlı Geliştirme?</h2>
      <p>
        Modern web uygulamaları için <span>Component tabanlı</span> geliştirme yaklaşımı en verimli
        çözümü sunar. <span>React</span>, <span>Vue</span> ve <span>Angular</span> gibi popüler
        framework&#39;ler, component mimarisi sayesinde daha modüler, yeniden kullanılabilir ve
        bakımı kolay uygulamalar geliştirmenize olanak tanır.
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

      <div>
        <h4 className="md:text-left">Component Tabanlı Geliştirmenin Avantajları</h4>
        <ul className="list-disc pl-6 space-y-2">
          {avantajlar.map((avantaj) => (
            <li key={avantaj}>{avantaj}</li>
          ))}
        </ul>
      </div>
    </PaddingContainer>
  );
}
