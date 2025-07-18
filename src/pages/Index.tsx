import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Test basic content first */}
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Asesfy - Test de Carga
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Si ves este mensaje, la aplicación se está cargando correctamente.
        </p>
      </div>
      
      {/* Load components one by one */}
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
