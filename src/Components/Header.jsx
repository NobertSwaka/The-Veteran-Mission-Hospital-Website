import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./pages/Images/Hospital Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setHeaderVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-green-600 text-white shadow-md transition-transform duration-300 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      } relative z-10`}
      style={{ height: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Hospital Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 relative items-center">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300"
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300 flex items-center"
              aria-haspopup="true"
              aria-expanded={isAboutDropdownOpen}
            >
              About Us
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isAboutDropdownOpen && (
              <div
                className="absolute left-0 top-full w-48 bg-white text-gray-800 rounded-md shadow-lg z-50 space-y-2 py-2"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link to="/AboutPage" className="block px-4 py-2 hover:bg-gray-100">
                  Get to Know Us
                </Link>
                <Link to="/OurTeam" className="block px-4 py-2 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link to="/Testimonials" className="block px-4 py-2 hover:bg-gray-100">
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300 flex items-center"
              aria-haspopup="true"
              aria-expanded={isServicesDropdownOpen}
            >
              Services
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesDropdownOpen && (
              <div
                className="absolute left-0 top-full w-48 bg-white text-gray-800 rounded-md shadow-lg z-50 space-y-2 py-2"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link to="/EmergencyCare" className="block px-4 py-2 hover:bg-gray-100">
                  Emergency Care
                </Link>
                <Link to="/CardiologyClinic" className="block px-4 py-2 hover:bg-gray-100">
                  Cardiology
                </Link>
                <Link to="/PaediatricClinic" className="block px-4 py-2 hover:bg-gray-100">
                  Pediatrics
                </Link>
                <Link to="/GynaecologyClinic" className="block px-4 py-2 hover:bg-gray-100">
                  Gynaecology
                </Link>
                <Link to="/services/orthopedic" className="block px-4 py-2 hover:bg-gray-100">
                  Orthopedic
                </Link>
                <Link to="/DentalClinic" className="block px-4 py-2 hover:bg-gray-100">
                  Dental Clinic
                </Link>
                <Link to="/SpecializedClinicsTimetable" className="block px-4 py-2 hover:bg-gray-100">
                  Specialized Clinics Timetable
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/doctors"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300"
          >
            Doctors
          </Link>
          <Link
            to="/gallery"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/ContactUs"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition-colors duration-300"
          >
            Contact
          </Link>

          <div className="space-y-2 px-2 pt-2 pb-3">
  <Link
    to="/FAQ"
    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-300"
  >
    FAQ
  </Link>
</div>

        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServicesDropdownOpen(false); // Close dropdowns when menu opens
              setIsAboutDropdownOpen(false);
            }}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden"
          id="mobile-menu"
          onClick={() => setIsMenuOpen(false)} // Close on clicking outside
        >
          <div className="space-y-2 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Add other links here */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
