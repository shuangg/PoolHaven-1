import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ServicesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }
    }),
  };

  const services = [
    {
      title: "Snooker & Pool Facilities",
      items: [
        {
          name: "10 Championship Snooker Tables",
          description: "Professional standard tables maintained daily"
        },
        {
          name: "8 American Pool Tables",
          description: "9ft Brunswick tables with premium felt"
        },
        {
          name: "Professional Lighting",
          description: "Specialized non-glare lighting over each table"
        },
        {
          name: "Equipment Hire",
          description: "High-quality cues, rests, and extensions available"
        }
      ]
    },
    {
      title: "Bar & Lounge",
      items: [
        {
          name: "Full-Service Bar",
          description: "Premium spirits, craft beers, and signature cocktails"
        },
        {
          name: "Gourmet Snacks",
          description: "Selection of quality bar food and sharing platters"
        },
        {
          name: "Comfortable Seating",
          description: "Luxurious lounge area with viewing screens"
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: "🧑‍🏫",
      title: "Coaching Sessions",
      description: "One-on-one training with professional players"
    },
    {
      icon: "🏆",
      title: "Tournaments",
      description: "Regular competitions for all skill levels"
    },
    {
      icon: "🥂",
      title: "Private Events",
      description: "Venue hire for special occasions"
    },
    {
      icon: "🛒",
      title: "Pro Shop",
      description: "Quality cues, cases, and accessories"
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          Our Services
          <span className="block w-20 h-0.5 bg-gold mx-auto mt-4"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            {services.map((service, serviceIndex) => (
              <div key={service.title} className="mb-12">
                <h3 className="text-2xl font-semibold text-gold mb-6 font-serif relative">
                  {service.title}
                  <span className="block w-20 h-0.5 bg-gold mt-4"></span>
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item.name} 
                      className="flex items-start"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={serviceIndex + itemIndex * 0.2 + 2}
                      variants={fadeIn}
                    >
                      <Check className="text-gold mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1599101740909-557847214cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                alt="Championship snooker table" 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1625046634768-0a3d0b0ea5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Elite Cue Club bar area" 
                className="rounded-lg shadow-xl w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-6 mt-10 sm:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1538913173388-40f84b5ed463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Elegant lounge seating" 
                className="rounded-lg shadow-xl w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1546069901-d5aeb388abd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                alt="Gourmet snacks" 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <motion.h3 
            className="text-2xl font-semibold text-center text-gold mb-12 font-serif"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeIn}
          >
            Additional Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-darkGray p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 5}
                variants={fadeIn}
              >
                <div className="text-gold text-3xl mb-4">{service.icon}</div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
