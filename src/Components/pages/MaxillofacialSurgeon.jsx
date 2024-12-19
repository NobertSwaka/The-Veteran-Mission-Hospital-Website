import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";

const MaxillofacialSurgeon = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/47/40/e0/4740e0c356b9d2f4a188bf50b49fff8f.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Maxillofacial Surgeon</h1>
          <p className="text-lg mt-4">Comprehensive Care for Oral and Facial Health</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Maxillofacial surgeons specialize in diagnosing and treating conditions affecting the mouth, jaw, face, and neck, combining elements of medicine and dentistry for both functional and aesthetic concerns.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Diagnosis and Assessment */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Diagnosis and Assessment</h3>
            <ul className="list-disc ml-5">
              <li>Physical examination of the face, mouth, jaws, and neck.</li>
              <li>Imaging studies (X-rays, CT scans, MRI, 3D imaging).</li>
              <li>Biopsies for benign and malignant tumors or cysts.</li>
            </ul>
          </div>

          {/* Non-Surgical Treatments */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Non-Surgical Treatments</h3>
            <ul className="list-disc ml-5">
              <li>Management of TMJ disorders.</li>
              <li>Treatment of oral infections and abscesses.</li>
              <li>Facial pain management.</li>
            </ul>
          </div>

          {/* Surgical Treatments */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Surgical Treatments</h3>
            <ul className="list-disc ml-5">
              <li>Tooth extraction and dental surgeries.</li>
              <li>Orthognathic (jaw) surgery.</li>
              <li>Facial trauma surgery.</li>
            </ul>
          </div>

          {/* Cosmetic Facial Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Cosmetic Facial Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Rhinoplasty, facelifts, and eyelid surgery.</li>
              <li>Chin and cheek augmentation.</li>
              <li>Scar revision and contouring.</li>
            </ul>
          </div>

          {/* Sleep Apnea and Airway Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Sleep Apnea and Airway Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Surgical management of obstructive sleep apnea.</li>
              <li>Removal of enlarged tonsils or adenoids.</li>
            </ul>
          </div>

          {/* Salivary Gland Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Salivary Gland Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Sialolithotomy and treatment for infections or blockages.</li>
              <li>Removal of salivary gland tumors.</li>
            </ul>
          </div>

          {/* Craniofacial Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Craniofacial Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Treatment of craniosynostosis and skull deformities.</li>
              <li>Reconstruction of facial bones after injury.</li>
            </ul>
          </div>

          {/* Dental and Jaw Alignment Corrections */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Dental and Jaw Alignment Corrections</h3>
            <ul className="list-disc ml-5">
              <li>Collaboration with orthodontists for alignment corrections.</li>
            </ul>
          </div>

          {/* Postoperative Care and Rehabilitation */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Postoperative Care and Rehabilitation</h3>
            <ul className="list-disc ml-5">
              <li>Ongoing management and follow-up care after surgery.</li>
              <li>Monitoring for complications like infection and healing issues.</li>
            </ul>
          </div>
        </div>
      </section>
<WhatsappIcon />
     
      <Footer />
    </div>
    
  );
};

export default MaxillofacialSurgeon;
