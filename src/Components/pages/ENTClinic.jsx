import React from "react";

const ENTClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/3d/81/2e/3d812ea5f3df7de75f8014a7ad8d2158.jpg')", // Updated image for ENT
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">ENT Clinic</h1>
          <p className="text-lg mt-4">Comprehensive Care for Ear, Nose, and Throat</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our ENT Clinic specializes in the medical and surgical management of conditions affecting the ear, nose, throat, and related structures of the head and neck. Our team of otolaryngologists provides comprehensive care for both functional and aesthetic concerns.
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
              <li>Physical examinations of the ear, nose, throat, head, and neck.</li>
              <li>Endoscopic evaluations (nasal endoscopy, laryngoscopy, otoscopy).</li>
              <li>Imaging studies (CT scans, MRIs, X-rays).</li>
              <li>Hearing tests (audiometry) and balance assessments (videonystagmography).</li>
            </ul>
          </div>

          {/* Ear (Otologic) Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Ear (Otologic) Services</h3>
            <ul className="list-disc ml-5">
              <li>Evaluation and treatment of hearing loss.</li>
              <li>Management of ear infections (acute and chronic).</li>
              <li>Surgery for ear conditions (tympanoplasty, mastoidectomy).</li>
              <li>Treatment of balance disorders and vertigo.</li>
            </ul>
          </div>

          {/* Nose (Rhinologic) Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Nose (Rhinologic) Services</h3>
            <ul className="list-disc ml-5">
              <li>Treatment of sinus and nasal disorders.</li>
              <li>Nasal deformities and breathing problems management.</li>
              <li>Allergy management and treatment.</li>
              <li>Nasal trauma management.</li>
            </ul>
          </div>

          {/* Throat (Laryngologic) Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Throat (Laryngologic) Services</h3>
            <ul className="list-disc ml-5">
              <li>Voice and swallowing disorders evaluation.</li>
              <li>Thyroid and parathyroid surgery.</li>
              <li>Treatment of swallowing difficulties (dysphagia).</li>
              <li>Tonsil and adenoid surgery.</li>
            </ul>
          </div>

          {/* Head and Neck Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Head and Neck Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Cancer diagnosis and treatment.</li>
              <li>Salivary gland surgery.</li>
              <li>Facial trauma surgery.</li>
            </ul>
          </div>

          {/* Sleep Apnea and Snoring Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Sleep Apnea and Snoring Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Management of obstructive sleep apnea (OSA).</li>
              <li>Treatment for snoring.</li>
            </ul>
          </div>

          {/* Pediatric ENT Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Pediatric ENT Services</h3>
            <ul className="list-disc ml-5">
              <li>Treatment of common pediatric conditions.</li>
              <li>Surgical correction for congenital conditions.</li>
            </ul>
          </div>

          {/* Cosmetic and Reconstructive Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Cosmetic and Reconstructive Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Facial plastic surgery and scar revision.</li>
              <li>Skin cancer surgery.</li>
            </ul>
          </div>

          {/* Chronic Head and Neck Conditions */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Chronic Head and Neck Conditions</h3>
            <ul className="list-disc ml-5">
              <li>Treatment of chronic ear and sinus conditions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our dedicated team of ENT specialists is ready to assist you with your ear, nose, and throat concerns. Contact us today to schedule an appointment.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">Call Us</button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">Book Online</button>
        </div>
      </section>
    </div>
  );
};

export default ENTClinic;
