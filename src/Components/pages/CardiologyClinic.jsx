import React from "react";

const CardiologyClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/41/fc/74/41fc7479d72030ce3022a4c7db307e0b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Cardiological Clinic</h1>
          <p className="text-lg mt-4">Comprehensive Heart Care for All Ages</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          At our Cardiological Clinic, we specialize in diagnosing, treating, and managing diseases that affect the heart and blood vessels. Our team of experts is committed to providing top-notch cardiovascular care, from preventive services to advanced treatments.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Cardiovascular Diseases */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnosis & Treatment</h3>
            <ul className="list-disc ml-5">
              <li>Coronary Artery Disease</li>
              <li>Heart Attack</li>
              <li>Heart Failure</li>
              <li>Arrhythmias</li>
              <li>Valvular Heart Disease</li>
              <li>And more...</li>
            </ul>
          </div>

          {/* Preventive Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Preventive Cardiology</h3>
            <ul className="list-disc ml-5">
              <li>Cholesterol Management</li>
              <li>Hypertension Management</li>
              <li>Smoking Cessation</li>
              <li>Diabetes Management</li>
              <li>Weight Management</li>
            </ul>
          </div>

          {/* Diagnostic Testing */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnostic Testing & Imaging</h3>
            <ul className="list-disc ml-5">
              <li>ECG & Echocardiogram</li>
              <li>Stress Testing</li>
              <li>Holter Monitoring</li>
              <li>Cardiac Catheterization</li>
              <li>Coronary Angiography</li>
            </ul>
          </div>

          {/* Interventional Cardiology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Interventional Cardiology</h3>
            <ul className="list-disc ml-5">
              <li>Angioplasty & Stent Placement</li>
              <li>Atherectomy</li>
              <li>PCI</li>
              <li>TAVR</li>
              <li>Carotid Artery Stenting</li>
            </ul>
          </div>

          {/* Electrophysiology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Heart Rhythm Disorders</h3>
            <ul className="list-disc ml-5">
              <li>Pacemaker & ICD Implantation</li>
              <li>Ablation Therapy</li>
              <li>Cardioversion</li>
              <li>Electrophysiological Studies</li>
            </ul>
          </div>

          {/* Heart Failure Management */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Heart Failure Management</h3>
            <ul className="list-disc ml-5">
              <li>Heart Failure Clinics</li>
              <li>Device Therapy</li>
              <li>Heart Transplantation Referral</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Whether you're seeking a routine cardiovascular checkup or specialized care, our team of expert cardiologists is here to help. Contact us today to schedule an appointment.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Call Us</button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Book Online</button>
        </div>
      </section>
    </div>
  );
};

export default CardiologyClinic;
