import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/7055234/pexels-photo-7055234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "American pool tables"
    },
    {
      src: "https://images.pexels.com/photos/8939809/pexels-photo-8939809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Championship snooker table"
    },
    {
      src: "https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Club atmosphere"
    },
    {
      src: "https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Stylish bar area"
    },
    {
      src: "https://images.pexels.com/photos/5514532/pexels-photo-5514532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Professional pool player"
    },
    {
      src: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Premium cocktails"
    }
  ];

  // Additional images that show when "View More" is clicked
  const extraImages = [
    {
      src: "https://images.pexels.com/photos/344034/pexels-photo-344034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Pool table setup"
    },
    {
      src: "https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      alt: "Premium cues"
    },
    {
      src: "https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Club DJ nights"
    },
    {
      src: "https://images.pexels.com/photos/4254892/pexels-photo-4254892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Weekend events"
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
    <section id="gallery" className="py-20 bg-darkGray section-container">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
          <span className="block w-20 h-0.5 bg-yellow-500 mx-auto mt-4"></span>
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
            className="bg-transparent hover:bg-yellow-500/10 text-yellow-500 border border-yellow-500 font-bold py-3 px-8 rounded-md transition-all tracking-wide"
          >
            {showAll ? "SHOW LESS" : "VIEW MORE PHOTOS"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
