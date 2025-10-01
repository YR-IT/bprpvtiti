import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  BookOpen, 
  Target, 
  Eye, 
  Heart,
  Calendar,
  MapPin,
  GraduationCap,
  Building,
  Star,
  Trophy,
  Briefcase
} from "lucide-react";

const About: React.FC = () => {
  const milestones = [
    { year: "2007", event: "BPR ITI Established", description: "Founded by The Pushkar Educational Trust" },
    { year: "2008", event: "NCVT Affiliation", description: "Received official recognition and affiliation" },
    { year: "2010", event: "First Batch Graduation", description: "Successfully graduated our first batch of students" },
    { year: "2015", event: "Infrastructure Expansion", description: "Added modern workshops and laboratories" },
    { year: "2020", event: "Digital Learning", description: "Introduced e-learning platforms and digital resources" },
    { year: "2023", event: "Excellence Award", description: "Recognized as one of the best ITIs in Haryana" }
  ];

  const achievements = [
    { icon: Users, number: "1200+", label: "Graduates", color: "text-blue-600" },
    { icon: GraduationCap, number: "500+", label: "Current Students", color: "text-green-600" },
    { icon: Trophy, number: "15+", label: "Years of Excellence", color: "text-purple-600" },
    { icon: Briefcase, number: "95%", label: "Placement Rate", color: "text-orange-600" }
  ];

  const facilities = [
    {
      title: "Modern Workshops",
      description: "State-of-the-art workshops equipped with latest tools and machinery for hands-on training.",
      icon: Building
    },
    {
      title: "Expert Faculty",
      description: "Experienced instructors with industry expertise and dedication to student success.",
      icon: Users
    },
    {
      title: "Digital Learning",
      description: "E-learning platforms and digital resources for comprehensive education.",
      icon: BookOpen
    },
    {
      title: "Industry Partnerships",
      description: "Strong connections with leading companies for internships and job placements.",
      icon: Briefcase
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching to student support."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical conduct in all our activities."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working together to achieve common goals and support each other's growth."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We embrace new technologies and teaching methods to enhance learning experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-32 md:mt-40 text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 64, 175, 0.75), rgba(126, 34, 206, 0.7)), url('/images/img1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative container mx-auto px-6 md:px-12 lg:px-20 w-full min-h-[60vh] py-16 md:py-24 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/20">
              About BPR ITI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shaping Tomorrow's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Technical Leaders
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Since 2007, we've been committed to providing quality technical education and empowering students with skills that matter in today's competitive world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="#story" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 hover:shadow-lg">Our Story</a>
              <a href="/admission" className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-full font-semibold">Apply Now</a>
            </div>
          </motion.div>
        </div>
        <svg className="block w-full text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" opacity="0.96" d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,117.3C672,128,768,128,864,128C960,128,1056,128,1152,122.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A Legacy of Excellence in Technical Education
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2007 by <strong>The Pushkar Educational Trust</strong>, BPR Private ITI Masana 
                  has been a beacon of technical education in Kurukshetra, Haryana. Our journey began with 
                  a simple yet powerful vision: to bridge the gap between traditional education and 
                  industry requirements.
                </p>
                <p>
                  Located strategically near Mannat Haveli, G.T. Road, Shahbad, Kurukshetra, we have 
                  grown from a small institution to one of the most respected ITIs in the region. 
                  Our commitment to quality education and practical training has helped thousands of 
                  students build successful careers.
                </p>
                <p>
                  With <strong>NCVT affiliation</strong> and approval from the Skill Development & 
                  Industrial Training Department, Haryana, we ensure that our students receive 
                  nationally recognized certifications that open doors to opportunities across India.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Kurukshetra, Haryana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Established 2007</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/1.jpeg" 
                  alt="Campus View 1" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="/2.jpeg" 
                  alt="Campus View 2" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
                />
                <img 
                  src="/3.jpeg" 
                  alt="Campus View 3" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover -mt-8"
                />
                <img 
                  src="/5.jpeg" 
                  alt="Campus View 4" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our core values and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technical education institution in North India, recognized for 
                excellence in skill development, innovation in teaching methodologies, and 
                producing industry-ready professionals who contribute meaningfully to society 
                and the nation's economic growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality technical education and practical training that empowers 
                students with industry-relevant skills, fosters innovation and entrepreneurship, 
                and prepares them to meet the challenges of a rapidly evolving technological 
                landscape while maintaining the highest standards of ethics and professionalism.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our path to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have built their careers with us. 
              Your future in technical excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/admission"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
