import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface ContactSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const ContactSection = ({ registerSection }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('contact', sectionRef.current);
  }, [registerSection]);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-[#E6AF2E]">Location</span></h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Visit us at our office in Lucknow for a consultation
          </p>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl border-2 border-[#E6AF2E]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.143168051921!2d80.9971883150445!3d26.89802898313407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b5a8b6f4a1%3A0x8a3b6c6b1a3b3b1a!2sLaw%20Office%20Of%20Aftab%20Alam%20Ansari%20Advocate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Office Location Map"
          ></iframe>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <strong>Address:</strong> Law Office Of Aftab Alam Ansari Advocate, 
            Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
