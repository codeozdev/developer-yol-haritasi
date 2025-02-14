import CardsComponent from "@/components/frontend/component-tabanli/card";
import Hero from "@/components/frontend/component-tabanli/hero";
import SimdiNeYapmaliyiz from "@/components/frontend/component-tabanli/simdiNeYapmaliyiz";
import Tanim from "@/components/frontend/component-tabanli/tanim";

export default function ComponentTabanliContainer() {
  return (
    <div className="space-y-12">
      <Tanim />
      <Hero />
      <CardsComponent />
      <SimdiNeYapmaliyiz />
    </div>
  );
}
