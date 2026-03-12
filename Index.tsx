import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import PurchaseModal from "@/components/PurchaseModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleBuyClick = (plan: string) => {
    setSelectedPlan(plan);
    setPurchaseOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection onBuyClick={(plan) => handleBuyClick(plan)} />
      <Footer />
      <PurchaseModal open={purchaseOpen} onOpenChange={setPurchaseOpen} selectedPlan={selectedPlan} />
    </div>
  );
};

export default Index;
