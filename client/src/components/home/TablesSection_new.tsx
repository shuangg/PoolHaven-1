import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TablesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }
    }),
  };

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

  const tables = [
    {
      type: "American Pool Tables",
      count: 8,
      details: [
        {
          name: "Supreme Pro 9ft Tables",
          description: "Tournament-standard tables with professional cloth"
        },
        {
          name: "Aramith Pro Balls",
          description: "The highest quality Belgian balls for perfect play"
        },
        {
          name: "Premium Lighting",
          description: "Shadow-free LED lighting for perfect visibility"
        },
        {
          name: "Ample Space",
          description: "Well-spaced tables for comfortable play"
        }
      ],
      image: "https://images.unsplash.com/photo-1576767695773-aa7854c50fdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1260&q=80"
    },
    {
      type: "Championship Snooker Table",
      count: 1,
      details: [
        {
          name: "Riley 12ft Championship Table",
          description: "Full-size professional standard snooker table"
        },
        {
          name: "Strachan 6811 Tournament Cloth",
          description: "The same cloth used in professional tournaments"
        },
        {
          name: "Aramith Tournament Balls",
          description: "Competition-grade snooker ball set"
        },
        {
          name: "Professional Accessories",
          description: "Full range of cues, rests, and extensions available"
        }
      ],
      image: "https://images.unsplash.com/photo-1603145730162-59051171dd88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1260&q=80"
    }
  ];

  const barServices = [
    {
      icon: "🍸",
      title: "Premium Bar",
      description: "Extensive selection of spirits, craft beers, and signature cocktails"
    },
    {
      icon: "🍔",
      title: "Quality Food",
      description: "Gourmet bar snacks and sharing platters perfect for groups"
    },
    {
      icon: "📺",
      title: "Sports Viewing",
      description: "Multiple screens showing live sports events and tournaments"
    },
    {
      icon: "🎵",
      title: "Weekend DJ",
      description: "Live DJ sets Friday and Saturday nights for a vibrant atmosphere"
    }
  ];

  return (
    <section id="tables" className="py-20 bg-navy section-container">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-serif relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          Our Tables
          <span className="block w-20 h-0.5 bg-yellow-500 mx-auto mt-4"></span>
        </motion.h2>

        {tables.map((table, tableIndex) => (
          <div 
            key={table.type}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${tableIndex > 0 ? 'mt-24' : ''}`}
          >
            {tableIndex % 2 === 0 ? (
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1 + tableIndex}
                  variants={fadeIn}
                  className="order-2 lg:order-1"
                >
                  <h3 className="text-2xl font-semibold text-yellow-500 mb-4 font-serif relative">
                    {table.count} {table.type}
                    <span className="block w-20 h-0.5 bg-yellow-500 mt-4"></span>
                  </h3>

                  <ul className="space-y-4 mt-6">
                    {table.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detail.name} 
                        className="flex items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={tableIndex + detailIndex * 0.2 + 2}
                        variants={fadeIn}
                      >
                        <Check className="text-yellow-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">{detail.name}</h4>
                          <p className="text-gray-300">{detail.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={tableIndex + 4}
                    variants={fadeIn}
                    className="mt-8"
                  >
                    <Button 
                      onClick={scrollToContact}
                      className="bg-yellow-500 hover:bg-yellow-600 text-navy font-bold py-3 px-6 rounded-md transition-all tracking-wide"
                    >
                      BOOK A TABLE
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="order-1 lg:order-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={tableIndex + 2}
                  variants={fadeIn}
                >
                  <img 
                    src={table.image} 
                    alt={table.type} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                    style={{ maxHeight: "500px" }}
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="order-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={tableIndex + 2}
                  variants={fadeIn}
                >
                  <img 
                    src={table.image} 
                    alt={table.type} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                    style={{ maxHeight: "500px" }}
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1 + tableIndex}
                  variants={fadeIn}
                  className="order-2"
                >
                  <h3 className="text-2xl font-semibold text-yellow-500 mb-4 font-serif relative">
                    {table.count} {table.type}
                    <span className="block w-20 h-0.5 bg-yellow-500 mt-4"></span>
                  </h3>

                  <ul className="space-y-4 mt-6">
                    {table.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detail.name} 
                        className="flex items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={tableIndex + detailIndex * 0.2 + 2}
                        variants={fadeIn}
                      >
                        <Check className="text-yellow-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold">{detail.name}</h4>
                          <p className="text-gray-300">{detail.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={tableIndex + 4}
                    variants={fadeIn}
                    className="mt-8"
                  >
                    <Button 
                      onClick={scrollToContact}
                      className="bg-yellow-500 hover:bg-yellow-600 text-navy font-bold py-3 px-6 rounded-md transition-all tracking-wide"
                    >
                      BOOK A TABLE
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        ))}

        <div className="mt-24">
          <motion.h3 
            className="text-2xl font-semibold text-center text-yellow-500 mb-12 font-serif"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            variants={fadeIn}
          >
            Bar & Extras
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-darkGray p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 7}
                variants={fadeIn}
              >
                <div className="text-yellow-500 text-3xl mb-4">{service.icon}</div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 bg-darkGray/30 p-8 rounded-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={11}
          variants={fadeIn}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Table Rates & Bookings</h3>
          <p className="text-gray-300 mb-6">
            Our rates vary depending on day and time. Members receive discounted prices at all times.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-yellow-500 hover:bg-yellow-600 text-navy font-bold py-3 px-6 rounded-md transition-all tracking-wide"
          >
            ENQUIRE ABOUT RATES
          </Button>
        </motion.div>
      </div>
    </section>
  );
}