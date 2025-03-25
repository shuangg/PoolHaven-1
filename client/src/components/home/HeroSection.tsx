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
        backgroundImage: "linear-gradient(rgba(18, 24, 33, 0.7), rgba(18, 24, 33, 0.8)), url('https://images.unsplash.com/photo-1625046584920-f4a57353a03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience Premium <span className="text-gold">Snooker & Pool</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Elevate your game in our sophisticated venue featuring professional tables, full-service bar, and exclusive member benefits.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={() => scrollToSection("membership")}
            className="bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-8 rounded-md transition-all tracking-wide text-lg"
          >
            JOIN NOW
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
