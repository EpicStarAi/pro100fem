import { useStore } from "@/lib/store";
import { translations } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const { lang } = useStore();
  const t = translations[lang];

  const faqs = [
    { q: t.faq1_q, a: t.faq1_a },
    { q: t.faq2_q, a: t.faq2_a },
    { q: t.faq3_q, a: t.faq3_a },
  ];

  return (
    <section className="py-24 bg-card/30" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t.faq_h2}</h2>
          <p className="text-muted-foreground text-lg">{t.faq_p}</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-white/5 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-lg font-medium py-6 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
