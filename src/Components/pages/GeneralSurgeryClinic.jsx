import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";

const GeneralSurgeryClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/spinal-surgery-group-surgeons-operating-room-with-surgery-equipment_179755-5181.jpg?w=740')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">General Surgery Clinic</h1>
          <p className="text-lg mt-4">Expert Surgical Care for Various Conditions</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our General Surgery Clinic provides a wide range of surgical services for various medical conditions. Our team of experienced surgeons is dedicated to delivering high-quality care using the latest techniques and technologies.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Gastrointestinal (GI) Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Gastrointestinal (GI) Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Appendectomy</li>
              <li>Cholecystectomy</li>
              <li>Hernia Repair</li>
              <li>Bowel Resection</li>
              <li>Conditions Treated: Appendicitis, gallstones, colorectal cancer.</li>
            </ul>
          </div>

          {/* Abdominal and Digestive System Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Abdominal and Digestive System Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Laparoscopic and open surgeries on abdominal organs.</li>
              <li>Conditions Treated: Gastric cancer, peptic ulcers, trauma.</li>
            </ul>
          </div>

          {/* Endocrine Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Endocrine Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Thyroid, parathyroid, and adrenal gland surgeries.</li>
              <li>Conditions Treated: Thyroid cancer, adrenal tumors.</li>
            </ul>
          </div>

          {/* Trauma and Emergency Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Trauma and Emergency Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Surgical management of trauma cases and emergencies.</li>
              <li>Conditions Treated: Internal bleeding, organ damage.</li>
            </ul>
          </div>

          {/* Soft Tissue and Skin Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Soft Tissue and Skin Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Excision of cysts, abscess drainage, biopsies.</li>
              <li>Conditions Treated: Skin cancer, chronic wounds.</li>
            </ul>
          </div>

          {/* Breast Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Breast Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Mastectomy, lumpectomy, sentinel lymph node biopsy.</li>
              <li>Conditions Treated: Breast cancer, benign breast conditions.</li>
            </ul>
          </div>

          {/* Vascular Surgery (Peripheral) */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Vascular Surgery (Peripheral)</h3>
            <ul className="list-disc ml-5">
              <li>Management of varicose veins, dialysis access.</li>
              <li>Conditions Treated: Peripheral vascular disease, critical limb ischemia.</li>
            </ul>
          </div>

          {/* Surgical Oncology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Surgical Oncology</h3>
            <ul className="list-disc ml-5">
              <li>Removal of tumors from various organs.</li>
              <li>Conditions Treated: Cancer in various body parts.</li>
            </ul>
          </div>

          {/* Laparoscopic Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Laparoscopic Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Minimally invasive techniques for various surgeries.</li>
              <li>Benefits: Less pain, quicker recovery.</li>
            </ul>
          </div>

          {/* Colorectal Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Colorectal Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Hemorrhoidectomy, surgery for anal fissures.</li>
              <li>Conditions Treated: Colorectal cancer, inflammatory bowel disease.</li>
            </ul>
          </div>

          {/* Surgical Management of Infections */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Surgical Management of Infections</h3>
            <ul className="list-disc ml-5">
              <li>Drainage of abscesses, treatment of surgical site infections.</li>
              <li>Conditions Treated: Soft tissue infections, post-operative infections.</li>
            </ul>
          </div>

          {/* Hernia Repair */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Hernia Repair</h3>
            <ul className="list-disc ml-5">
              <li>Repair of inguinal, umbilical, and incisional hernias.</li>
              <li>Techniques: Open surgery, laparoscopic repair.</li>
            </ul>
          </div>

          {/* Acute Care Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Acute Care Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Urgent surgeries for bowel obstruction, perforated ulcers.</li>
              <li>Conditions Treated: Acute abdominal pain, peritonitis.</li>
            </ul>
          </div>
        </div>
      </section>

      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default GeneralSurgeryClinic;
