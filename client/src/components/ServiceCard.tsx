import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  delay: number;
}

const ServiceCard = ({ icon, title, description, items, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-[#0A2463] h-2"></div>
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-[#0A2463]/10 flex items-center justify-center mb-6 mx-auto">
          <i className={`${icon} text-[#0A2463] text-2xl`}></i>
        </div>
        <h3 className="text-xl font-serif font-bold text-center mb-4">{title}</h3>
        <p className="text-center mb-6">
          {description}
        </p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-[#E6AF2E] mt-1 mr-2"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
