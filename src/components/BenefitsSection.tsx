import { Shield, Clock, DollarSign, UserCheck, TrendingUp, Users } from "lucide-react";

// STATIC icon rendering function to avoid dynamic component errors
const renderBenefitIcon = (iconType: string, className: string) => {
  if (iconType === "shield") return <Shield className={className} />;
  if (iconType === "clock") return <Clock className={className} />;
  if (iconType === "dollar") return <DollarSign className={className} />;
  if (iconType === "usercheck") return <UserCheck className={className} />;
  return <Shield className={className} />; // fallback
};

const renderStatIcon = (iconType: string, className: string) => {
  if (iconType === "trending") return <TrendingUp className={className} />;
  if (iconType === "users") return <Users className={className} />;
  if (iconType === "dollar") return <DollarSign className={className} />;
  return <TrendingUp className={className} />; // fallback
};

export default function BenefitsSection() {
  const benefits = [
    {
      iconType: "shield",
      title: "Seguridad total",
      description: "Encriptación de nivel bancario para proteger toda tu información personal y fiscal.",
      features: ["Cifrado AES-256", "RGPD compliance", "Acceso restringido"],
      color: "from-teal-500 to-cyan-600",
      gradient: "bg-teal-500/10",
      delay: "0s"
    },
    {
      iconType: "clock",
      title: "Ahorra tiempo",
      description: "Dedica tu tiempo a lo que realmente importa. Nosotros nos encargamos de toda la burocracia fiscal.",
      features: ["Proceso automatizado", "Sin colas ni esperas", "Disponible 24/7"],
      color: "from-blue-500 to-blue-600",
      gradient: "bg-blue-500/10",
      delay: "0.2s"
    },
    {
      iconType: "dollar",
      title: "Maximiza tus ahorros",
      description: "Identificamos todas las deducciones posibles para optimizar tu declaración y ahorrarte dinero.",
      features: ["Análisis exhaustivo", "Deducciones máximas", "Estrategias fiscales"],
      color: "from-cyan-500 to-teal-600",
      gradient: "bg-cyan-500/10",
      delay: "0.4s"
    },
    {
      iconType: "usercheck",
      title: "Asesor personal",
      description: "Un profesional fiscal certificado asignado exclusivamente para gestionar todos tus trámites.",
      features: ["Asesor dedicado", "Comunicación directa", "Experiencia certificada"],
      color: "from-blue-600 to-slate-700",
      gradient: "bg-blue-600/10",
      delay: "0.6s"
    }
  ];

  const stats = [
    {
      iconType: "trending",
      number: "98%",
      label: "Satisfacción del cliente",
      description: "Nuestros clientes recomiendan nuestro servicio"
    },
    {
      iconType: "users", 
      number: "15K+",
      label: "Declaraciones procesadas",
      description: "Clientes han confiado en nuestros servicios"
    },
    {
      iconType: "dollar",
      number: "€2.4M",
      label: "Ahorros generados",
      description: "En deducciones fiscales para nuestros clientes"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-background to-secondary">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Por qué elegir{" "}
            <span className="gradient-text">nuestro servicio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te ofrecemos la mejor experiencia en gestión fiscal con tecnología avanzada y asesoramiento profesional
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-simple space-y-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                {renderBenefitIcon(benefit.iconType, "w-6 h-6 text-white")}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>

              <ul className="space-y-1">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="card-glass p-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  {renderStatIcon(stat.iconType, "w-6 h-6 text-primary")}
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            className="btn-accent text-lg px-8 py-4"
            onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
          >
            Empezar mi declaración
          </button>
        </div>
      </div>
    </section>
  );
}