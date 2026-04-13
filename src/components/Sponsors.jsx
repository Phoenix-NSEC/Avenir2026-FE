import React from 'react';
import { motion } from 'framer-motion';
import { SPONSORS } from '../constants/Sponsor_data';

const SponsorCard = ({ image, name, link, bg, padding }) => {
  const isLink = link && link !== "#";
  const CardContent = (
    <div className={`w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 rounded-lg ${bg || ""} ${padding || ""}`}>
      <img 
        src={image} 
        alt={name} 
        className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,140,0,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,140,0,0.5)] transition-all duration-500"
      />
    </div>
  );

  const baseStyles = "flex-shrink-0 w-36 h-24 sm:w-48 sm:h-32 mx-3 flex flex-col items-center justify-center rounded-xl border border-yellow-500/10 bg-black/20 backdrop-blur-sm group hover:border-yellow-500/40 hover:bg-black/40 transition-all duration-500 p-4 overflow-hidden shadow-lg hover:shadow-yellow-500/10";

  if (isLink) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyles} cursor-pointer`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={`${baseStyles} cursor-default`}>
      {CardContent}
    </div>
  );
};

const Sponsors = () => {
  // Duplicate the list multiple times to ensure a very long seamless loop
  const duplicatedSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="py-20 overflow-hidden relative bg-transparent">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-black text-center uppercase tracking-tighter"
          style={{
            color: "#FF8C00",
            textShadow: "2px 2px 0px #000, 4px 4px 8px rgba(255, 140, 0, 0.3)",
          }}
        >
          Our Sponsors
        </motion.h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full opacity-50"></div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Continuous Slider */}
        <motion.div
          className="flex whitespace-nowrap py-2"
          animate={{
            x: ["0%", "-25%"],
          }}
          transition={{
            duration: 30, // Slightly slower for readability given smaller sizes
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedSponsors.map((sponsor, idx) => (
            <SponsorCard 
              key={`${sponsor.id}-${idx}`} 
              image={sponsor.image} 
              name={sponsor.name} 
              link={sponsor.link} 
              bg={sponsor.bg}
              padding={sponsor.padding}
            />
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
      </div>

      <style>{`
        .group:hover .framer-motion-div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
