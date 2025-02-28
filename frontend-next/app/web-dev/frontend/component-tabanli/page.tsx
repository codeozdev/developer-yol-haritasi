import ComponentCard from "@/components/frontend/component-tabanli/ComponentCard";
import IdeCard from "@/components/frontend/component-tabanli/IdeCard";
import NedenComponent from "@/components/frontend/component-tabanli/NedenComponent";
import OnerilenYolHaritasi from "@/components/frontend/component-tabanli/OnerilenYolHaritasi";
import Stackoverflow from "@/components/frontend/component-tabanli/Stackoverflow";

export default function ComponentTabanliPage() {
  return (
    <>
      <NedenComponent />
      <Stackoverflow />
      <ComponentCard />
      <IdeCard />
      <OnerilenYolHaritasi />
    </>
  );
}
