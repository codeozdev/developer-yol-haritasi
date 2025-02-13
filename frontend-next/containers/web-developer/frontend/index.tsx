import FrontEndNedir from "@/components/frontend/frontendNedir";
import HtmlCard from "@/components/frontend/htmlCard";
import ModernFrontendFramework from "@/components/frontend/modernFrontendFramework";

export default function FrontendContainer() {
  return (
    <div className="space-y-12">
      <FrontEndNedir />
      <HtmlCard />
      <ModernFrontendFramework />
    </div>
  );
}
