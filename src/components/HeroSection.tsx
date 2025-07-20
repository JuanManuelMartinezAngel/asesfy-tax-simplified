import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, Shield, Clock, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="section-padding bg-gradient-to-br from-background to-secondary min-h-screen flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-primary font-medium text-sm">Plataforma Líder en Gestión Fiscal</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Gestión Fiscal{" "}
                <span className="gradient-text">Simplificada</span>
              </h1>
              
              <p className="text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed">
                Automatiza tu gestión fiscal, accede a asesoramiento profesional y optimiza tus obligaciones tributarias con nuestra plataforma integral.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tally.so/r/31QNWg"
                target="_blank"
                rel="noopener noreferrer"
                className="sesfy-button text-lg px-8 py-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: '#4ECDC4',
                  color: '#2C3E50',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
                  textDecoration: 'none',
                  userSelect: 'none',
                  display: 'inline-flex'
                }}
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <button 
                className="btn-secondary text-lg px-8 py-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer font-medium text-white border transition-all duration-200"
                style={{
                  background: 'transparent',
                  border: '1px solid hsl(174, 72%, 56%)',
                  color: 'hsl(174, 72%, 56%)'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Botón Acceso Demo clickeado');
                  try {
                    const element = document.getElementById('testimonials');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      });
                      console.log('Scrolling to testimonials section');
                    } else {
                      console.error('Testimonials section not found');
                    }
                  } catch (error) {
                    console.error('Error scrolling to testimonials:', error);
                  }
                }}
                type="button"
                onMouseEnter={(e) => {
                  e.target.style.background = 'hsl(174, 72%, 56%)';
                  e.target.style.color = 'hsl(217, 32%, 17%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'hsl(174, 72%, 56%)';
                }}
              >
                <Play className="w-5 h-5" />
                Acceso Demo
              </button>
            </div>

            {/* Quick Access Demo section */}
            <div className="bg-card/50 border border-border rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span className="text-sm font-medium text-white">Acceso Rápido Demo:</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Explora todas las funcionalidades de la plataforma sin compromiso
              </p>
            </div>
          </div>

          {/* Visual Dashboard Mockup */}
          <div className="relative">
            <div className="sesfy-card p-8 space-y-6 bg-card/80 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Panel de Control</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Dashboard Items */}
                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white font-medium">Declaración IRPF</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white font-medium">IVA Trimestral</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-white font-medium">Nóminas</span>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-500" />
                </div>

                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-white font-medium">Ahorro Fiscal</span>
                  <span className="text-2xl font-bold text-primary">€2,340</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}