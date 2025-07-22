import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Laura G.",
    role: "Diseñadora freelance",
    content: "Me despreocupé por completo, y todo fue rápido y claro. Recomiendo AsesFy a cualquiera que odie hacer papeles.",
    rating: 5,
    avatar: "LG"
  },
  {
    name: "Manuel R.",
    role: "Fotógrafo autónomo",
    content: "No entendía nada de mis impuestos, y en 2 días ya tenía todo resuelto. Sin líos, sin dolores de cabeza.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Clara M.",
    role: "Tienda online",
    content: "Pensaba que era una asesoría más… pero realmente se nota que hay personas detrás. Muy buen trato y muy eficiente.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "David S.",
    role: "Consultor independiente",
    content: "Lo que más me gusta es que me explican todo en un lenguaje que entiendo. Nada de tecnicismos raros.",
    rating: 5,
    avatar: "DS"
  },
  {
    name: "Ana P.",
    role: "Coach personal",
    content: "Mi asesor personal siempre está disponible cuando tengo dudas. Es como tener un amigo que sabe de impuestos.",
    rating: 5,
    avatar: "AP"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
    <section id="testimonios" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de personas que ya se liberaron del estrés fiscal
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-large">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-8 sm:p-12"
                >
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-8 text-card-foreground">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Additional social proof */}
        <div className="mt-16 text-center animate-scale-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-light rounded-full text-accent font-medium">
            <Star className="w-5 h-5 fill-current" />
            <span>4.9/5 estrellas en más de 500 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;