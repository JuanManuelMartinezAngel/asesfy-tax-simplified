import { Upload, Search, Download } from "lucide-react";

// STATIC icon rendering function to avoid dynamic component errors
const getStepIcon = (iconType: string, className: string) => {
  if (iconType === "upload") return <Upload className={className} />;
  if (iconType === "search") return <Search className={className} />;
  if (iconType === "download") return <Download className={className} />;
  return <Upload className={className} />; // fallback
};

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Sube tus documentos",
      description: "Arrastra y suelta tus facturas, recibos y documentos fiscales en nuestra plataforma segura. Nuestro sistema los organiza automáticamente.",
      iconType: "upload",
      color: "from-blue-500 to-blue-600",
      features: ["Subida segura y encriptada", "Organización automática", "Múltiples formatos"],
      image: "📄"
    },
    {
      id: 2,
      title: "Tu asesor revisa todo",
      description: "Un asesor fiscal certificado revisa toda tu información, detecta deducciones y optimiza tu declaración para máximo ahorro.",
      iconType: "search",
      color: "from-teal-500 to-cyan-500",
      features: ["Asesor personal asignado", "Revisión exhaustiva", "Optimización fiscal"],
      image: "👨‍💼"
    },
    {
      id: 3,
      title: "Recibes todo listo",
      description: "Recibe tu declaración completada, informes detallados y toda la documentación oficial lista para presentar.",
      iconType: "download",
      color: "from-cyan-500 to-teal-600",
      features: ["Declaración completada", "Informes detallados", "Documentación oficial"],
      image: "✅"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Cómo funciona nuestro{" "}
            <span className="gradient-text">proceso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solo tres pasos para tener tu declaración de la renta completamente gestionada
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="space-y-6">
              {/* Step number */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    0{step.id}
                  </span>
                </div>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* Card */}
              <div className="card-simple space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    {getStepIcon(step.iconType, "w-6 h-6 text-white")}
                  </div>
                  <div className="text-2xl">{step.image}</div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-glass inline-block p-6">
            <h3 className="text-xl font-bold mb-2">¿Listo para empezar?</h3>
            <p className="text-muted-foreground mb-4">
              Tu asesor personal te está esperando
            </p>
            <button 
              className="btn-primary"
              onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
            >
              Comenzar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}