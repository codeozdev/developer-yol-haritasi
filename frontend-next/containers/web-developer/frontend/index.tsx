import FrontEndNedir from "@/components/frontend/frontendNedir";
import HtmlCard from "@/components/frontend/htmlCard";
import ModernFramework from "@/components/frontend/modernFramework";
import ModernFrontend from "@/components/frontend/modernFrontend";

export default function FrontendContainer() {
  return (
    <div className="space-y-12">
      <FrontEndNedir />
      <HtmlCard />
      <ModernFrontend />
      <ModernFramework />
    </div>
  );
}
