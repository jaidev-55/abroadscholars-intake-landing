import CompanyIntroSection from "@/components/CompanyIntroSection";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MilestonesSection from "@/components/MilestonesSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyIntroSection />
      <ServicesSection />
      <MilestonesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
