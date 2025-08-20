import React from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Search,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admission", href: "/admission" },
    { label: "Academic", href: "/academic" },
    { label: "Student Corner", href: "/student-corner" },
    { label: "Media Section", href: "/media" },
    { label: "Information", href: "/information" },
    { label: "E-Learning", href: "/elearning" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-md fixed top-0 z-50 bg-white">
      {/* Top Bar (hidden on mobile) */}
      <div className="bg-blue-900 text-white text-sm px-4 sm:px-20 py-2 hidden md:flex justify-between items-center">
        {/* Left: Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Youtube size={24} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Center Info */}
        <div className="hidden md:flex space-x-6 items-center">
          <span className="bg-blue-700 px-3 py-1 rounded text-xs">
            ITI CODE - PR06000410
          </span>
          <a
            href="mailto:bpriti032@gmail.com"
            className="flex items-center space-x-1"
          >
            <Mail size={14} /> <span>bpriti032@gmail.com</span>
          </a>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white text-black rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-sm outline-none"
          />
          <button className="bg-orange-500 p-2">
            <Search size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-8xl mx-auto px-4 md:px-20 py-3">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left: Logo + Institute Name */}
          <div className="flex items-center space-x-6">
            <img src="/itilogo.jpg" alt="ITI Logo" className="h-16" />
            <div>
              <h1 className="font-extrabold text-blue-900 text-4xl">
                BPR PVT. I.T.I MASANA
              </h1>
              <p className="text-lg text-gray-700 font-semibold">
                Near Mannat Haveli, G.T. Road, Shahbad, Kurukshetra
              </p>
            </div>
          </div>

          {/* Right: Skill India + Contact */}
          <div className="flex items-center space-x-8">
            
            <a
              href="tel:+919068261700"
              className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm"
            >
              <Phone size={16} /> <span>+91 9068261700</span>
            </a>
            <a
              href="mailto:bpriti032@gmail.com"
              className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md text-sm"
            >
              <Mail size={16} /> <span>bpriti032@gmail.com</span>
            </a>
            <img src="/skillogo.png" alt="Skill India" className="h-16" />
          </div>
        </div>

        {/* Mobile Layout */}
<div className="flex md:hidden flex-col items-center w-full">
  {/* Top Row: ITI Logo, Skill Logo, Menu */}
  <div className="flex justify-between items-center w-full px-2">
    {/* Left: ITI Logo */}
    <img src="/itilogo.jpg" alt="ITI Logo" className="h-10" />

    {/* Center: Skill India Logo */}
    <img src="/skillogo.png" alt="Skill India" className="h-10" />

    {/* Right: Mobile Menu Toggle */}
    <button
      className="flex items-center space-x-1 text-blue-900"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Next Row: Institute Name + Address */}
  <div className="w-full text-center mt-2 border-t border-gray-400 pt-2">
    <h1 className="font-extrabold text-blue-900 text-4xl">
      BPR PVT. I.T.I MASANA
    </h1>
    <p className="text-base text-gray-700 font-semibold">
      Near Mannat Haveli, G.T. Road, Shahbad, Kurukshetra
    </p>
  </div>
</div>


        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-blue-900 text-white px-6 py-4 space-y-4 mt-3 rounded-lg shadow-lg">
            <a
              href="tel:+919068261700"
              className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <Phone size={18} /> <span>+91 9068261700</span>
            </a>
            <a
              href="mailto:bpriti032@gmail.com"
              className="flex items-center space-x-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <Mail size={18} /> <span>bpriti032@gmail.com</span>
            </a>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <ul className="hidden md:flex space-x-6 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-orange-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/admissions"
            className="hidden md:block bg-blue-900 px-4 py-2 text-sm rounded"
          >
            Admissions
          </a>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-green-900 px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block hover:text-orange-400 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/admissions"
              className="block bg-blue-900 px-4 py-2 text-center rounded"
            >
              Admissions
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
