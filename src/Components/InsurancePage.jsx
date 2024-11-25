import React from 'react';
import Footer from './pages/Footer';

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Insurance & Billing</h1>
        <p className="text-lg text-gray-600">
          We work with a variety of insurance providers to make your healthcare experience seamless and affordable.
        </p>
      </header>

      {/* Accepted Insurance Plans */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Accepted Insurance Plans</h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          <li>Health Insurance Provider A</li>
          <li>Health Insurance Provider B</li>
          <li>Insurance Provider C</li>
          <li>Insurance Plan D</li>
          <li>More options available – please contact us for full list</li>
        </ul>
      </section>

      {/* Partner Insurance Providers Logos */}
      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex justify-center">
            <img src='./Images/aar.png' alt="Provider 1" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="/path/to/logo2.png" alt="Provider 2" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="/path/to/logo3.png" alt="Provider 3" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="/path/to/logo4.png" alt="Provider 4" className="h-16" />
          </div>
          {/* Add more logos as necessary */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h2>
        <p className="text-gray-700 mb-6">
          Our billing team is here to help with any questions you may have about insurance coverage and billing procedures. Reach out to us for personalized support.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          Contact Us
        </button>
      </section>
      <Footer />
    </div>
    
  );
};

export default InsurancePage;
