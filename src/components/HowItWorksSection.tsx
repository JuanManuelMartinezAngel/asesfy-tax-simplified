import { useState } from "react";
import { FileText, UserCheck, CheckCircle, ArrowRight, Upload, Search, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Static step data - NO dynamic icons, only string identifiers
  const steps = [
    {
      id: 1,
      title: "Sube tus documentos",
      description: "Arrastra y suelta tus facturas, recibos y documentos fiscales en nuestra plataforma segura. Nuestro sistema los organiza automáticamente.",
      iconType: "upload",
      color: "from-blue-500 to-cyan-500",
      features: ["Subida segura y encriptada", "Organización automática", "Múltiples formatos"],
      image: "📄"
    },
    {
      id: 2,
      title: "Tu asesor revisa todo",
      description: "Un asesor fiscal certificado revisa toda tu información, detecta deducciones y optimiza tu declaración para máximo ahorro.",
      iconType: "search",
      color: "from-purple-500 to-pink-500",
      features: ["Asesor personal asignado", "Revisión exhaustiva", "Optimización fiscal"],
      image: "👨‍💼"
    },
    {
      id: 3,
      title: "Recibes todo listo",
      description: "Recibe tu declaración completada, informes detallados y toda la documentación oficial lista para presentar.",
      iconType: "download",
      color: "from-emerald-500 to-teal-500",
      features: ["Declaración completada", "Informes detallados", "Documentación oficial"],
      image: "✅"
    }
  ];

  // STATIC icon rendering function - NO dynamic component references
  const getStepIcon = (iconType: string, className: string) => {
    if (iconType === "upload") return <Upload className={className} />;
    if (iconType === "search") return <Search className={className} />;
    if (iconType === "download") return <Download className={className} />;
    return <Upload className={className} />; // fallback
  };

  return (
    <section id="how-it-works" className="section-container">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-purple/10 rounded-full blur-3xl floating-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-gradient" />
            <span className="text-foreground/80">Proceso simplificado en 3 pasos</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Así de fácil</span>{" "}
            <span className="text-foreground">funciona</span>
          </h2>
          
          <p className="text-xl text-foreground/70 leading-relaxed">
            Desde subir tus documentos hasta recibir todo completado. 
            Nuestro proceso está diseñado para que no tengas que preocuparte por nada.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="max-w-7xl mx-auto">
          {/* Step Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-4 glass-strong p-2 rounded-2xl">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-primary text-white shadow-lg"
                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? "bg-white/20"
                        : "bg-white/10"
                    }`}>
                      {getStepIcon(step.iconType, "w-4 h-4")}
                    </div>
                    <span className="font-medium hidden sm:block">{step.title}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-foreground/30 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Step Details */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center glow`}>
                    {getStepIcon(steps[activeStep].iconType, "w-8 h-8 text-white")}
                  </div>
                  <div className="text-4xl">{steps[activeStep].image}</div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  {steps[activeStep].title}
                </h3>
                
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {steps[activeStep].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  className="btn-primary group"
                  onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
                >
                  <span className="mr-3">Empezar ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative animate-slide-in-right">
              {/* Main Card */}
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].color} opacity-10 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center`}>
                        {getStepIcon(steps[activeStep].iconType, "w-6 h-6 text-white")}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Paso {activeStep + 1}</h4>
                        <p className="text-sm text-foreground/60">{steps[activeStep].title}</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Progreso</span>
                      <span className="text-gradient font-semibold">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} transition-all duration-500`}
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Mock Interface */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((item, index) => (
                      <div 
                        key={item} 
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                          index <= activeStep ? "bg-white/10" : "bg-white/5"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          index <= activeStep ? "bg-emerald-500" : "bg-white/10"
                        }`}>
                          {index <= activeStep ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`h-2 rounded-full ${
                            index <= activeStep ? "bg-emerald-400/40" : "bg-white/10"
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gradient">24h</div>
                      <div className="text-xs text-foreground/60">Tiempo máximo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gradient">100%</div>
                      <div className="text-xs text-foreground/60">Seguro</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gradient">0</div>
                      <div className="text-xs text-foreground/60">Errores</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent/20 rounded-full blur-xl floating"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-purple/20 rounded-full blur-lg floating-reverse"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 glass rounded-2xl p-3 floating-slow">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-foreground">PDF, JPG, DOC</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-3 floating">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-foreground">Asesor certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-scale-in">
          <div className="glass-strong rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para simplificar tus impuestos?
            </h3>
            <p className="text-foreground/70 mb-6">
              Únete a más de 500 clientes que ya confían en nosotros
            </p>
            <Button
              className="btn-primary group text-lg px-8 py-4"
              onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
            >
              <span className="mr-3">Empezar mi proceso ahora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;