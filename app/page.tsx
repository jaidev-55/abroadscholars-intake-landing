import CommonMistakesSection from "@/components/CommonMistakesSection";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import CTASection from "@/components/CTASection";
import DestinationBudgetSection from "@/components/Destinationbudgetsection";
import EligibilityBanner from "@/components/EligibilityBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MilestonesSection from "@/components/MilestonesSection";
import ProcessStepsSection from "@/components/Processstepssection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitUsSection from "@/components/Visitussection";
import WhatYouGetSection from "@/components/Whatyougetsection";
import WhoCanApplySection from "@/components/Whocanapplysection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <EligibilityBanner />
      <WhoCanApplySection />
      <WhatYouGetSection />
      <DestinationBudgetSection />
      <CompanyIntroSection />
      <ServicesSection />
      <MilestonesSection />
      <ProcessStepsSection />
      <CommonMistakesSection />
      <TestimonialsSection />
      <VisitUsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
