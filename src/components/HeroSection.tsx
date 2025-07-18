import { ArrowRight, CheckCircle, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse-glow"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-accent/20 rounded-full blur-xl floating-reverse"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-purple/20 rounded-full blur-lg floating-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-primary/15 rounded-full blur-3xl floating"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-gradient" />
              <span className="text-foreground/80">Tu asesor fiscal personal</span>
              <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient block">Olvídate de</span>
                <span className="text-gradient block">tus impuestos.</span>
                <span className="text-foreground block mt-2">
                  Nosotros lo hacemos
                  <span className="inline-block relative ml-3">
                    <span className="text-gradient">por ti</span>
                    <div className="absolute -right-8 -top-2">
                      <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
                    </div>
                  </span>
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Te asignamos un asesor personal. Tú solo subes tus documentos. 
              Nosotros gestionamos todo el proceso de manera <span className="text-gradient font-semibold">100% digital y segura</span>.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                { icon: CheckCircle, text: "100% Online", color: "text-emerald-400" },
                { icon: CheckCircle, text: "Asesor Personal", color: "text-blue-400" },
                { icon: CheckCircle, text: "Totalmente Seguro", color: "text-purple-400" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 glass px-4 py-2 rounded-xl glow-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {(() => {
                    const IconComponent = item.icon;
                    return <IconComponent className={`w-5 h-5 ${item.color}`} />;
                  })()}
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="btn-primary group text-lg px-10 py-6"
                onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
              >
                <span className="mr-3">Quiero que me lleven los impuestos</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg"
                className="btn-secondary group text-lg px-10 py-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <TrendingUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>Ver cómo funciona</span>
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-center lg:justify-start gap-6 text-foreground/60">
                <div className="flex -space-x-3">
                  {['A', 'M', 'C', 'L', 'R'].map((initial, index) => (
                    <div 
                      key={index}
                      className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-background glow-hover"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">+500 clientes satisfechos</div>
                  <div className="text-foreground/60">Este mes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-in-right">
            {/* Main card */}
            <div className="relative glass-strong rounded-3xl p-8 glow-hover">
              {/* Floating elements inside card */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-accent/20 rounded-xl flex items-center justify-center floating">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-purple/20 rounded-lg flex items-center justify-center floating-reverse">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>

              {/* Card content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Proceso Simplificado</h3>
                    <p className="text-foreground/60 text-sm">En 3 pasos simples</p>
                  </div>
                </div>

                {/* Progress steps */}
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Sube tus documentos", status: "completed" },
                    { step: "02", title: "Revisión de asesor", status: "active" },
                    { step: "03", title: "Gestión completada", status: "pending" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        item.status === 'completed' ? 'bg-emerald-500 text-white' :
                        item.status === 'active' ? 'bg-gradient-primary text-white animate-pulse-glow' :
                        'bg-white/10 text-foreground/40'
                      }`}>
                        {item.step}
                      </div>
                      <span className={`font-medium ${
                        item.status === 'completed' ? 'text-emerald-400' :
                        item.status === 'active' ? 'text-foreground' :
                        'text-foreground/40'
                      }`}>
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">2h</div>
                    <div className="text-xs text-foreground/60">Tiempo promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">98%</div>
                    <div className="text-xs text-foreground/60">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 floating-slow">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">En línea</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 floating">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-foreground">100% Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;