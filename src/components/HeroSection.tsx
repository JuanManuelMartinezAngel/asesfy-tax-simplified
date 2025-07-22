import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Olvídate de tus impuestos.</span>
              <br />
              <span className="text-foreground">Nosotros lo hacemos por ti.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Te asignamos un asesor personal. Tú solo subes tus documentos. 
              Nosotros lo gestionamos todo.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">100% Online</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Asesor Personal</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Totalmente Seguro</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="btn-hero group"
              onClick={() => window.open(EXTERNAL_LINKS.TALLY_FORM, '_blank')}
            >
              Quiero que me lleven los impuestos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Persona trabajando feliz sin preocuparse por impuestos"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-medium animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">¡Todo resuelto!</p>
                  <p className="text-xs text-muted-foreground">En 48 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;