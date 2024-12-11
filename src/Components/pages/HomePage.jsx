import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "./Footer";
import ClinicsCarousel from "./ClinicsCarousel"; // Ensure the path is correct
import Slider from "./Slider"; // Import the Slider component
import emergencyImage from './Images/emergency.jpeg';
import cardiologyImage from './Images/cardiology.jpeg';
import paedImage from './Images/paed4.jpeg';
import gynaeImage from './Images/gynae1.jpg';
import orthoImage from './Images/ortho1.jpeg';
import dentalImage from './Images/dental1.jpg';
import WhatsappIcon from "./WhatsappIcon";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <div className="flex flex-col pt-20"> {/* Add pt-20 to ensure content is below fixed header */}
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg max-w-xs relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white font-bold text-lg focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-2">Welcome!</h2>
            <p className="text-sm">
              Welcome to The Veteran Mission Hospitals. Your health is our mission. Discover our services and make an appointment today.
            </p>
          </div>
        </div>
      )}

      {/* Slider Section */}
      <section className="relative mt-1">
        <Slider />
        {/* Overlay for text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white z-10 text-center p-4"> {/* Centered content */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              QUALITY HEALTHCARE DEFINED
            </h1>
            <br />
            <h2 className="text-2xl font-regular mt-8">
              We have hospitals, then we have <span className="font-bold">THE VETERAN MISSION HOSPITALS <br /> </span>
            </h2>
            <br />
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-6"> {/* Adjusted spacing and centering */}
              <a
                href="#services"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded"
              >
                Our Services
              </a>
              <a
                href="BookAppointment"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Carousel Section */}
      <section className="py-16 bg-gray-100">
        <ClinicsCarousel />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            {/* ... (Repeat for each service card) */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default HomePage;
