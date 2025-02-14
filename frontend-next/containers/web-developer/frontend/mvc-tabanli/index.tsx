import CardsComponent from "@/components/frontend/mvc-tabanli/card";
import Hero from "@/components/frontend/mvc-tabanli/hero";
import Ide from "@/components/frontend/mvc-tabanli/ide";
import SimdiNeYapmaliyiz from "@/components/frontend/mvc-tabanli/simdiNeYapmaliyiz";
import Tanim from "@/components/frontend/mvc-tabanli/tanim";

export default function MvcTabanliContainer() {
  return (
    <div className="space-y-12">
      <Tanim />
      <Hero />
      <CardsComponent />
      <Ide />
      <SimdiNeYapmaliyiz />
    </div>
  );
}
