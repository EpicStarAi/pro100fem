import { useState } from "react";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import modernImg from "@assets/generated_images/modern_driveway_paving.png";
import mixImg from "@assets/generated_images/mixed_color_garden_path_paving.png";
import premiumImg from "@assets/generated_images/premium_luxury_patio_paving.png";
import playgroundImg from "@assets/generated_images/modern_children_playground_paving.png";

// Real photos
import photo1 from "@assets/IMG_20251215_132134_691_1765797721276.jpg";
import photo2 from "@assets/IMG_20251215_132135_136_1765797721368.jpg";
import photo3 from "@assets/IMG_20251215_132135_050_1765797721419.jpg";
import photo4 from "@assets/IMG_20251215_132134_394_1765797721465.jpg";
import photo5 from "@assets/IMG_20251215_132135_128_1765797721497.jpg";
import photo6 from "@assets/IMG_20251215_132134_320_1765797721532.jpg";
import photo7 from "@assets/IMG_20251215_132134_284_1765797721564.jpg";
import photo8 from "@assets/IMG_20251215_132134_865_1765797721633.jpg";
import photo9 from "@assets/IMG_20251215_132134_334_1765797721668.jpg";

type Category = 'modern' | 'mix' | 'premium' | 'playground';

export function Portfolio() {
  const { mode, lang } = useStore();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<Category>('modern');

  const categories: Category[] = ['modern', 'mix', 'premium', 'playground'];

  // Mock data using the same images for demo, but in real app would use different ones
  const images = {
    modern: [photo1, photo4, photo8, photo9, modernImg],
    mix: [photo3, photo5, photo6, photo7, mixImg],
    premium: [photo2, premiumImg, photo4, photo1], // Reusing some good shots for premium
    playground: [playgroundImg, playgroundImg, playgroundImg, playgroundImg],
  };

  return (
    <section className="py-24 bg-card/30 relative" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.port_h2}</h2>
          <p className="text-muted-foreground text-lg">{t.port_p}</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-card border border-white/5 p-1 rounded-full inline-flex">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeTab === cat
                    ? 'bg-white text-black shadow-lg'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {images[activeTab].map((src, i) => (
              <div 
                key={i} 
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-zoom-in bg-card border border-white/5"
              >
                <img 
                  src={src} 
                  alt={`${activeTab} project ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">{t.contact_geo_v}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
