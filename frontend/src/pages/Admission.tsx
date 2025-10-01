import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  FileText, 
  Users, 
  Award, 
  CheckCircle, 
  Download,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Admission: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    category: '',
    address: '',
    qualification: '',
    course: '',
    fatherName: '',
    motherName: '',
    guardianPhone: ''
  });

  const courses = [
    {
      name: 'Electrician',
      duration: '2 Years',
      eligibility: '10th Pass',
      seats: 20,
      fee: '₹15,000/year',
      description: 'Learn electrical installations, maintenance, and safety protocols'
    },
    {
      name: 'Fitter',
      duration: '2 Years', 
      eligibility: '10th Pass',
      seats: 24,
      fee: '₹15,000/year',
      description: 'Master mechanical fitting, assembly, and precision work'
    },
    {
      name: 'Welder',
      duration: '1 Year',
      eligibility: '8th Pass',
      seats: 20,
      fee: '₹12,000/year',
      description: 'Professional welding techniques and safety standards'
    },
    {
      name: 'Computer Operator & Programming Assistant',
      duration: '1 Year',
      eligibility: '12th Pass',
      seats: 24,
      fee: '₹18,000/year',
      description: 'Computer operations, programming basics, and office applications'
    },
    {
      name: 'Mechanic Motor Vehicle',
      duration: '2 Years',
      eligibility: '10th Pass',
      seats: 20,
      fee: '₹16,000/year',
      description: 'Automobile maintenance, repair, and diagnostic skills'
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Fill and submit the online application form with required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Verification of educational certificates and other documents',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Merit List',
      description: 'Merit list preparation based on qualifying examination marks',
      icon: Award
    },
    {
      step: 4,
      title: 'Counseling & Admission',
      description: 'Counseling session and final admission confirmation',
      icon: Users
    }
  ];

  const requiredDocuments = [
    '10th/12th Mark Sheet & Certificate',
    'Transfer Certificate',
    'Character Certificate',
    'Caste Certificate (if applicable)',
    'Income Certificate (if applicable)',
    'Passport Size Photographs (6 copies)',
    'Aadhar Card Copy',
    'Medical Certificate'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Store form data in localStorage for the result page
    localStorage.setItem('applicationData', JSON.stringify({
      ...formData,
      applicationId: 'BPR2024' + Math.random().toString().substr(2, 6),
      applicationDate: new Date().toISOString(),
      status: 'approved' // This would normally come from backend
    }));
    
    // Navigate to result page
    navigate('/result');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-32 md:mt-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.7), rgba(21, 128, 61, 0.65)), url('/images/img3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 min-h-[60vh] py-16 md:py-24 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Admissions Open 2024-25
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-2xl mt-4 text-white/90 max-w-2xl"
          >
            Shape your future with quality technical education and hands-on learning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#apply" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Apply Now
            </a>
            <a href="#downloads" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
              Download Prospectus
            </a>
          </motion.div>
        </div>
        <svg className="block w-full text-gray-50" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,117.3C672,128,768,128,864,128C960,128,1056,128,1152,122.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Important Dates</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Application Start', date: '15 June 2024', icon: Calendar },
              { title: 'Last Date to Apply', date: '30 July 2024', icon: Clock },
              { title: 'Merit List', date: '10 August 2024', icon: Award },
              { title: 'Classes Begin', date: '1 September 2024', icon: BookOpen }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg text-center border border-blue-100"
              >
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-blue-600 font-bold">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Available Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eligibility:</span>
                    <span className="font-semibold">{course.eligibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-semibold">{course.seats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fee:</span>
                    <span className="font-semibold text-green-600">{course.fee}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Online Application Form</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Selection *</label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.name}>{course.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
                  <input
                    type="text"
                    name="motherName"
                    required
                    value={formData.motherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Required Documents</h2>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  Download Document Checklist
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Near Mannat Haveli, G.T. Road, Shahbad, Kurukshetra, Haryana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 9996964754</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">bpriti032@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful graduates who started their career at BPR Pvt. I.T.I Masana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
