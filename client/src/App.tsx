import { useEffect, useState, useRef } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import DisclaimerPopup from "./components/DisclaimerPopup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({
    hero: null,
    about: null,
    services: null,
    team: null,
    testimonials: null,
    clients: null,
    contact: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (!element) return;
        
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const registerSection = (id: string, ref: HTMLDivElement | null) => {
    if (ref) {
      sectionsRef.current[id] = ref;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-sans antialiased bg-background text-foreground">
        <DisclaimerPopup />
        <Header activeSection={activeSection} />
        
        <HeroSection registerSection={registerSection} />
        <AboutSection registerSection={registerSection} />
        <ServicesSection registerSection={registerSection} />
        <TeamSection registerSection={registerSection} />
        <TestimonialsSection registerSection={registerSection} />
        <ClientsSection registerSection={registerSection} />
        <ContactSection registerSection={registerSection} />
        
        <Footer />
        <ScrollToTop />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
