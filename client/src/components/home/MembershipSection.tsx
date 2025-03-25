import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function MembershipSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const membershipPlans = [
    {
      name: "Standard",
      price: "£49",
      period: "/month",
      features: [
        "Unlimited table access",
        "Members-only rates",
        "Entry to club tournaments",
        "Free equipment hire"
      ],
      popular: false,
      color: "gold"
    },
    {
      name: "Premium",
      price: "£79",
      period: "/month",
      features: [
        "All Standard benefits",
        "Priority table booking",
        "Monthly coaching session",
        "Discounted bar prices",
        "Guest passes (2 per month)"
      ],
      popular: true,
      color: "burgundy"
    },
    {
      name: "VIP",
      price: "£129",
      period: "/month",
      features: [
        "All Premium benefits",
        "Exclusive VIP lounge access",
        "Weekly coaching sessions",
        "Private event discounts",
        "Complimentary pro shop items"
      ],
      popular: false,
      color: "gold"
    }
  ];

  const payAsYouPlayRates = [
    { name: "Snooker", price: "£10", period: "/hour" },
    { name: "Pool", price: "£8", period: "/hour" },
    { name: "Equipment Hire", price: "£3", period: "/session" },
    { name: "Coaching", price: "£25", period: "/hour" }
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
    <section id="membership" className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          Membership Plans
          <span className="block w-20 h-0.5 bg-gold mx-auto mt-4"></span>
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
              <div className={`bg-${plan.color === 'gold' ? 'gold text-navy' : 'burgundy text-white'} text-center py-4 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-burgundy text-white text-xs py-1 px-3 rounded-full">
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
                      <Check className="text-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular 
                    ? 'bg-burgundy hover:bg-burgundy/90 text-white' 
                    : 'bg-gold hover:bg-gold/90 text-navy'} font-bold py-3 rounded-md transition-all tracking-wide`}
                >
                  SELECT PLAN
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
          <h3 className="text-2xl font-semibold text-gold mb-6 font-serif text-center">Pay-As-You-Play</h3>
          <p className="text-center text-gray-300 mb-8">
            Not ready for membership? Enjoy our facilities on a casual basis with our competitive hourly rates.
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
                <p className="text-gold text-2xl font-bold">{rate.price}<span className="text-sm text-gray-300">{rate.period}</span></p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
