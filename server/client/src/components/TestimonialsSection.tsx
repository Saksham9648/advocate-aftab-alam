import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image: string;
}

interface TestimonialsSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const testimonials: Testimonial[] = [
  {
    quote: "Hi, I am Roli Mehrotra. My Matrimonial Dispute was resolved by Aftab Sir in 06 Months. Thanks to Aftab Sir 🙏🏻",
    name: "Roli Mehrotra",
    title: "Client",
    rating: 5,
    image: 'https://i.ibb.co/WvZGSXkh/IMG-20250130-WA0040.jpg'
  },
  {
    quote: "Competent lawyer with professional approach to his work and client. My experience with him in a civil suit was quite satisfactory. He understands and adjusts himself for his clients requirements and believes in results.",
    name: "Srikant Verma",
    title: "Client",
    rating: 5,
    image: 'https://i.ibb.co/Lzqr2Qxd/IMG-20250201-WA0001.jpg'
  },
  {
    quote: "Hi, I am Mumtaz. My Civil Dispute Of Arbitration and Conciliation Matter was Resolved By Aftab Sir. Very Thanks to Aftab Sir.",
    name: "Mumtaz",
    title: "Client",
    rating: 5,
    image: 'https://i.ibb.co/dsZTBbWM/IMG-20250130-WA0041.jpg'
  }
];

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

const TestimonialsSection = ({ registerSection }: TestimonialsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('testimonials', sectionRef.current);
  }, [registerSection]);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-[#F8F9FA] relative"
      aria-label="Client testimonials"
      style={{
        backgroundImage: `url('${BG_IMAGE_URL}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-[#0A2463] opacity-95"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Client <span className="text-[#E6AF2E]">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            What clients are saying about their experience working with me on their legal matters.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              {...testimonial}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
