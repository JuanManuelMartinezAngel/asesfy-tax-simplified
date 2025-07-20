import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Inicio", id: "home" },
    { name: "Cómo funciona", id: "how-it-works" },
    { name: "Beneficios", id: "benefits" },
    { name: "Testimonios", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass-strong py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center space-x-2">
              <img 
                src="/sesfy-logo.jpg" 
                alt="Sesfy Logo" 
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                sesfy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="btn-primary group"
              onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
            >
              <span className="mr-2">Empezar ahora</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden glass p-3 rounded-xl transition-all duration-300 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Fixed visibility */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 space-y-4 border border-border shadow-xl">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary font-medium transition-all duration-300 py-2 hover:pl-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Button
                className="btn-primary w-full group"
                onClick={() => {
                  window.open('https://tally.so/r/31QNWg', '_blank');
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">Empezar ahora</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;