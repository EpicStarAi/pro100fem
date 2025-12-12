import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Calculator } from "@/components/sections/Calculator";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <div className="relative">
          {/* Decorative divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Calculator />
        </div>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
