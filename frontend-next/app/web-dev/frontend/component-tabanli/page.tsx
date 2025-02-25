import CardsComponent from "@/components/frontend/component-tabanli/card";
import Ide from "@/components/frontend/component-tabanli/ide";
import SimdiNeYapmaliyiz from "@/components/frontend/component-tabanli/simdiNeYapmaliyiz";
import Stackoverflow from "@/components/frontend/component-tabanli/Stackoverflow";
import Tanim from "@/components/frontend/component-tabanli/tanim";

export default function ComponentTabanliPage() {
  return (
    <>
      <Tanim />
      <Stackoverflow />
      <CardsComponent />
      <Ide />
      <SimdiNeYapmaliyiz />
    </>
  );
}
