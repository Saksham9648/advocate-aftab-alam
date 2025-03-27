import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AttorneyCard from './AttorneyCard';

interface TeamSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const attorneys = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "James Wilson",
    title: "Founding Partner",
    bio: "With over 15 years of experience, James has established a reputation for excellence in corporate law and intellectual property. Harvard Law School graduate and recognized by Super Lawyers 2018-2023.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "james@wilsonlaw.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "Sarah Johnson",
    title: "Senior Associate",
    bio: "Sarah specializes in litigation and employment law. With her background in both corporate and non-profit sectors, she brings valuable insights to complex cases. Yale Law School graduate.",
    socialLinks: {
      linkedin: "#",
      email: "sarah@wilsonlaw.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Michael Chen",
    title: "Partner",
    bio: "Michael's expertise in real estate law and estate planning has helped numerous clients protect their assets and secure their futures. Columbia Law School graduate with 10 years of experience.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "michael@wilsonlaw.com"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Alexandra Davis",
    title: "Associate",
    bio: "Alexandra focuses on intellectual property and technology law. Her background in computer science provides her with unique insights into tech-related legal matters. Stanford Law School graduate.",
    socialLinks: {
      linkedin: "#",
      email: "alexandra@wilsonlaw.com"
    }
  }
];

const TeamSection = ({ registerSection }: TeamSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    registerSection('team', sectionRef.current);
  }, [registerSection]);

  return (
    <section
      id="team"
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-[#E6AF2E]">Legal Team</span></h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Meet our experienced attorneys who are dedicated to providing exceptional legal representation and achieving the best outcomes for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <AttorneyCard
              key={index}
              image={attorney.image}
              name={attorney.name}
              title={attorney.title}
              bio={attorney.bio}
              socialLinks={attorney.socialLinks}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;