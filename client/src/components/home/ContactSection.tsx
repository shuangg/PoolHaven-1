import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Music } from "lucide-react";

export function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-navy text-xl" />,
      title: "Location",
      details: ["147 Cavendish Street", "Shoreditch, London, E1 6BT"]
    },
    {
      icon: <Phone className="text-navy text-xl" />,
      title: "Phone",
      details: ["+44 (0) 20 7123 4567"]
    },
    {
      icon: <Mail className="text-navy text-xl" />,
      title: "Email",
      details: ["info@qclub147.com"]
    },
    {
      icon: <Clock className="text-navy text-xl" />,
      title: "Opening Hours",
      details: [
        "Monday - Thursday: 2pm - 12am",
        "Friday - Saturday: 12pm - 2am",
        "Sunday: 12pm - 11pm"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Music className="h-5 w-5" />, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-darkGray section-container">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          Contact Us
          <span className="block w-20 h-0.5 bg-gold mx-auto mt-4"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-gold mb-6 font-serif relative">
              Get In Touch
              <span className="block w-20 h-0.5 bg-gold mt-4"></span>
            </h3>
            <p className="text-gray-300 mb-8">
              Have a question or want to book a table? Whether you're planning a night out with friends, organizing a private event, or interested in membership, our team is here to help.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 2}
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={6}
              variants={fadeInUp}
            >
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy hover:bg-gold/90 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            variants={fadeInUp}
          >
            <ContactForm />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-gold mb-6 font-serif text-center">Find Us</h3>
          <div className="h-96 bg-darkGray rounded-lg overflow-hidden">
            <iframe
              title="QClub147 location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4925304725036!2d-0.08048608382827924!3d51.52344677963739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb0444e7bdd%3A0x18ef471c9e621df7!2sShoreditch%2C%20London!5e0!3m2!1sen!2suk!4v1650987654321!5m2!1sen!2suk"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
