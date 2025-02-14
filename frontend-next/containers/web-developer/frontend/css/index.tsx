import CssCardsComponent from "@/components/frontend/css/cssCard";
import CssFrameworkTanim from "@/components/frontend/css/cssFrameworkTanim";
import Hero from "@/components/frontend/css/hero";
import SimdiNeYapmaliyiz from "@/components/frontend/css/simdiNeYapmaliyiz";

export default function CssContainer() {
  return (
    <div className="space-y-12">
      <CssFrameworkTanim />
      <Hero />
      <CssCardsComponent />
      <SimdiNeYapmaliyiz />
    </div>
  );
}
