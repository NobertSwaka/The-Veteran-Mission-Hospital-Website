import React from "react";
import Footer from "./Footer";

const EmergencyCare = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/33/24/09/3324098fc554202e79cc21f248578743.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Emergency Care</h1>
          <p className="text-lg mt-4">Immediate Care When You Need It Most</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Emergency Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Emergency Care unit is equipped to handle a wide range of medical emergencies. Our dedicated team of healthcare professionals is ready to provide rapid assessment and treatment for critical conditions.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Emergency Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Critical Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Critical Care</h3>
            <ul className="list-disc ml-5">
              <li>Advanced Life Support</li>
              <li>Trauma Care</li>
              <li>Stabilization of Critical Patients</li>
            </ul>
          </div>

          {/* Minor Emergencies */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Minor Emergency Treatments</h3>
            <ul className="list-disc ml-5">
              <li>Wound Care</li>
              <li>Fracture Management</li>
              <li>Burn Treatment</li>
            </ul>
          </div>

          {/* Diagnostic Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnostic Services</h3>
            <ul className="list-disc ml-5">
              <li>X-Ray and CT Scans</li>
              <li>Laboratory Tests</li>
              <li>Ultrasound Imaging</li>
            </ul>
          </div>

          {/* Pediatric Emergency */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Pediatric Emergency Care</h3>
            <ul className="list-disc ml-5">
              <li>Childhood Illnesses</li>
              <li>Pediatric Trauma</li>
              <li>Allergic Reactions</li>
            </ul>
          </div>

          {/* Triage Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Triage and Assessment</h3>
            <ul className="list-disc ml-5">
              <li>Initial Patient Assessment</li>
              <li>Priority Treatment Based on Condition</li>
            </ul>
          </div>

          {/* Follow-Up Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Follow-Up Care</h3>
            <ul className="list-disc ml-5">
              <li>Post-Emergency Follow-Up</li>
              <li>Referral to Specialists</li>
              <li>Continuity of Care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">Get Immediate Help</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          In case of an emergency, please call us immediately or visit our Emergency Care unit. Our team is always ready to assist you.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Call Us</button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Book Online</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmergencyCare;
