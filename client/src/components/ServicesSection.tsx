import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ServiceCard from './ServiceCard';

interface ServicesSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const services = [
  {
    icon: "fas fa-building",
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes, from formation to complex transactions and compliance.",
    items: [
      "Business Formation & Structuring",
      "Contract Drafting & Negotiation",
      "Mergers & Acquisitions",
      "Corporate Governance"
    ]
  },
  {
    icon: "fas fa-gavel",
    title: "Litigation",
    description: "Strategic representation in court proceedings with a proven track record of successful outcomes for clients.",
    items: [
      "Civil Litigation",
      "Commercial Disputes",
      "Alternative Dispute Resolution",
      "Appellate Advocacy"
    ]
  },
  {
    icon: "fas fa-lightbulb",
    title: "Intellectual Property",
    description: "Protection and enforcement of your intellectual property rights in an increasingly competitive marketplace.",
    items: [
      "Trademark Registration & Protection",
      "Copyright Law",
      "IP Licensing & Transactions",
      "IP Litigation & Enforcement"
    ]
  },
  {
    icon: "fas fa-home",
    title: "Real Estate Law",
    description: "Comprehensive legal guidance for all aspects of real estate transactions and property law matters.",
    items: [
      "Residential & Commercial Transactions",
      "Lease Agreements",
      "Property Disputes",
      "Zoning & Land Use"
    ]
  },
  {
    icon: "fas fa-file-contract",
    title: "Estate Planning",
    description: "Personalized estate planning solutions to protect your assets and provide for your loved ones.",
    items: [
      "Wills & Trusts",
      "Power of Attorney",
      "Probate Administration",
      "Asset Protection Strategies"
    ]
  },
  {
    icon: "fas fa-balance-scale",
    title: "Employment Law",
    description: "Expert guidance on employment matters for both employers and employees in today's complex legal landscape.",
    items: [
      "Employment Contracts",
      "Workplace Discrimination",
      "Wrongful Termination",
      "HR Policy Development"
    ]
  }
];

const ServicesSection = ({ registerSection }: ServicesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('services', sectionRef.current);
  }, [registerSection]);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Legal <span className="text-[#E6AF2E]">Services</span></h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            I offer comprehensive legal services tailored to meet your specific needs. My expertise spans across multiple practice areas, ensuring you receive exceptional representation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-block bg-[#0A2463] hover:bg-[#0A2463]/90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            Discuss Your Legal Needs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
