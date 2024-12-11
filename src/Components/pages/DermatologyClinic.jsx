import React from "react";

const DermatologyClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/b0/21/71/b02171833fb8bb086a891be71914a5af.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Dermatology Clinic</h1>
          <p className="text-lg mt-4">Comprehensive Skin Care for All Ages</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Dermatology Clinic specializes in diagnosing and treating a wide range of skin conditions. Our team of dermatology experts is committed to providing personalized care to help patients achieve and maintain healthy skin.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Skin Conditions Diagnosis */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnosis & Treatment</h3>
            <ul className="list-disc ml-5">
              <li>Acne and Rosacea</li>
              <li>Eczema and Dermatitis</li>
              <li>Psoriasis</li>
              <li>Skin Infections</li>
              <li>Skin Cancer</li>
              <li>And more...</li>
            </ul>
          </div>
          
          {/* Cosmetic Dermatology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Cosmetic Dermatology</h3>
            <ul className="list-disc ml-5">
              <li>Laser Skin Resurfacing</li>
              <li>Botox & Dermal Fillers</li>
              <li>Microdermabrasion</li>
              <li>Facial Peels</li>
              <li>Skin Rejuvenation Treatments</li>
            </ul>
          </div>

          {/* Diagnostic Testing */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Skin Biopsies & Testing</h3>
            <ul className="list-disc ml-5">
              <li>Skin Biopsies</li>
              <li>Allergy Patch Testing</li>
              <li>Skin Cancer Screening</li>
              <li>Mohs Surgery for Skin Cancer</li>
              <li>Genetic Testing for Skin Disorders</li>
            </ul>
          </div>

          {/* Pediatric Dermatology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Pediatric Dermatology</h3>
            <ul className="list-disc ml-5">
              <li>Atopic Dermatitis</li>
              <li>Birthmarks and Hemangiomas</li>
              <li>Pediatric Acne</li>
              <li>Cradle Cap</li>
              <li>Rashes and Skin Irritations</li>
            </ul>
          </div>

          {/* Hair & Scalp Disorders */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Hair & Scalp Disorders</h3>
            <ul className="list-disc ml-5">
              <li>Alopecia (Hair Loss)</li>
              <li>Dandruff & Seborrheic Dermatitis</li>
              <li>Scalp Psoriasis</li>
              <li>Scalp Infections</li>
            </ul>
          </div>

          {/* Surgical Dermatology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Surgical Dermatology</h3>
            <ul className="list-disc ml-5">
              <li>Skin Cancer Excision</li>
              <li>Cyst & Lipoma Removal</li>
              <li>Mole and Wart Removal</li>
              <li>Nail Surgery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Whether you're seeking routine skin care or specialized treatment, our expert dermatologists are here to help. Contact us today to schedule an appointment.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">Call Us</button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Book Online</button>
        </div>
      </section>
    </div>
  );
};

export default DermatologyClinic;
