import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";

export function Footer() {
  const { lang } = useStore();
  const t = translations[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/5 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted-foreground text-sm">
          © {year} <span className="font-bold text-white">PRO100FEM</span> — {t.brand_tag.split('•')[0]}
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#top" className="text-muted-foreground hover:text-white transition-colors">
            {t.footer_top}
          </a>
          <a href="mailto:pro100fem@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
            {t.footer_email}
          </a>
          <a href="https://t.me/PRO100FEM" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
