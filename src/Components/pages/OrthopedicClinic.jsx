// src/Components/pages/OrthopedicClinic.jsx
import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";
import ChatBot from "./ChatBot";

const OrthopedicClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/64/21/46/6421468990ff7ead8cf8be18707177b1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Orthopedic Clinic</h1>
          <p className="text-lg mt-4">Comprehensive Musculoskeletal Care</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Orthopedic Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Orthopedic Clinic offers a wide range of services to diagnose, treat, and manage conditions of the musculoskeletal system. From non-surgical treatments to advanced surgical procedures, we ensure the best care for our patients.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Orthopedic Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Diagnosis and Assessment */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnosis and Assessment</h3>
            <ul className="list-disc ml-5">
              <li>Physical Examinations</li>
              <li>Imaging Studies (X-rays, MRIs, CT scans)</li>
              <li>Blood Tests for Systemic Conditions</li>
            </ul>
          </div>

          {/* Non-Surgical Treatments */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Non-Surgical Treatments</h3>
            <ul className="list-disc ml-5">
              <li>Medications and Injections</li>
              <li>Physical Therapy and Rehabilitation</li>
              <li>Bracing or Casting</li>
            </ul>
          </div>

          {/* Surgical Treatments */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Surgical Treatments</h3>
            <ul className="list-disc ml-5">
              <li>Fracture Repair</li>
              <li>Joint Replacement Surgery</li>
              <li>Arthroscopy</li>
            </ul>
          </div>

          {/* Specialized Care Areas */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Specialized Care Areas</h3>
            <ul className="list-disc ml-5">
              <li>Sports Medicine</li>
              <li>Pediatric Orthopedics</li>
              <li>Orthopedic Oncology</li>
            </ul>
          </div>

          {/* Postoperative Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Postoperative Care</h3>
            <ul className="list-disc ml-5">
              <li>Recovery Monitoring</li>
              <li>Customized Rehabilitation Plans</li>
              <li>Complication Management</li>
            </ul>
          </div>

          {/* Preventive Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Preventive Care</h3>
            <ul className="list-disc ml-5">
              <li>Injury Prevention Education</li>
              <li>Body Mechanics Training</li>
              <li>Healthy Lifestyle Practices</li>
            </ul>
          </div>
        </div>
      </section>
<WhatsappIcon />
<ChatBot />
      <Footer />
    </div>
  );
};

export default OrthopedicClinic;
