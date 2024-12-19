// src/Components/InsurancePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./pages/Footer";
import InsuranceLogos from './pages/InsuranceLogos';


const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <br />
      {/* Page Header */}
      <header className="text-center mb-12 pt-16">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Insurance & Billing</h1>
        <p className="text-lg text-gray-600">
          We work with a variety of insurance providers to make your healthcare experience seamless and affordable.
        </p>
      </header>

      {/* Partner Insurance Providers Logos */}
      <InsuranceLogos />

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h2>
        <p className="text-gray-700 mb-6">
          Our billing team is here to help with any questions you may have about insurance coverage and billing procedures. Reach out to us for personalized support.
        </p>
        <Link to="/ContactUs">
          <button className="bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
            Contact Us
          </button>
        </Link>
      </section>
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default InsurancePage;
