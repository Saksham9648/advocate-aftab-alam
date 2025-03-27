import { motion } from 'framer-motion';

interface AttorneyCardProps {
  image: string;
  name: string;
  title: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay: number;
}

const AttorneyCard = ({ image, name, title, bio, socialLinks, delay }: AttorneyCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <div className="bg-[#0A2463] h-2"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex space-x-3 mb-2">
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#E6AF2E]/90 flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            )}
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#E6AF2E]/90 flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
            )}
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#E6AF2E]/90 flex items-center justify-center transition-colors duration-300"
              >
                <i className="fas fa-envelope text-white"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-1">{name}</h3>
        <p className="text-[#E6AF2E] font-medium mb-4">{title}</p>
        <p className="text-gray-700 line-clamp-4">{bio}</p>
      </div>
    </motion.div>
  );
};

export default AttorneyCard;