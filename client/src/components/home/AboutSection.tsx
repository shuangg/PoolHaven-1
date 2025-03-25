import { motion } from "framer-motion";
import { Trophy, GlassWater } from "lucide-react";

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
    <section id="about" className="py-20 bg-darkGray">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          About Elite Cue Club
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
              A Premium Venue for Snooker Enthusiasts
              <span className="block w-20 h-0.5 bg-gold mt-4"></span>
            </h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Founded in 2015, Elite Cue Club has established itself as the premier destination for snooker and pool enthusiasts. Our club combines professional-grade playing facilities with an elegant, comfortable atmosphere.
            </p>
            <p className="text-gray-200 mb-4 leading-relaxed">
              We pride ourselves on maintaining championship-standard tables, offering expert coaching, and providing a sophisticated social space where players of all levels can enjoy their favorite games.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Professional Tables</h4>
                  <p className="text-gray-300 text-sm">Tournament-grade equipment</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <GlassWater className="h-6 w-6 text-navy" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Full-Service Bar</h4>
                  <p className="text-gray-300 text-sm">Premium drinks & cocktails</p>
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
              src="https://images.unsplash.com/photo-1617969583865-936913352895?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
              alt="Elite Cue Club interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              style={{ maxHeight: "500px" }}
            />
            <div className="absolute -bottom-5 -left-5 bg-navy p-4 rounded shadow-lg hidden md:block">
              <p className="text-gold font-bold text-lg">ESTABLISHED 2015</p>
              <p className="text-white text-sm">Serving the community for {new Date().getFullYear() - 2015} years</p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: "🌟",
              title: "Premium Experience",
              description: "Immerse yourself in our meticulously designed space featuring professional lighting, climate control, and ergonomic seating."
            },
            {
              icon: "👥",
              title: "Vibrant Community",
              description: "Join our diverse community of players, from beginners to professionals, and participate in regular tournaments and social events."
            },
            {
              icon: "🏆",
              title: "Expert Coaching",
              description: "Improve your skills with guidance from our professional coaches who provide personalized lessons for players of all levels."
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
