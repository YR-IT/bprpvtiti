import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function HeroCarousel() {
  const images = [
    {
      url: "/5.jpeg",
      title: "Empowering Skills, Enabling Futures",
      subtitle:
        "BPR Pvt. I.T.I – Best ITI College in Kurukshetra | Skill-Based Technical Education",
    },
    {
      url: "/1.jpeg",
      title: "Learn From Experts",
      subtitle: "Experienced faculty guiding you with hands-on training",
    },
    {
      url: "/3.jpeg",
      title: "Your Career, Our Mission",
      subtitle: "Building strong foundations for a better future",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-[80vh] sm:h-screen w-full flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img.url})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-3xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg mt-32 sm:mt-20"
          key={images[current].title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images[current].title}
        </motion.h1>

        <motion.p
          className="text-base md:text-2xl text-white font-medium"
          key={images[current].subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {images[current].subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export default HeroCarousel;
