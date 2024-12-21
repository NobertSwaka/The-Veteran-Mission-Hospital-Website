import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./pages/Images/Hospital Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };
  // Handle header visibility on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHeaderVisible(false); // Hide on scroll down
    } else {
      setHeaderVisible(true); // Show on scroll up
    }
    setLastScrollY(window.scrollY);
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
      } fixed top-0 w-full z-50`}
      style={{ height: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt="Hospital Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
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
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300 flex items-center"
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
              <div className="absolute left-0 top-full w-48 bg-white text-black rounded-md shadow-lg z-50">
                <Link
                  to="/AboutPage"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Get to Know Us
                </Link>
                <Link
                  to="/OurTeam"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Our Team
                </Link>
                <Link
                  to="/Testimonials"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Testimonials
                </Link>

                <Link
                  to="/InsurancePage"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Insurance
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
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300 flex items-center"
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
              <div className="absolute left-0 top-full bg-white text-black rounded-md shadow-lg z-50 p-4 grid grid-cols-2 gap-4 w-96">
                <Link
                  to="/EmergencyCare"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Emergency Care
                </Link>
                <Link
                  to="/CardiologyClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Cardiology
                </Link>
                <Link
                  to="/PaediatricClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Pediatrics
                </Link>
                <Link
                  to="/GynaecologyClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Gynaecology
                </Link>
                <Link
                  to="/OrthopedicClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Orthopedic
                </Link>
                <Link
                  to="/DentalClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Dental Clinic
                </Link>
                <Link
                  to="/MaxillofacialSurgeon"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Maxillofacial Surgery
                </Link>
                <Link
                  to="/GeneralSurgeryClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  General Surgery
                </Link>

                <Link
                  to="/DermatologyClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Dermatology
                </Link>

                <Link
                  to="/ENTClinic"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  ENT Clinic
                </Link>
                <Link
                  to="/SpecializedClinicsTimetable"
                  className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                >
                  Specialized Clinics Timetable
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/doctors"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
          >
            Doctors
          </Link>
          <Link
            to="/gallery"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/ContactUs"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/FAQ"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
          >
            FAQ
          </Link>
        </nav>

{/* Mobile Menu Button */}
<div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none hover:bg-green-700 p-2 rounded-md"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-green-600 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown(setIsAboutDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                >
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <div className="bg-white text-black rounded-md shadow-md mt-2">
                    <Link
                      to="/AboutPage"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Get to Know Us
                    </Link>
                    <Link
                      to="/OurTeam"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/Testimonials"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <div className="bg-white text-black rounded-md shadow-md mt-2">
                    <Link
                      to="/EmergencyCare"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Emergency Care
                    </Link>
                    <Link
                      to="/CardiologyClinic"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Cardiology
                    </Link>
                    <Link
                      to="/PaediatricClinic"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Pediatrics
                    </Link>
                    <Link
                      to="/DentalClinic"
                      className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Dental Clinic
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/doctors"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              >
                Doctors
              </Link>
              <Link
                to="/ContactUs"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
