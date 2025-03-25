import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1625046641974-e3894531d2b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      alt: "Championship snooker table"
    },
    {
      src: "https://images.unsplash.com/photo-1625046581800-944b1a3a1d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alt: "American pool table"
    },
    {
      src: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      alt: "Bar area with premium spirits"
    },
    {
      src: "https://images.unsplash.com/photo-1584248142698-82acdf8a8f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "VIP lounge seating"
    },
    {
      src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Tournament in progress"
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Professional cues and accessories"
    }
  ];

  // Additional images that show when "View More" is clicked
  const extraImages = [
    {
      src: "https://images.unsplash.com/photo-1610841764792-a895c0ede71f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Close-up of snooker balls"
    },
    {
      src: "https://images.unsplash.com/photo-1609692043083-e7d2611b4ea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Player taking a shot"
    },
    {
      src: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Cocktail at the bar"
    }
  ];

  const displayedImages = showAll 
    ? [...galleryImages, ...extraImages]
    : galleryImages;

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-20 bg-darkGray">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
          <span className="block w-20 h-0.5 bg-gold mx-auto mt-4"></span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {displayedImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg"
              variants={item}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={() => setShowAll(!showAll)} 
            variant="outline"
            className="bg-transparent hover:bg-gold/10 text-gold border border-gold font-bold py-3 px-8 rounded-md transition-all tracking-wide"
          >
            {showAll ? "SHOW LESS" : "VIEW MORE PHOTOS"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
