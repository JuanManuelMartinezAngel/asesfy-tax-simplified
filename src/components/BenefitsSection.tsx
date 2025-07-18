import { Shield, Clock, DollarSign, UserCheck, Zap, Star, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Seguridad total",
      description: "Encriptación de nivel bancario para proteger toda tu información personal y fiscal.",
      features: ["Cifrado AES-256", "RGPD compliance", "Acceso restringido"],
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-emerald-500/10",
      delay: "0s"
    },
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Dedica tu tiempo a lo que realmente importa. Nosotros nos encargamos de toda la burocracia fiscal.",
      features: ["Proceso automatizado", "Sin colas ni esperas", "Disponible 24/7"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-blue-500/10",
      delay: "0.2s"
    },
    {
      icon: DollarSign,
      title: "Maximiza tus ahorros",
      description: "Identificamos todas las deducciones posibles para optimizar tu declaración y ahorrarte dinero.",
      features: ["Análisis exhaustivo", "Deducciones máximas", "Estrategias fiscales"],
      color: "from-purple-500 to-pink-500",
      gradient: "bg-purple-500/10",
      delay: "0.4s"
    },
    {
      icon: UserCheck,
      title: "Asesor personal",
      description: "Un profesional fiscal certificado asignado exclusivamente para gestionar todos tus trámites.",
      features: ["Asesor dedicado", "Comunicación directa", "Experiencia certificada"],
      color: "from-orange-500 to-red-500",
      gradient: "bg-orange-500/10",
      delay: "0.6s"
    }
  ];

  const stats = [
    { value: "500+", label: "Clientes satisfechos", icon: Star },
    { value: "24h", label: "Tiempo promedio", icon: Clock },
    { value: "98%", label: "Precisión fiscal", icon: CheckCircle },
    { value: "€2.5k", label: "Ahorro promedio", icon: DollarSign }
  ];

  return (
    <section id="benefits" className="section-container">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-primary/10 rounded-full blur-3xl floating-slow"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-accent/10 rounded-full blur-3xl floating"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-gradient" />
            <span className="text-foreground/80">Beneficios únicos para ti</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">¿Por qué elegir</span>{" "}
            <span className="text-foreground">TaxFlow?</span>
          </h2>
          
          <p className="text-xl text-foreground/70 leading-relaxed">
            Más que un servicio fiscal, somos tu socio tecnológico para una gestión 
            <span className="text-gradient font-semibold"> inteligente y segura</span> de tus impuestos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-slide-in-up"
              style={{ animationDelay: benefit.delay }}
            >
              <div className="card-modern relative overflow-hidden h-full">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full"></div>
                        <span className="text-xs text-foreground/60 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Zap className="w-4 h-4 text-gradient" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-strong rounded-3xl p-8 mb-20 animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Resultados que hablan por sí solos
            </h3>
            <p className="text-foreground/70">
              Cifras reales de nuestros clientes satisfechos
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-gradient" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Features Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Features */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Tecnología avanzada al{" "}
                <span className="text-gradient">servicio de tus impuestos</span>
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Utilizamos inteligencia artificial y algoritmos avanzados para optimizar 
                cada aspecto de tu declaración fiscal.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "IA para detección automática",
                  description: "Nuestros algoritmos identifican automáticamente deducciones y optimizaciones fiscales.",
                  progress: 95
                },
                {
                  title: "Revisión humana experta",
                  description: "Un asesor fiscal certificado valida y optimiza todo el proceso.",
                  progress: 100
                },
                {
                  title: "Seguridad empresarial",
                  description: "Protocolos de seguridad de nivel bancario para proteger tu información.",
                  progress: 98
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="space-y-3 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <span className="text-sm text-gradient font-bold">{feature.progress}%</span>
                  </div>
                  <p className="text-sm text-foreground/60">{feature.description}</p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${feature.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative animate-slide-in-right">
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-mesh opacity-20 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-foreground">Panel de Control</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                {/* Mock interface */}
                <div className="space-y-4">
                  {[
                    { label: "Documentos procesados", value: "23/25", status: "processing" },
                    { label: "Deducciones encontradas", value: "€1,247", status: "completed" },
                    { label: "Tiempo restante", value: "2h 15m", status: "active" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'completed' ? 'bg-emerald-400' :
                          item.status === 'processing' ? 'bg-yellow-400 animate-pulse' :
                          'bg-blue-400'
                        }`}></div>
                        <span className="text-sm text-foreground/80">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gradient">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Progress chart mockup */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-end gap-2 h-20">
                    {[60, 40, 80, 30, 90, 50, 70].map((height, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-gradient-primary/40 rounded-t transition-all duration-1000"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent/20 rounded-full blur-xl floating"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-purple/20 rounded-full blur-lg floating-reverse"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 floating-slow">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-foreground">Seguro SSL</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 floating">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-foreground">Verificado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-scale-in">
          <div className="glass-strong rounded-3xl p-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center glow">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground">
                ¿Listo para revolucionar tus impuestos?
              </h3>
              
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Únete a cientos de clientes que ya disfrutan de un proceso fiscal 
                completamente automatizado y optimizado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  className="btn-primary group text-lg px-8 py-4"
                  onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
                >
                  <span className="mr-3">Empezar ahora gratis</span>
                  <Zap className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </Button>
                
                <Button
                  className="btn-secondary group text-lg px-8 py-4"
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Star className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>Ver testimonios</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;