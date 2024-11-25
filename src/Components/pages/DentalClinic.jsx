// src/Components/pages/DentalClinic.jsx
import React from "react";
import Footer from "./Footer";

const DentalClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/4c/65/2f/4c652f9c183693a5e778443b3a1fbdce.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Dental Clinic</h1>
          <p className="text-lg mt-4">Quality Dental Care for the Whole Family</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Dental Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Dental Clinic offers comprehensive dental services to maintain and enhance your oral health. From routine cleanings to complex procedures, our team is here to provide excellent care.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Dental Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Routine Checkups */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Routine Checkups</h3>
            <ul className="list-disc ml-5">
              <li>Comprehensive Exams</li>
              <li>Dental Cleanings</li>
              <li>Oral Health Counseling</li>
            </ul>
          </div>

          {/* Restorative Dentistry */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Restorative Dentistry</h3>
            <ul className="list-disc ml-5">
              <li>Fillings and Crowns</li>
              <li>Root Canal Therapy</li>
              <li>Bridges and Dentures</li>
            </ul>
          </div>

          {/* Cosmetic Dentistry */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Cosmetic Dentistry</h3>
            <ul className="list-disc ml-5">
              <li>Teeth Whitening</li>
              <li>Veneers</li>
              <li>Smile Makeovers</li>
            </ul>
          </div>

          {/* Pediatric Dentistry */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Pediatric Dentistry</h3>
            <ul className="list-disc ml-5">
              <li>Child-Friendly Exams</li>
              <li>Sealants and Fluoride Treatments</li>
              <li>Early Orthodontics</li>
            </ul>
          </div>

          {/* Emergency Dental Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Emergency Dental Care</h3>
            <ul className="list-disc ml-5">
              <li>Tooth Pain Relief</li>
              <li>Broken Tooth Repair</li>
              <li>Dental Trauma Care</li>
            </ul>
          </div>

          {/* Orthodontics */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Orthodontics</h3>
            <ul className="list-disc ml-5">
              <li>Braces</li>
              <li>Invisalign</li>
              <li>Retainers</li>
            </ul>
          </div>
        </div>
      </section>

      
      
      <Footer />
    </div>
  );
};

export default DentalClinic;
