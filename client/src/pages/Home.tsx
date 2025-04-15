import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TablesSection } from "@/components/home/TablesSection_new";
import { GallerySection } from "@/components/home/GallerySection";
import { MembershipSection } from "@/components/home/MembershipSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling setup
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  // Update document title
  useEffect(() => {
    document.title = "QClub147 | London's Premier Pool & Snooker Venue";
  }, []);

  return (
    <div className="font-sans bg-navy text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TablesSection />
      <GallerySection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
