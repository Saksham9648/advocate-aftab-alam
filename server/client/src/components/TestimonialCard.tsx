import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  delay: number;
  image: string;
}

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="text-[#E6AF2E] mt-4" aria-label={`Rating: ${rating} out of 5`}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="inline-block" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="inline-block" />}
    </div>
  );
};

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  rating, 
  delay,
  image 
}: TestimonialCardProps) => {
  const validatedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="text-[#E6AF2E] text-4xl absolute -top-5 left-6">
        <FaQuoteLeft aria-hidden="true" />
      </div>
      <div className="pt-4">
        <blockquote className="mb-6 italic text-gray-700">
          {quote}
        </blockquote>
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
            {/* Regular img tag since we're using online images */}
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
        <RatingStars rating={validatedRating} />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
