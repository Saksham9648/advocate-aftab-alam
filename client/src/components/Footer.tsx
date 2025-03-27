import { motion } from 'framer-motion';

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

  return (
    <footer className="bg-[#0A2463] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif font-bold"
            >
              <span className="text-[#E6AF2E]">J</span>ames <span className="text-[#E6AF2E]">W</span>ilson
            </button>
            <p className="mt-2 text-white/70">Attorney at Law</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button onClick={() => scrollToSection('about')} className="hover:text-[#E6AF2E] transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#E6AF2E] transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#E6AF2E] transition-colors duration-300">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#E6AF2E] transition-colors duration-300">Contact</button>
            <a href="#" className="hover:text-[#E6AF2E] transition-colors duration-300">Privacy Policy</a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} James Wilson Law. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-[#E6AF2E] transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-[#E6AF2E] transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#E6AF2E] transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
