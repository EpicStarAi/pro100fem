import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const { mode, lang } = useStore();
  const t = translations[lang];

  const services = [
    { title: t.svc1_t, desc: t.svc1_d, price: t.svc1_p },
    { title: t.svc2_t, desc: t.svc2_d, price: t.svc2_p },
    { title: t.svc3_t, desc: t.svc3_d, price: t.svc3_p },
    { title: t.svc4_t, desc: t.svc4_d, price: t.svc4_p },
    { title: t.svc5_t, desc: t.svc5_d, price: t.svc5_p },
    { title: t.svc6_t, desc: t.svc6_d, price: t.svc6_p },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.services_h2}</h2>
            <p className="text-muted-foreground text-lg">{t.services_p}</p>
          </div>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors"
          >
            {t.services_cta}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <motion.article 
              key={i}
              variants={item}
              className="group relative bg-card hover:bg-card/80 border border-white/5 hover:border-primary/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-8 right-8 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {svc.price}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 pr-24 group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
