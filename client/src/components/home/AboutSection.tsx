import { motion } from "framer-motion";
import { Trophy, GlassWater, Clock, Music } from "lucide-react";

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 }
    }),
  };

  return (
    <section id="about" className="py-20 bg-darkGray section-container">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          About QClub147
          <span className="block w-20 h-0.5 bg-gold mx-auto mt-4"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-gold mb-6 font-serif relative">
              London's Finest Cue Sports Venue
              <span className="block w-20 h-0.5 bg-gold mt-4"></span>
            </h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Established in 2018, QClub147 has quickly become the go-to destination for pool and snooker enthusiasts in London. Our modern venue combines sporting excellence with a vibrant social atmosphere.
            </p>
            <p className="text-gray-200 mb-4 leading-relaxed">
              With 8 competition-standard American pool tables and a championship snooker table, we cater to casual players and serious competitors alike. Our stylish bar area serves a range of premium drinks and quality food in a relaxed, welcoming environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Premium Tables</h4>
                  <p className="text-gray-300 text-sm">Tournament-grade equipment</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <GlassWater className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Stylish Bar</h4>
                  <p className="text-gray-300 text-sm">Craft beers & cocktails</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Late Opening</h4>
                  <p className="text-gray-300 text-sm">Open until 2AM weekends</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Music className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Relaxed Vibe</h4>
                  <p className="text-gray-300 text-sm">Great music & atmosphere</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1610641818989-bcd0bd756744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="QClub147 interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              style={{ maxHeight: "500px" }}
            />
            <div className="absolute -bottom-5 -left-5 bg-navy p-4 rounded shadow-lg hidden md:block">
              <p className="text-gold font-bold text-lg">ESTABLISHED 2018</p>
              <p className="text-white text-sm">Serving London for {new Date().getFullYear() - 2018} years</p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: "🎱",
              title: "Play",
              description: "Whether you're playing pool with friends or practicing your snooker skills, our venue offers the perfect setting for cue sports lovers."
            },
            {
              icon: "🍹",
              title: "Drink",
              description: "Our well-stocked bar features an extensive selection of premium spirits, craft beers, and signature cocktails to enjoy during your visit."
            },
            {
              icon: "🎭",
              title: "Socialize",
              description: "More than just a pool hall, QClub147 is a social hub where you can meet new people, join tournaments, and enjoy special events."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-navy p-8 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 3}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 text-2xl">
                <span className="text-navy">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-serif">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
