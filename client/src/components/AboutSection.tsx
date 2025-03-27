import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface AboutSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const AboutSection = ({ registerSection }: AboutSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    registerSection('about', sectionRef.current);
  }, [registerSection]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-[#F8F9FA]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About <span className="text-[#E6AF2E]">James Wilson</span></h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#E6AF2E] transform translate-x-4 translate-y-4 rounded-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" 
                alt="James Wilson - Attorney at Law" 
                className="relative z-10 rounded-md shadow-xl w-full object-cover h-96 md:h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#0A2463]">A Dedicated Advocate For Your Legal Needs</h3>
            <p className="mb-6 text-lg">
              With over 15 years of experience, I've established a reputation for providing exceptional legal representation and counsel to individuals and businesses across a wide range of practice areas.
            </p>
            <p className="mb-6 text-lg">
              After graduating with honors from Harvard Law School, I began my career at Johnson & Partners, where I quickly rose to become a partner. My approach combines rigorous legal analysis with a deep commitment to understanding each client's unique circumstances and objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <motion.div 
                className="text-center p-4 border-t-2 border-[#E6AF2E]"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="text-[#E6AF2E] text-3xl mb-2"><i className="fas fa-user-graduate"></i></div>
                <h4 className="text-xl font-bold mb-2">Education</h4>
                <p>Harvard Law School, J.D.<br />Yale University, B.A.</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 border-t-2 border-[#E6AF2E]"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="text-[#E6AF2E] text-3xl mb-2"><i className="fas fa-gavel"></i></div>
                <h4 className="text-xl font-bold mb-2">Experience</h4>
                <p>15+ Years of Practice<br />500+ Cases Handled</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 border-t-2 border-[#E6AF2E]"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <div className="text-[#E6AF2E] text-3xl mb-2"><i className="fas fa-award"></i></div>
                <h4 className="text-xl font-bold mb-2">Recognition</h4>
                <p>Super Lawyers 2018-2023<br />Best Attorneys of America</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
