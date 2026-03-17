import CompanyIntroSection from "@/components/CompanyIntroSection";
import CTASection from "@/components/CTASection";
import EligibilityBanner from "@/components/EligibilityBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MilestonesSection from "@/components/MilestonesSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitUsSection from "@/components/Visitussection";
import WhoCanApplySection from "@/components/Whocanapplysection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <EligibilityBanner />
      <WhoCanApplySection />
      <CompanyIntroSection />
      <ServicesSection />
      <MilestonesSection />
      <ProcessSection />
      <TestimonialsSection />
      <VisitUsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
