import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
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

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass-strong py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center glow-hover">
                <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">TaxFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="btn-primary group"
              onClick={() => window.open('https://tally.so/r/31QNWg', '_blank')}
            >
              <span className="mr-2">Empezar ahora</span>
              <Zap className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
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

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}>
          <div className="glass-strong rounded-2xl p-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground/80 hover:text-foreground font-medium transition-all duration-300 py-2 hover:pl-2"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                className="btn-primary w-full group"
                onClick={() => {
                  window.open('https://tally.so/r/31QNWg', '_blank');
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">Empezar ahora</span>
                <Zap className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;