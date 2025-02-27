import ComponentCard from "@/components/frontend/component-tabanli/ComponentCard";
import Ide from "@/components/frontend/component-tabanli/ide";
import NedenComponent from "@/components/frontend/component-tabanli/NedenComponent";
import SimdiNeYapmaliyiz from "@/components/frontend/component-tabanli/simdiNeYapmaliyiz";
import Stackoverflow from "@/components/frontend/component-tabanli/Stackoverflow";

export default function ComponentTabanliPage() {
  return (
    <>
      <NedenComponent />
      <Stackoverflow />
      <ComponentCard />
      <Ide />
      <SimdiNeYapmaliyiz />
    </>
  );
}
