import { useLocation } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tables", href: "#tables" },
  { name: "Gallery", href: "#gallery" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export function Footer() {
  const [, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold text-white font-serif mb-6 md:mb-0">
            <span className="text-gold">Q</span>Club<span className="text-gold">147</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-gray-300 mb-6 md:mb-0">
            <p className="mb-2">123 Cue Street, London, EC1A 1BB</p>
            <p className="mb-2">+44 (0) 20 1234 5678</p>
            <p>info@qclub147.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy hover:bg-gold/90 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy hover:bg-gold/90 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy hover:bg-gold/90 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QClub147. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-400 hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
