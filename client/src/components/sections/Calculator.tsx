import { useState, useEffect } from "react";
import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export function Calculator() {
  const { mode, lang } = useStore();
  const t = translations[lang];

  const [area, setArea] = useState<number | string>("");
  const [base, setBase] = useState<number>(1.0);
  const [curb, setCurb] = useState<number | string>("");
  const [manholes, setManholes] = useState<number | string>("");
  const [total, setTotal] = useState<number | null>(null);

  const calculate = () => {
    const a = Number(area) || 0;
    const c = Number(curb) || 0;
    const m = Number(manholes) || 0;

    // Base price per m2 starts at 400. 
    // Multiplier affects the complexity/materials.
    const basePrice = 400 * base;
    
    const costPaving = a * basePrice;
    const costCurb = c * 180;
    const costManholes = m * 1500;

    setTotal(costPaving + costCurb + costManholes);
  };

  return (
    <section className="py-24 bg-background relative" id="calc">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.calc_h2}</h2>
          <p className="text-muted-foreground text-lg">{t.calc_p}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inputs Panel */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-xl">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t.calc_area}</label>
                <input
                  type="number"
                  min="0"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="60"
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t.calc_base}</label>
                <select
                  value={base}
                  onChange={(e) => setBase(Number(e.target.value))}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors appearance-none"
                >
                  <option value="1.00">{t.base1}</option>
                  <option value="1.25">{t.base2}</option>
                  <option value="1.55">{t.base3}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">{t.calc_curb}</label>
                  <input
                    type="number"
                    min="0"
                    value={curb}
                    onChange={(e) => setCurb(e.target.value)}
                    placeholder="20"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">{t.calc_manhole}</label>
                  <input
                    type="number"
                    min="0"
                    value={manholes}
                    onChange={(e) => setManholes(e.target.value)}
                    placeholder="2"
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary/50 outline-none transition-colors"
                  />
                </div>
              </div>

              <Button 
                onClick={calculate}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-lg mt-2 text-lg"
              >
                <CalcIcon className="w-5 h-5 mr-2" />
                {t.calc_btn}
              </Button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-card/50 border border-white/5 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            {total !== null ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10"
              >
                <div className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Estimated Total</div>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                  <span className="text-primary">≈</span> {total.toLocaleString()} <span className="text-2xl text-muted-foreground font-sans font-normal">UAH</span>
                </div>
                <p className="text-muted-foreground max-w-xs mx-auto mt-6 text-sm">
                  {t.calc_hint_d}
                </p>
                <Button variant="ghost" size="sm" onClick={() => setTotal(null)} className="mt-8 text-muted-foreground hover:text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </motion.div>
            ) : (
              <div className="relative z-10 opacity-50">
                <CalcIcon className="w-16 h-16 mx-auto mb-6 text-white/20" />
                <h3 className="text-xl font-bold text-white mb-2">{t.calc_hint_t}</h3>
                <p className="text-sm text-muted-foreground">{t.calc_hint_d}</p>
              </div>
            )}
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
