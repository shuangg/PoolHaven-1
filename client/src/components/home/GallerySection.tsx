import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1611275484845-52a972d02551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "American pool tables"
    },
    {
      src: "https://images.unsplash.com/photo-1609788063371-f31a71edf71f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Championship snooker table"
    },
    {
      src: "https://images.unsplash.com/photo-1571100030164-80d05219a570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Club atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Stylish bar area"
    },
    {
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Professional pool player"
    },
    {
      src: "https://images.unsplash.com/photo-1598899246709-c8273815f3ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Premium cocktails"
    }
  ];

  // Additional images that show when "View More" is clicked
  const extraImages = [
    {
      src: "https://images.unsplash.com/photo-1610841763883-cf7e9d522614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      alt: "Pool table setup"
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
      alt: "Premium cues"
    },
    {
      src: "https://images.unsplash.com/photo-1529567186287-3e17bdefa342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "DJ night atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1528495612343-9ca9f4a9f67c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Weekend social events"
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
          Gallery
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
              className="overflow-hidden rounded-lg shadow-lg group"
              variants={item}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.alt}</p>
                </div>
              </div>
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
