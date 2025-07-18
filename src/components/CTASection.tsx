import { ArrowRight, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import advisorImage from "@/assets/advisor-illustration.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary via-primary-dark to-purple relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Empieza hoy a olvidarte de tus impuestos
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Deja que un asesor personal lo gestione todo por ti. 
              Tú solo tienes que subir los papeles.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {[
                "Primer contacto en menos de 2 horas",
                "Asesor personal asignado",
                "Proceso 100% digital y seguro",
                "Sin compromisos a largo plazo"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Quiero hablar con un asesor
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 group"
              >
                <Info className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Solo quiero más info por ahora
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 flex items-center gap-4 text-white/80">
              <div className="flex -space-x-2">
                {['A', 'M', 'C', 'L'].map((initial, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-semibold border-2 border-primary-dark"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm">
                Más de 100 clientes atendidos este mes
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={advisorImage} 
                alt="Asesor fiscal profesional"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating testimonial */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    "Mi asesor me respondió en 30 minutos"
                  </p>
                  <p className="text-xs text-gray-600">— Carlos, autónomo</p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="mt-16 text-center animate-scale-in">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <p className="text-white/90 font-medium">
              🔒 Garantía total: Si no quedas satisfecho, te devolvemos el dinero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;