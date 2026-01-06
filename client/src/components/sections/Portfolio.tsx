import { useState } from "react";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import modernImg from "@assets/generated_images/modern_driveway_paving.png";
import mixImg from "@assets/generated_images/mixed_color_garden_path_paving.png";
import premiumImg from "@assets/generated_images/premium_luxury_patio_paving.png";
import playgroundImg from "@assets/generated_images/modern_children_playground_paving.png";

// Real photos - original
import photo1 from "@assets/IMG_20251215_132134_691_1765797721276.jpg";
import photo2 from "@assets/IMG_20251215_132135_136_1765797721368.jpg";
import photo3 from "@assets/IMG_20251215_132135_050_1765797721419.jpg";
import photo4 from "@assets/IMG_20251215_132134_394_1765797721465.jpg";
import photo5 from "@assets/IMG_20251215_132135_128_1765797721497.jpg";
import photo6 from "@assets/IMG_20251215_132134_320_1765797721532.jpg";
import photo7 from "@assets/IMG_20251215_132134_284_1765797721564.jpg";
import photo8 from "@assets/IMG_20251215_132134_865_1765797721633.jpg";
import photo9 from "@assets/IMG_20251215_132134_334_1765797721668.jpg";

// New portfolio photos
import newPhoto1 from "@assets/photo_1_2026-01-03_20-58-15_1767660204691.jpg";
import newPhoto14 from "@assets/photo_14_2026-01-03_20-58-16_1767669170839.jpg";
import newPhoto15 from "@assets/photo_15_2026-01-03_19-45-04_1767669170846.jpg";
import newPhoto16 from "@assets/photo_16_2026-01-03_19-45-04_1767669170847.jpg";
import newPhoto17 from "@assets/photo_17_2026-01-03_19-45-04_1767669170849.jpg";
import newPhoto18 from "@assets/photo_18_2026-01-03_19-45-04_1767669170854.jpg";
import newPhoto19 from "@assets/photo_19_2026-01-03_19-45-04_1767669170856.jpg";
import newPhoto20 from "@assets/photo_20_2026-01-03_20-58-16_1767669170856.jpg";
import newPhoto21 from "@assets/photo_21_2026-01-03_19-45-04_1767669170857.jpg";
import newPhoto22 from "@assets/photo_22_2026-01-03_19-45-04_1767669170858.jpg";
import newPhoto23 from "@assets/photo_23_2026-01-03_19-45-04_1767669170859.jpg";
import newPhotoCommercial from "@assets/photo_2026-01-03_13-32-12_1767669170860.jpg";
import newPhoto13 from "@assets/photo_13_2026-01-03_19-45-04_1767669170860.jpg";

type Category = 'modern' | 'mix' | 'premium' | 'playground';

export function Portfolio() {
  const { mode, lang } = useStore();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<Category>('modern');

  const categories: Category[] = ['modern', 'mix', 'premium', 'playground'];

  const images = {
    modern: [newPhoto13, newPhoto14, newPhoto17, newPhoto22, newPhoto23, photo1, photo4, photo8],
    mix: [newPhoto1, newPhoto18, newPhoto19, newPhoto16, photo3, photo5, photo6, photo7],
    premium: [newPhoto15, newPhoto21, newPhoto20, photo2, photo9, newPhotoCommercial],
    playground: [newPhoto1, playgroundImg, photo1, photo4],
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
