import { motion } from 'framer-motion';
import logoImage from '../assets/logoalam.jpg';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  type FooterLink = 
    | { label: string; section: string; href?: never; }
    | { label: string; href: string; section?: never; };

  type FooterColumn = {
    title: string;
    links: FooterLink[];
  };

  const footerLinks: FooterColumn[] = [
    { 
      title: 'Services',
      links: [
        { label: 'Criminal Law', section: 'services' },
        { label: 'Business Law', section: 'services' },
        { label: 'Family & Marriage Laws', section: 'services' },
        { label: 'Protection Laws', section: 'services' },
        { label: 'Cyber Law', section: 'services' },
        { label: 'Intellectual Property', section: 'services' },
      ]
    },
    {
      title: 'About Us',
      links: [
        { label: 'Our Firm', section: 'about' },
        { label: 'Legal Team', section: 'team' },
        { label: 'Testimonials', section: 'testimonials' },
        { label: 'Clients', section: 'clients' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Legal Articles', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-[#0A2463] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and contact info column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center mb-6 group"
            >
              <div className="mr-3 w-10 h-10 bg-white flex items-center justify-center rounded-md overflow-hidden">
                <img src={logoImage} alt="Advocate Aftab Alam" className="w-full h-full object-contain" />
              </div>
              <div className="text-xl font-serif font-bold text-white group-hover:text-[#E6AF2E] transition-colors duration-300">
                Advocate Aftab Alam
              </div>
            </button>
            
            <p className="mb-8 text-white/80 max-w-md">
              Providing exceptional legal counsel with integrity, expertise, and a commitment to your success for over 10 years in criminal, civil, and family law matters.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-[#E6AF2E] mr-3 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>Law Office Of Aftab Alam Ansari Advocate<br />Lakhimpur Kheri, Uttar Pradesh, India</span>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#E6AF2E] mr-3 mt-1">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span>+91 9005505557 / +91 8299429974</span>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#E6AF2E] mr-3 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>aftabalamanasari1987@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick links */}
          {footerLinks.map((column, idx) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-[#E6AF2E]">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.section ? (
                      <button 
                        onClick={() => scrollToSection(link.section)}
                        className="text-white/80 hover:text-[#E6AF2E] transition-colors duration-300 flex items-center"
                      >
                        <span className="text-[#E6AF2E] mr-2 text-xs">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                        {link.label}
                      </button>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-white/80 hover:text-[#E6AF2E] transition-colors duration-300 flex items-center"
                      >
                        <span className="text-[#E6AF2E] mr-2 text-xs">
                          <i className="fas fa-chevron-right"></i>
                        </span>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Social media links */}
        <motion.div 
          className="border-t border-white/10 pt-8 pb-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 hover:bg-[#E6AF2E]/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              <i className="fab fa-linkedin-in text-[#E6AF2E]"></i>
            </a>
            <a href="#" className="bg-white/10 hover:bg-[#E6AF2E]/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              <i className="fab fa-twitter text-[#E6AF2E]"></i>
            </a>
            <a href="#" className="bg-white/10 hover:bg-[#E6AF2E]/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              <i className="fab fa-facebook-f text-[#E6AF2E]"></i>
            </a>
            <a href="#" className="bg-white/10 hover:bg-[#E6AF2E]/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
              <i className="fab fa-instagram text-[#E6AF2E]"></i>
            </a>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="text-center pt-4 text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Advocate Aftab Alam. All rights reserved.</p>
          <p className="mt-1">
            This website is for informational purposes only. No attorney-client relationship is created by visiting this website.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
