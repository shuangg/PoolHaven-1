import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-navy/95 shadow-md" : ""}`}>
      <nav className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white font-serif">
          <span className="text-gold">Elite</span> Cue Club
        </Link>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-navy w-64 border-gray-800">
            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="justify-start text-white hover:text-gold hover:bg-transparent"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
