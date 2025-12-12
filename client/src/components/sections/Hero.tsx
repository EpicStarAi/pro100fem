import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Send, ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_dark_paving_background.png";

export function Hero() {
  const { mode, lang } = useStore();
  const t = translations[lang];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: mode === 'cinematic' ? 'smooth' : 'auto' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="top">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: mode === 'cinematic' ? 1.05 : 1.1,
            filter: mode === 'cinematic' ? 'brightness(0.7)' : 'brightness(0.5)'
          }}
          transition={{ duration: 10, repeat: mode === 'cinematic' ? Infinity : 0, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero_pill}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
            {t.hero_h1.split(' ').map((word, i) => (
              <span key={i} className={i === 1 || i === 2 ? "text-primary" : ""}>{word} </span>
            ))}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {t.hero_lead}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[t.chip1, t.chip2, t.chip3, t.chip4].map((chip, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{chip.replace('✅ ', '')}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-12 px-8 rounded-full"
              onClick={() => scrollTo('#calc')}
            >
              {t.cta_calc}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 hover:bg-white/5 text-white h-12 px-8 rounded-full"
              onClick={() => window.open('tel:+30638450259')}
            >
              <Phone className="w-4 h-4 mr-2" />
              +30638450259
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 h-12 px-8 rounded-full"
              onClick={() => window.open('https://t.me/PRO100FEM')}
            >
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5">
            <div>
              <div className="text-xl font-bold text-white mb-1">{t.trust1_b}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{t.trust1_s}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-1">{t.trust2_b}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{t.trust2_s}</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-1">{t.trust3_b}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{t.trust3_s}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="glass-panel p-8 rounded-2xl relative z-10 cinematic-shadow max-w-md ml-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{t.side_title}</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              {t.side_text}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">{t.form_name}</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  placeholder="Alex"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">{t.form_phone}</label>
                <input 
                  type="tel" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  placeholder="+380..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">{t.form_msg}</label>
                <textarea 
                  rows={3}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                  placeholder="..."
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-lg mt-2 group">
                {t.form_send}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-[10px] text-center text-white/30">
                {t.form_hint}
              </p>
            </form>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
