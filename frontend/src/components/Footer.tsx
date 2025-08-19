import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b2342] to-[#003c3c] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src="/itilogo.jpg"
            alt="ITI Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm leading-relaxed text-justify">
            BPR Pvt. I.T.I, established in 2011 in Kurukshetra,
            Haryana, is committed to delivering quality technical education
            and skill development for a brighter, job-ready future.
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-red-500 inline-block">
            Main Links
          </h3>
          <ul className="space-y-2 text-base">
            <li><a href="/" className="hover:text-white">› Home</a></li>
            <li><a href="/about" className="hover:text-white">› About Us</a></li>
            <li><a href="/contact" className="hover:text-white">› Contact Us</a></li>
            <li><a href="/gallery" className="hover:text-white">› Gallery</a></li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-red-500 inline-block">
            Academics
          </h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:text-white">› Electrician</a></li>
            <li><a href="#" className="hover:text-white">› Draughtsman (Civil)</a></li>
            <li><a href="#" className="hover:text-white">› Fitter</a></li>
            <li><a href="#" className="hover:text-white">› Welder</a></li>
          </ul>
        </div>

        {/* Student Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-red-500 inline-block">
            Student Section
          </h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:text-white">› Result</a></li>
            <li><a href="#" className="hover:text-white">› Curriculum</a></li>
            <li><a href="#" className="hover:text-white">› Admission Procedure</a></li>
            <li><a href="#" className="hover:text-white">› Academic Facilities</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-2 border-red-500 inline-block">
            Location
          </h3>
          <div className="w-full h-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.3186314248504!2d76.844!3d29.969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4625a6c65a3b%3A0x51b8f028cfa18ac0!2sGyan%20Ganga%20Polytechnic%20%26%20ITI!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="rounded-md border-2 border-gray-300"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Gyan Ganga Pvt. ITI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
