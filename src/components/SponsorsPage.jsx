import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { SPONSORS } from '../constants/Sponsor_data';

const bg = "https://res.cloudinary.com/drvbkxnvu/image/upload/v1775193580/ChatGPT_Image_Jan_9_2026_09_51_19_PM_jzyc55.png";

export default function SponsorsPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="fixed inset-0 z-0 bg-black/60" />

      <section className="relative z-10 w-full min-h-screen px-6 py-16 text-white overflow-hidden">
        {/* Back to home button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 165, 0, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent text-orange-400 px-6 py-3 font-bold text-lg text-center rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500/10 transition-all mb-8 backdrop-blur-sm shadow-lg"
          onClick={() => navigate('/')}
        >
          ← BACK TO HOME
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wider text-center mb-16 px-4"
          style={{
            color: "#FF8C00",
            textShadow: `2px 2px 0px #000, 4px 4px 0px #FFA500, 6px 6px 0px #FFD700`,
            WebkitTextStroke: "1px rgba(0,0,0,0.8)",
          }}
        >
          Our Sponsors
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="relative bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-orange-600/40 hover:border-orange-500 transition-all duration-300 shadow-2xl group p-8 flex flex-col items-center"
            >
              {/* Logo Container */}
              <div className="w-full h-48 mb-8 flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 bg-orange-500/5 rounded-xl blur-xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>
                <div className={`w-full h-full flex items-center justify-center relative z-10 rounded-xl ${sponsor.bg || ""} ${sponsor.padding || ""}`}>
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,140,0,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,140,0,0.7)] group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Sponsor Info */}
              <div className="flex-1 w-full text-center flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase group-hover:text-amber-400 transition-colors tracking-tight">
                    {sponsor.name}
                  </h3>
                  <p className="text-orange-500/80 text-xs font-bold uppercase tracking-widest mt-1 animate-pulse">
                    {sponsor.title}
                  </p>
                </div>

                {sponsor.link && sponsor.link !== "#" ? (
                  <motion.a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 30px rgba(255, 140, 0, 0.8)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block w-full px-6 py-4 text-sm md:text-base font-black uppercase tracking-widest rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-black shadow-xl hover:shadow-[0_0_25px_rgba(255,140,0,0.5)] transition-all duration-300 mt-auto"
                  >
                    Visit Website
                  </motion.a>
                ) : (
                  <div className="h-14"></div> // Spacer to maintain consistent card height if needed, or just leave empty
                )}
              </div>

              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-xl" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
