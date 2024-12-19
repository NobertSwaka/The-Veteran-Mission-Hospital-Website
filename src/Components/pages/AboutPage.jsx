// src/pages/AboutPage.jsx
import React from 'react';
import Footer from './Footer';
import WhatsappIcon from './WhatsappIcon';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <header className="bg-green-600 mt-5 text-white text-center py-3">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Caring for you and your family with compassion and expertise.</p>
      </header>

      <div className="container mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            At The Veteran Mission Hospitals, we have been dedicated to providing top-notch healthcare services for over 50 years. Our commitment to excellence is reflected in our state-of-the-art facilities and the expertise of our healthcare professionals.
          </p>
          <p className="text-gray-700 mb-4">
            We believe in a patient-centered approach, focusing on individualized treatment plans and fostering a healing environment for all. Our team of highly qualified doctors, nurses, and support staff work together to ensure the well-being of our patients.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 mt-10">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to provide high-quality healthcare that is accessible, affordable, and compassionate. We aim to empower our patients through education and support, ensuring they are active participants in their health journey.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 mt-10">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Collaboration</li>
            <li>Innovation</li>
          </ul>
        </section>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
    
  );
};

export default AboutPage;
