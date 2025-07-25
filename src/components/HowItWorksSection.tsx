import { useState, useEffect, useRef } from "react";
import { UserPlus, Upload, Users, CheckCircle2, ArrowRight, Clock } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Te registras",
    description: "Rellena un formulario simple con tu información básica (nombre, tipo de actividad, email…).",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary-dark",
    time: "2 min"
  },
  {
    icon: Upload,
    title: "Subes tus documentos",
    description: "Recibes un enlace donde puedes subir tus documentos (facturas, PDFs, escaneos…).",
    color: "text-purple",
    bgColor: "bg-purple/10",
    gradient: "from-purple to-purple/80",
    time: "5 min"
  },
  {
    icon: Users,
    title: "Te asignamos un asesor fiscal real",
    description: "Un profesional se encargará de todo y te contactará si falta algo.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    gradient: "from-accent to-accent/80",
    time: "2 horas"
  },
  {
    icon: CheckCircle2,
    title: "Recibes tu informe o gestión completada",
    description: "Te lo enviamos por email o por el canal que prefieras. Ya puedes olvidarte de los trámites.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-accent",
    time: "24-48h"
  }
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-progress through steps
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      id="como-funciona"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary/20 to-primary-light/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              <span>Proceso completo en 48 horas</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">¿Cómo funciona</span> AsesFy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un proceso <strong>simple y transparente</strong> diseñado para que te olvides de las complicaciones fiscales
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-7xl mx-auto">
            {/* Progressive connection line */}
            <div className="absolute top-24 left-0 right-0 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-purple to-accent rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: inView ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                  transitionDelay: '0.5s'
                }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index <= activeStep;
                const isCurrent = index === activeStep;
                
                return (
                  <div 
                    key={index}
                    className={`relative transition-all duration-700 ${
                      inView ? 'animate-slide-up' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step number floating badge */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ${
                      isActive ? 'bg-gradient-primary scale-110 shadow-lg' : 'bg-gray-400 scale-100'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Main card */}
                    <div className={`relative bg-card border rounded-3xl p-8 transition-all duration-500 cursor-pointer group ${
                      isCurrent 
                        ? 'shadow-large scale-105 border-primary/20' 
                        : isActive 
                        ? 'shadow-medium border-border hover:shadow-large hover:scale-102' 
                        : 'shadow-soft border-border/50 opacity-70 hover:opacity-100'
                    }`}>
                      {/* Time indicator */}
                      <div className="absolute top-4 right-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          isActive ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.time}
                        </span>
                      </div>

                      {/* Icon container */}
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-r ${step.gradient} shadow-lg` 
                          : step.bgColor
                      } ${isCurrent ? 'animate-pulse' : ''}`}>
                        <Icon className={`w-10 h-10 transition-colors duration-300 ${
                          isActive ? 'text-white' : step.color
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      {index < steps.length - 1 && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive ? 'bg-primary text-white scale-110' : 'bg-muted text-muted-foreground'
                          }`}>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Step indicator dots */}
            <div className="flex justify-center gap-2 mb-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= activeStep ? 'bg-primary scale-125' : 'bg-muted'
                  }`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>

            {/* Cards container */}
            <div className="overflow-x-auto pb-4">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${activeStep * (320 + 24)}px)`,
                  width: `${steps.length * 344}px`
                }}
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  
                  return (
                    <div 
                      key={index}
                      className={`w-80 flex-shrink-0 transition-all duration-500 ${
                        inView ? 'animate-slide-up' : 'opacity-0 translate-y-20'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`bg-card border rounded-3xl p-6 h-full transition-all duration-300 ${
                        isActive ? 'shadow-large scale-105 border-primary/20' : 'shadow-medium border-border'
                      }`}>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full font-medium">
                            {step.time}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                          isActive ? `bg-gradient-to-r ${step.gradient}` : step.bgColor
                        }`}>
                          <Icon className={`w-8 h-8 transition-colors duration-300 ${
                            isActive ? 'text-white' : step.color
                          }`} />
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary transition-colors disabled:opacity-50"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
              >
                Anterior
              </button>
              <button
                className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary transition-colors disabled:opacity-50"
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className={`transition-all duration-1000 delay-1000 ${inView ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary rounded-2xl text-white font-medium shadow-large">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">¡Solo 4 pasos y te olvidas de los impuestos para siempre!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;