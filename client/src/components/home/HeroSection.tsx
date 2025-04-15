import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(18, 24, 33, 0.7), rgba(18, 24, 33, 0.8)), url('https://images.unsplash.com/photo-1608505256560-9224ba550d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          London's Premier <span className="text-gold">Pool & Snooker</span> Club
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Home to 8 tournament-grade pool tables and a championship snooker table. Enjoy our stylish bar, professional service, and vibrant atmosphere.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={() => scrollToSection("tables")}
            className="bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-8 rounded-md transition-all tracking-wide text-lg"
          >
            OUR TABLES
          </Button>
          <Button 
            onClick={() => scrollToSection("membership")}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-6 px-8 rounded-md transition-all tracking-wide text-lg border border-white/30"
          >
            MEMBERSHIP
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-white hover:border-gold hover:text-gold text-white font-bold py-6 px-8 rounded-md transition-all tracking-wide text-lg"
          >
            CONTACT US
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
