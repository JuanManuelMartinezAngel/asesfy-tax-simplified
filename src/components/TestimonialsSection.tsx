import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "María González",
      role: "Diseñadora Freelance",
      company: "Estudio Creativo",
      rating: 5,
      text: "TaxFlow revolucionó completamente mi gestión fiscal. Antes tardaba días en organizar mis facturas, ahora solo subo todo y mi asesor se encarga de todo. ¡Increíble!",
      image: "👩‍💼",
      stats: { saved: "€2,400", time: "15h" },
      highlight: "Ahorro de tiempo excepcional"
    },
    {
      name: "Carlos Ruiz",
      role: "Consultor Marketing",
      company: "Marketing Pro",
      rating: 5,
      text: "La experiencia es brutalmente buena. El asesor me encontró deducciones que ni sabía que existían. Mi declaración nunca había estado tan optimizada.",
      image: "👨‍💻",
      stats: { saved: "€1,800", time: "12h" },
      highlight: "Optimización fiscal máxima"
    },
    {
      name: "Ana Martín",
      role: "Fotógrafa",
      company: "Visual Arts",
      rating: 5,
      text: "Como autónoma, siempre me daba pánico la época de impuestos. Con TaxFlow es tan fácil como subir fotos a Instagram. ¡Mi asesor es genial!",
      image: "👩‍🎨",
      stats: { saved: "€3,100", time: "8h" },
      highlight: "Proceso súper intuitivo"
    },
    {
      name: "David López",
      role: "Desarrollador",
      company: "Tech Solutions",
      rating: 5,
      text: "La tecnología detrás de la plataforma es impresionante. Automatización real con toque humano. Es exactamente lo que necesitaba para mi negocio.",
      image: "👨‍🔬",
      stats: { saved: "€2,900", time: "6h" },
      highlight: "Tecnología de vanguardia"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Valoración media", icon: Star },
    { value: "98%", label: "Clientes satisfechos", icon: Award },
    { value: "24h", label: "Tiempo promedio", icon: Clock },
    { value: "€2.3k", label: "Ahorro medio", icon: TrendingUp }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-container">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-primary/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-accent/10 rounded-full blur-3xl floating-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-gradient" />
            <span className="text-foreground/80">Lo que dicen nuestros clientes</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Testimonios</span>{" "}
            <span className="text-foreground">reales</span>
          </h2>
          
          <p className="text-xl text-foreground/70 leading-relaxed">
            Descubre cómo TaxFlow ha transformado la gestión fiscal de 
            <span className="text-gradient font-semibold"> cientos de profesionales</span> como tú.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-strong rounded-2xl p-6 text-center group glow-hover animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-gradient" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
                    {/* Testimonial Content */}
                    <div className="space-y-6 animate-slide-in-left">
                      {/* Quote Icon */}
                      <div className="relative">
                        <Quote className="w-16 h-16 text-gradient/30 absolute -top-4 -left-4" />
                        <div className="relative z-10">
                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star 
                                key={i} 
                                className="w-5 h-5 text-yellow-400 fill-current animate-scale-in"
                                style={{ animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                            <span className="text-sm text-foreground/60 ml-2">
                              {testimonial.rating}.0
                            </span>
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Highlight */}
                          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-gradient" />
                            <span className="text-sm font-medium text-gradient">
                              {testimonial.highlight}
                            </span>
                          </div>

                          {/* Author Info */}
                          <div className="space-y-2">
                            <div className="text-lg font-bold text-foreground">
                              {testimonial.name}
                            </div>
                            <div className="text-foreground/60">
                              {testimonial.role} • {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Card */}
                    <div className="relative animate-slide-in-right">
                      <div className="glass-strong rounded-3xl p-8 relative overflow-hidden glow-hover">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-primary/5 rounded-3xl"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                          {/* Avatar and Status */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-2xl glow">
                                {testimonial.image}
                              </div>
                              <div>
                                <div className="font-bold text-foreground">{testimonial.name}</div>
                                <div className="text-sm text-foreground/60">{testimonial.role}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-foreground/60">Cliente activo</span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                              <div className="text-2xl font-bold text-gradient mb-1">
                                {testimonial.stats.saved}
                              </div>
                              <div className="text-xs text-foreground/60">Ahorrado</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                              <div className="text-2xl font-bold text-gradient mb-1">
                                {testimonial.stats.time}
                              </div>
                              <div className="text-xs text-foreground/60">Tiempo ahorrado</div>
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-foreground/60">Satisfacción</span>
                              <span className="text-gradient font-bold">100%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div className="h-2 rounded-full bg-gradient-primary w-full transition-all duration-1000"></div>
                            </div>
                          </div>

                          {/* Badge */}
                          <div className="inline-flex items-center gap-2 bg-gradient-primary/20 px-4 py-2 rounded-xl">
                            <Award className="w-4 h-4 text-gradient" />
                            <span className="text-sm font-medium text-foreground">Cliente Premium</span>
                          </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-accent/20 rounded-full blur-lg floating"></div>
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-purple/20 rounded-full blur-md floating-reverse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass-strong border-0 group glow-hover z-10"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-gradient transition-colors duration-300" />
          </Button>

          <Button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass-strong border-0 group glow-hover z-10"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-gradient transition-colors duration-300" />
          </Button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-primary rounded-full"
                  : "w-3 h-3 bg-white/20 rounded-full hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center glow">
                <Star className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground">
                ¿Quieres ser el próximo testimonio?
              </h3>
              
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Únete a nuestra comunidad de clientes satisfechos y experimenta 
                la <span className="text-gradient font-semibold">revolución fiscal</span> por ti mismo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  className="btn-primary group text-lg px-8 py-4"
                  onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
                >
                  <span className="mr-3">Empezar mi experiencia</span>
                  <Sparkles className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </Button>
                
                <Button
                  className="btn-secondary group text-lg px-8 py-4"
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Quote className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span>Ver más testimonios</span>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center justify-center gap-8 text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5 estrellas</span>
                  </div>
                  <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gradient" />
                    <span className="font-semibold">500+ reseñas</span>
                  </div>
                  <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold">98% satisfacción</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;