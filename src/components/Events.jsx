import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";



// Advanced animation variants


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

const statVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, -2, 2, -2, 0],
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -4,
    boxShadow: "0 15px 40px rgba(250, 204, 21, 0.4)",
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
  tap: {
    scale: 0.92,
    transition: { type: "spring", stiffness: 600, damping: 15 },
  },
};



export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const totalEventCount = events.length;

  const cardRefs = useRef([]);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/events/all`);
        const result = await response.json();
        if (result.success && result.data) {
          setEvents(result.data);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (!events.length) return;

    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => {
        const next = (prev + 1) % events.length;
        animateCardTransition(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [events]);

  const animateCardTransition = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.classList.add("animate-card-entrance");
    setTimeout(() => {
      card.classList.remove("animate-card-entrance");
    }, 1000);
  };

  const changeEvent = (index) => {
    setCurrentEventIndex(index);
    animateCardTransition(index);
  };

  return (
    <div className="min-h-screen text-white relative bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hover:scale-105 transition-all duration-500 cursor-pointer text-[90px] font-black uppercase tracking-wider"
            style={{
              color: "#FF8C00",
              textShadow: `3px 3px 0px #000, 5px 5px 0px #FFA500, 7px 7px 0px #FFD700`,
              WebkitTextStroke: "2px rgba(0,0,0,0.8)",
              transformStyle: "preserve-3d",
              perspective: 800,
            }}
          >
            Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="text-base md:text-lg text-yellow-300 max-w-3xl mx-auto mt-1 font-semibold uppercase tracking-wider"
          >
            Compete. Dominate. Celebrate Victory.
          </motion.p>
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="bg-gradient-to-br from-slate-950 via-black to-slate-900 border-2 border-yellow-500/50 rounded-2xl overflow-hidden backdrop-blur"
          style={{
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(250, 204, 21, 0.3)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-8 border-b-2 border-orange-500/30 grid md:grid-cols-3 gap-6 text-center"
          >
            <motion.div
              variants={statVariants}
              whileHover="hover"
              className="p-4 rounded-xl bg-slate-800/50 border border-yellow-400/20 hover:border-yellow-400/60 transition"
            >
              <h3 className="text-xs text-yellow-300/80 uppercase font-semibold tracking-wide">
                Total Events
              </h3>
              <p className="text-4xl md:text-5xl font-black text-yellow-400 mt-2">
                {totalEventCount}
              </p>
            </motion.div>
            <motion.div
              variants={statVariants}
              whileHover="hover"
              className="p-3 rounded-xl bg-slate-800/50 border border-orange-500/20 hover:border-orange-500/60 transition"
            >
              <h3 className="text-xs text-orange-300/80 uppercase font-semibold tracking-wide">
                Registration
              </h3>
              <p className="text-4xl md:text-5xl font-black text-orange-400 mt-2">
                OPEN
              </p>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileTap="tap"
              className="inline-block"
            >
              <Link
                to="/events"
                className="hover:scale-110 transition-all duration-500 inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 px-4 md:px-8 py-4 font-black uppercase tracking-wider text-black rounded-xl border-2 border-black text-base md:text-lg mt-5"
              >
                Explore Events →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Event Carousel */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-yellow-300">Loading events...</p>
          </motion.div>
        ) : events.length > 0 ? (
          <>
            {/* Current Event Display */}
            <motion.div
              key={events[currentEventIndex]?.eventId}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-gradient-to-br from-slate-950 via-slate-900 to-black border-2 border-orange-500/50 rounded-2xl overflow-hidden backdrop-blur"
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 140, 0, 0.3)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Event Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden border-2 border-yellow-400/30"
                >
                  <img
                    src={events[currentEventIndex]?.posterUrl || "https://via.placeholder.com/400x600?text=Event"}
                    alt={events[currentEventIndex]?.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Event Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-black text-orange-400 mb-4 uppercase"
                    >
                      {events[currentEventIndex]?.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-yellow-300 text-lg mb-6"
                    >
                      {events[currentEventIndex]?.description}
                    </motion.p>

                    {/* Event Info Grid */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-4 mb-8"
                    >
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-400/20">
                        <p className="text-xs text-yellow-300/80 uppercase font-semibold mb-2">
                          Registration Fee
                        </p>
                        <p className="text-2xl font-black text-yellow-400">
                          ₹{events[currentEventIndex]?.registrationFee || "N/A"}
                        </p>
                      </div>

                      <div className="bg-slate-800/50 p-4 rounded-lg border border-orange-500/20">
                        <p className="text-xs text-orange-300/80 uppercase font-semibold mb-2">
                          Event Date
                        </p>
                        <p className="text-sm font-black text-orange-400">
                          {events[currentEventIndex]?.date
                            ? new Date(events[currentEventIndex].date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })
                            : "TBA"}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Register Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <Link
                      to="/events"
                      className="flex-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 px-6 py-3 font-black uppercase tracking-wider text-black rounded-xl border-2 border-black text-center hover:scale-105 transition-all duration-300"
                    >
                      Register Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Carousel Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="flex justify-center gap-2 mt-10 flex-wrap"
            >
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => changeEvent(index)}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 25px rgba(250, 204, 21, 0.8)",
                  }}
                  whileTap={{ scale: 0.85 }}
                  animate={
                    index === currentEventIndex
                      ? {
                          backgroundColor: "#FCD34D",
                          boxShadow: "0 0 30px rgba(250, 204, 21, 0.9)",
                          scale: 1.2,
                        }
                      : {
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          boxShadow: "0 0 0px transparent",
                          scale: 1,
                        }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-3 h-3 border-2 border-yellow-400 rounded-full"
                />
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-yellow-300">No events available</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
