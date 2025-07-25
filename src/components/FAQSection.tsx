import { useState } from "react";
import { ChevronDown, Shield, User, FileText, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Es seguro subir mis documentos?",
    answer: "Sí. Usamos sistemas de almacenamiento cifrados y solo tu asesor puede ver tu información. Cumplimos con todas las normativas de protección de datos (RGPD) y utilizamos encriptación de nivel bancario para proteger tus documentos.",
    icon: Shield
  },
  {
    question: "¿Quién me atiende? ¿Es real?",
    answer: "Por supuesto. Te asignamos un asesor personal que te acompaña durante todo el proceso. Son profesionales colegiados con años de experiencia que se encargarán personalmente de tu caso.",
    icon: User
  },
  {
    question: "¿Qué documentos tengo que enviar?",
    answer: "Solo lo básico: facturas, modelo 130 o 303, ingresos y gastos. Te guiaremos paso a paso sobre qué documentos necesitas según tu situación específica. Puedes enviarlos por foto, PDF o escaneado.",
    icon: FileText
  },
  {
    question: "¿Qué pasa si tengo dudas?",
    answer: "Puedes escribirnos directamente y tu asesor te responderá personalmente. Nada de bots. Además, tienes acceso directo a tu asesor por email o teléfono durante el horario laboral.",
    icon: MessageCircle
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos todas tus dudas para que tomes la mejor decisión
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openItems.includes(index);
              
              return (
                <div 
                  key={index}
                  className="card-elevated animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional help section */}
          <div className="mt-12 text-center animate-scale-in">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">¿Tienes más preguntas?</h3>
              <p className="mb-4 opacity-90">
                Nuestro equipo está aquí para ayudarte con cualquier duda
              </p>
              <button 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
              >
                Contáctanos directamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;