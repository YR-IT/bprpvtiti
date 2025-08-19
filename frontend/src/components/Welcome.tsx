// Welcome.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/5.jpeg"];

function Welcome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="welcome"
      className="relative py-16 px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
            Welcome to
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
            BPR PRIVATE ITI MASANA
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2007 by The Pushkar Educational Trust, BPR
            Pvt. I.T.I Masana, located in Kurukshetra, Haryana, is dedicated to
            providing high-quality technical education and skill development. Our
            mission is to empower students to embrace change, learn from
            failures, and build a prosperous future through modern education and
            traditional values.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With a skilled faculty, practical training, and strong industry
            connections, we prepare students to excel in their careers.
            Affiliated with NCVT and approved by the Skill Development &
            Industrial Training Department, Haryana, BPR is committed to
            fostering both technical expertise and personal growth.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline mb-6 inline-block"
          >
            Read more
          </a>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md transition">
              👁️ Our Vision
            </button>
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg shadow-md transition">
              🎯 Mission
            </button>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg shadow-md transition">
              👥 Know More
            </button>
          </div>
        </motion.div>

        {/* Right Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl border-4 border-blue-100"
        >
          <motion.img
            key={current} 
            src={images[current]}
            alt="Welcome carousel"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Welcome;
