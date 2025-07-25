import HeroSection from "@/components/HeroSection";
import VideoIntroSection from "@/components/VideoIntroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoIntroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
