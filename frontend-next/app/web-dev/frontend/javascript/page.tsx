import ComponentCard from "@/components/frontend/javascript/ComponentCard";
import IdeCard from "@/components/frontend/javascript/IdeCard";
import NedenComponent from "@/components/frontend/javascript/NedenComponent";
import OnerilenYolHaritasi from "@/components/frontend/javascript/OnerilenYolHaritasi";
import Stackoverflow from "@/components/frontend/javascript/Stackoverflow";

export default function JavaScriptPage() {
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
