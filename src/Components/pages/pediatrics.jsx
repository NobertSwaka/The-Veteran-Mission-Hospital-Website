// src/Components/pages/PediatricClinic.jsx
import React from 'react';

const PediatricClinic = () => {
  const services = [
    "Routine check-ups",
    "Vaccinations",
    "Growth and development monitoring",
    "Treatment of minor illnesses",
    "Nutrition counseling",
    "Behavioral assessments",
  ];

  const photos = [
    "/images/photo1.jpg", // Replace with actual paths to your images
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Pediatric Clinic</h1>
        
        <p className="text-lg mb-6">
          Welcome to our Pediatric Clinic, where your child's health is our top priority. Our experienced team of pediatricians is dedicated to providing comprehensive care for infants, children, and adolescents.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside mb-6">
          {services.map((service, index) => (
            <li key={index} className="mb-2">{service}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {photos.map((photo, index) => (
            <img 
              key={index} 
              src={photo} 
              alt={`Pediatric Clinic ${index + 1}`} 
              className="w-full h-auto rounded shadow-lg"
            />
          ))}
        </div>
        
        <p className="text-lg mb-6">
          Schedule an appointment with us today and give your child the best care possible!
        </p>
      </div>
    </div>
  );
};

export default PediatricClinic;
