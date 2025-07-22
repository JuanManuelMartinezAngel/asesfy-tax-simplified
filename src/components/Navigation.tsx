import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStartNow = () => {
    window.open(EXTERNAL_LINKS.TALLY_FORM, '_blank');
  };

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">sesfy</span>
            </div>
            <div className="hidden sm:block ml-4 px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-sm text-primary font-medium">Plataforma Líder en Gestión Fiscal</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleStartNow}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Empezar ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={handleStartNow}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition-all duration-300"
                >
                  Empezar ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
