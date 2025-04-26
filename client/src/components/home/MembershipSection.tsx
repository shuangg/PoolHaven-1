import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function MembershipSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Scroll with offset to account for the fixed header
      const headerOffset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const membershipPlans = [
    {
      name: "Bronze",
      price: "£35",
      period: "/month",
      features: [
        "Discounted table rates",
        "Free equipment hire",
        "Access to club tournaments",
        "Member-only events"
      ],
      popular: false,
      color: "bronze"
    },
    {
      name: "Silver",
      price: "£65",
      period: "/month",
      features: [
        "All Bronze benefits",
        "Priority table booking",
        "10% off drinks at the bar",
        "One free hourly coaching session",
        "Guest passes (2 per month)"
      ],
      popular: false,
      color: "silver"
    },
    {
      name: "Gold",
      price: "£99",
      period: "/month",
      features: [
        "All Silver benefits",
        "Unlimited table time on weekdays",
        "25% off drinks at the bar",
        "Free entry to all tournaments",
        "Exclusive members lounge access"
      ],
      popular: false,
      color: "gold"
    }
  ];

  const payAsYouPlayRates = [
    { name: "Pool Table", price: "£9", period: "/hour" },
    { name: "Snooker Table", price: "£12", period: "/hour" },
    { name: "Happy Hour Pool", price: "£7", period: "/hour" },
    { name: "Equipment Hire", price: "£3", period: "/session" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <section id="membership" className="py-20 bg-navy section-container">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          Membership
          <span className="block w-20 h-0.5 bg-yellow-500 mx-auto mt-4"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`bg-darkGray rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2 ${plan.popular ? 'md:transform md:scale-105 z-10' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeInUp}
            >
              <div className={`${
                plan.color === 'gold' 
                  ? 'bg-yellow-500 text-navy' 
                  : plan.color === 'silver' 
                    ? 'bg-gray-300 text-navy' 
                    : 'bg-amber-700 text-white'
                } text-center py-4 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold font-serif">{plan.name}</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-white text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-yellow-500 mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.color === 'gold' 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-navy' 
                      : plan.color === 'silver'
                        ? 'bg-gray-300 hover:bg-gray-400 text-navy'
                        : 'bg-amber-700 hover:bg-amber-800 text-white'
                  } font-bold py-3 rounded-md transition-all tracking-wide`}
                >
                  JOIN NOW
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-darkGray/50 p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-yellow-500 mb-6 font-serif text-center">Pay-As-You-Play Rates</h3>
          <p className="text-center text-gray-300 mb-8">
            Not ready for membership? Enjoy our premium tables on a casual basis with our competitive rates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {payAsYouPlayRates.map((rate, index) => (
              <motion.div 
                key={rate.name}
                className="bg-navy p-6 rounded-lg text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 6}
                variants={fadeInUp}
              >
                <h4 className="text-white font-semibold mb-2">{rate.name}</h4>
                <p className="text-yellow-500 text-2xl font-bold">{rate.price}<span className="text-sm text-gray-300">{rate.period}</span></p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={10}
            variants={fadeInUp}
          >
            <Button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-navy font-bold py-3 px-6 rounded-md transition-all tracking-wide"
            >
              BOOK A TABLE
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
