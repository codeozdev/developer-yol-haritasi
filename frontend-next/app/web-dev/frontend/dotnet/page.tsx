import DotNetCard from "@/components/frontend/dotnet/DotNetCard";
import IdeCard from "@/components/frontend/dotnet/IdeCard";
import NedenDotNet from "@/components/frontend/dotnet/NedenDotNet";
import OnerilenYolHaritasi from "@/components/frontend/dotnet/OnerilenYolHaritasi";
import Stackoverflow from "@/components/frontend/javascript/Stackoverflow";

export default function DotNetPage() {
  return (
    <>
      <NedenDotNet />
      <Stackoverflow />
      <DotNetCard />
      <IdeCard />
      <OnerilenYolHaritasi />
    </>
  );
}
