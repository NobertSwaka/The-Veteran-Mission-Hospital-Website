import React from 'react';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-auto">
        {/* Contact Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full m-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 m-4">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Find Us Here</h2>
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6738186272796!2d36.93271147311195!3d-1.372396735722413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0da705a1832f%3A0xf3e1d0f7f90e02a5!2sVeteran%20Mission%20Hospitals!5e0!3m2!1sen!2ske!4v1730120906175!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUs;
