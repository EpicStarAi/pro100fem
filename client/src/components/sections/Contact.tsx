import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send, MapPin } from "lucide-react";

export function Contact() {
  const { lang } = useStore();
  const t = translations[lang];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.contact_h2}</h2>
          <p className="text-muted-foreground text-lg">{t.contact_p}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8">{t.contact_left_t}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.contact_geo_k}</div>
                  <div className="text-lg font-bold text-white">{t.contact_geo_v}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.contact_phone_k}</div>
                  <a href="tel:+380680387719" className="text-lg font-bold text-white hover:text-primary transition-colors">
                    +380680387719
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email:</div>
                  <a href="mailto:pro100fem@gmail.com" className="text-lg font-bold text-white hover:text-primary transition-colors">
                    pro100fem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Telegram:</div>
                  <a href="https://t.me/PRO100FEM" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-primary transition-colors">
                    @PRO100FEM
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10 pt-10 border-t border-white/5">
              <Button className="flex-1 bg-white text-black hover:bg-white/90 font-bold" onClick={() => window.open('tel:+380680387719')}>
                {t.contact_call}
              </Button>
              <Button className="flex-1 bg-[#2AABEE] hover:bg-[#2AABEE]/90 text-white font-bold" onClick={() => window.open('https://t.me/PRO100FEM')}>
                {t.contact_tg}
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8">{t.contact_form_t}</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t.form_name}</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-colors"
                  placeholder="Alex"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t.form_phone}</label>
                <input 
                  type="tel" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-colors"
                  placeholder="+380..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t.form_msg}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:border-primary/50 outline-none transition-colors resize-none"
                  placeholder="..."
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-lg text-lg">
                {t.form_send}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground/60">
                {t.form_hint}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
