import { User, Smartphone, MessageSquare, Shield } from "lucide-react";

const benefits = [
  {
    icon: User,
    title: "Asesor personal que te responde de verdad",
    description: "Siempre tendrás un humano detrás, no un bot.",
    gradient: "from-primary to-primary-dark"
  },
  {
    icon: Smartphone,
    title: "Gestión 100% online y sin desplazarte",
    description: "Desde tu casa, sin imprimir nada ni moverte.",
    gradient: "from-purple to-purple/80"
  },
  {
    icon: MessageSquare,
    title: "Sin tecnicismos ni lenguaje complicado",
    description: "Te explicamos todo claro, como si habláramos contigo por WhatsApp.",
    gradient: "from-accent to-accent/80"
  },
  {
    icon: Shield,
    title: "Tu información, siempre segura",
    description: "Cifrado, control y respeto absoluto por tu privacidad.",
    gradient: "from-primary to-purple"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ¿Por qué elegir <span className="gradient-text">AsesFy</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una experiencia diseñada para que te sientas acompañado en cada paso del proceso
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="card-feature group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional trust section */}
        <div className="mt-20 text-center animate-scale-in">
          <div className="bg-gradient-hero rounded-3xl p-8 sm:p-12 border border-border shadow-soft">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Más de <span className="gradient-text">2,500 clientes</span> confían en nosotros
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Autónomos, freelances y pequeñas empresas que ya se han liberado del estrés fiscal
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold gradient-text">48h</div>
                <div className="text-sm text-muted-foreground">Tiempo medio</div>
              </div>
              <div className="flex-1 min-w-[120px]">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;