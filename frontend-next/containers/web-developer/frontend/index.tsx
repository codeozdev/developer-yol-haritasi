import FrontEndNedir from "@/components/frontend/frontend/frontendNedir";
import HtmlCard from "@/components/frontend/frontend/htmlCard";
import ModernFramework from "@/components/frontend/frontend/modernFramework";
import ModernFrontend from "@/components/frontend/frontend/modernFrontend";

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
