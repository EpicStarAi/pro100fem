import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/generated_images/minimalist_geometric_logo_for_paving_company.png";

export function Navbar() {
  const { mode, lang, toggleMode, toggleLang } = useStore();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t.nav_services },
    { href: "#portfolio", label: t.nav_portfolio },
    { href: "#calc", label: t.nav_calc },
    { href: "#faq", label: t.nav_faq },
    { href: "#contact", label: t.nav_contacts },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: mode === 'cinematic' ? 'smooth' : 'auto' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, '#top')}>
          <div className="relative w-10 h-10 overflow-hidden rounded-sm">
            <img src={logo} alt="PRO100FEM" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              PRO100FEM
            </span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
              {t.brand_tag}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-card border border-white/5 rounded-full p-1">
            <button
              onClick={() => mode !== 'business' && toggleMode()}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                mode === 'business' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'
              }`}
            >
              BUSINESS
            </button>
            <button
              onClick={() => mode !== 'cinematic' && toggleMode()}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                mode === 'cinematic' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-white'
              }`}
            >
              CINEMATIC
            </button>
          </div>

          <div className="flex items-center bg-card border border-white/5 rounded-full p-1">
            <button
              onClick={() => lang !== 'ua' && toggleLang()}
              className={`w-8 h-6 text-xs font-medium rounded-full transition-all ${
                lang === 'ua' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'
              }`}
            >
              UA
            </button>
            <button
              onClick={() => lang !== 'en' && toggleLang()}
              className={`w-8 h-6 text-xs font-medium rounded-full transition-all ${
                lang === 'en' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
            onClick={(e) => handleNavClick(e as any, '#contact')}
          >
            {t.cta_free_visit}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-white/5 p-4 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-white py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Mode</span>
                <div className="flex items-center bg-background/50 rounded-full p-1">
                  <button
                    onClick={toggleMode}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                      mode === 'business' ? 'bg-white/10 text-white' : 'text-muted-foreground'
                    }`}
                  >
                    BUSINESS
                  </button>
                  <button
                    onClick={toggleMode}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                      mode === 'cinematic' ? 'bg-primary/20 text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    CINEMATIC
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Language</span>
                <div className="flex items-center bg-background/50 rounded-full p-1">
                  <button
                    onClick={toggleLang}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                      lang === 'ua' ? 'bg-white/10 text-white' : 'text-muted-foreground'
                    }`}
                  >
                    UA
                  </button>
                  <button
                    onClick={toggleLang}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                      lang === 'en' ? 'bg-white/10 text-white' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Button 
                className="w-full bg-primary text-primary-foreground font-semibold"
                onClick={(e) => handleNavClick(e as any, '#contact')}
              >
                {t.cta_free_visit}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
