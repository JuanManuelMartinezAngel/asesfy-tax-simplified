import { UserPlus, Upload, Users, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Te registras",
    description: "Rellena un formulario simple con tu información básica.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Upload,
    title: "Subes tus documentos",
    description: "Te enviamos un enlace para que puedas subir fotos, PDFs o escaneos desde tu móvil u ordenador.",
    color: "text-purple",
    bgColor: "bg-purple/10"
  },
  {
    icon: Users,
    title: "Te asignamos un asesor real",
    description: "Uno de nuestros asesores fiscales revisará tu caso y se pondrá en contacto contigo para resolver todo.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: CheckCircle2,
    title: "Recibes tu informe",
    description: "Te notificamos cuando esté listo y te enviamos tu informe o la gestión fiscal completa. Así de simple.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Cómo funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y transparente diseñado para que te olvides de las complicaciones fiscales
          </p>
        </div>

        <div className="relative">
          {/* Desktop version */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start relative">
              {/* Connection line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple via-accent to-primary rounded-full"></div>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="relative z-10 flex-1 max-w-xs animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-center">
                      {/* Icon container */}
                      <div className={`w-32 h-32 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-all duration-500 shadow-soft hover:shadow-medium`}>
                        <Icon className={`w-12 h-12 ${step.color}`} />
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="card-elevated animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light rounded-full text-accent font-medium">
            <CheckCircle2 className="w-5 h-5" />
            <span>Todo el proceso toma menos de 48 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;