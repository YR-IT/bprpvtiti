// WhyChooseUs.tsx
import { motion } from "framer-motion";

const features = [
  {
    icon: "⭐",
    title: "Govt. Recognized",
    desc: "Approved under ITI Code PR0600410.",
  },
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "Skilled instructors dedicated to student success.",
  },
  {
    icon: "⚙️",
    title: "Career-Ready Skills",
    desc: "Training aligned with real job opportunities.",
  },
  {
    icon: "🏭",
    title: "Industry-Focused Training",
    desc: "Balanced theory and practical learning.",
  },
  {
    icon: "🏫",
    title: "Modern Infrastructure",
    desc: "Well-equipped labs and workshops.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="relative py-16 px-6 md:px-12 lg:px-20 bg-gray-50"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="inline-block bg-blue-900 text-white text-lg font-semibold px-6 py-2 rounded-md mb-8">
            Why Choose Us?
          </h2>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-3xl">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {f.title}:
                  </h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/5.jpeg" // replace with actual building image path
            alt="Campus"
            className="rounded-2xl shadow-xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
