import FrontendCard from "@/components/frontend/FrontendCard";
import FrontendNedir from "@/components/frontend/FrontendNedir";
import FrontendTercih from "@/components/frontend/FrontendTercih";
import YolAyrimi from "@/components/frontend/YolAyrimi";

export default function FrontendPage() {
  return (
    <>
      <FrontendNedir />
      <FrontendCard />
      <YolAyrimi />
      <FrontendTercih />
    </>
  );
}
