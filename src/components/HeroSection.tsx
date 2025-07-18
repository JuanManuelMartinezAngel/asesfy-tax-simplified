import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, Shield, Clock, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-background to-secondary">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Tu declaración de la{" "}
                <span className="gradient-text">renta perfecta</span>{" "}
                sin complicaciones
              </h1>
              
              <p className="text-lg text-muted-foreground text-balance max-w-2xl">
                Olvídate del estrés fiscal. Nuestros expertos se encargan de todo: 
                desde la subida de documentos hasta la presentación final. 
                <strong className="text-accent"> Garantizado y seguro.</strong>
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              {[
                { text: "100% Online", color: "text-blue-400" },
                { text: "Asesor Personal", color: "text-cyan-400" },
                { text: "Totalmente Seguro", color: "text-teal-400" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver cómo funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "15K+", label: "Declaraciones" },
                { number: "4.9★", label: "Valoración" },
                { number: "48h", label: "Entrega media" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-glass p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Seguridad garantizada</h3>
                  <p className="text-sm text-muted-foreground">Encriptación de nivel bancario</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Proceso rápido</h3>
                  <p className="text-sm text-muted-foreground">En menos de 48 horas</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Asesor personal</h3>
                  <p className="text-sm text-muted-foreground">Dedicado solo para ti</p>
                </div>
              </div>

              <div className="pt-6">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Proceso completado: 75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}