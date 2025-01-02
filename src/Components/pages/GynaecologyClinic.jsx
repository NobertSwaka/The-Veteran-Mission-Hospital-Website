import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";
import ChatBot from "./ChatBot";

const GynaecologyClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/25/a5/55/25a5552df7fa0887db630012478b38bd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Gynaecology Clinic</h1>
          <p className="text-lg mt-4">Dedicated to Women's Health and Wellness</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Gynaecology Clinic offers specialized care in women's reproductive health, addressing a wide range of needs from routine exams to complex treatments. We provide compassionate and comprehensive care for women of all ages.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Preventive Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Preventive Care</h3>
            <ul className="list-disc ml-5">
              <li>Routine Gynecological Exams</li>
              <li>Pap Smears and HPV Testing</li>
              <li>Breast Exams</li>
              <li>Family Planning and Contraception</li>
            </ul>
          </div>

          {/* Pregnancy and Prenatal Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Pregnancy and Prenatal Care</h3>
            <ul className="list-disc ml-5">
              <li>Regular Check-ups</li>
              <li>Ultrasound Scans</li>
              <li>High-Risk Pregnancy Management</li>
              <li>Nutrition and Health Counseling</li>
            </ul>
          </div>

          {/* Menstrual Disorders */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Menstrual Disorders</h3>
            <ul className="list-disc ml-5">
              <li>Irregular Periods</li>
              <li>Heavy Menstrual Bleeding</li>
              <li>Painful Periods</li>
            </ul>
          </div>

          {/* Menopause Management */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Menopause Management</h3>
            <ul className="list-disc ml-5">
              <li>Hormone Replacement Therapy</li>
              <li>Bone Health Management</li>
              <li>Symptom Relief and Support</li>
            </ul>
          </div>

          {/* Fertility and Reproductive Health */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Fertility and Reproductive Health</h3>
            <ul className="list-disc ml-5">
              <li>Fertility Testing and Counseling</li>
              <li>Ovulation Induction</li>
              <li>Assisted Reproductive Techniques</li>
            </ul>
          </div>

          {/* Minimally Invasive Surgery */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Minimally Invasive Surgery</h3>
            <ul className="list-disc ml-5">
              <li>Hysteroscopy</li>
              <li>Endometrial Ablation</li>
              <li>Polypectomy</li>
              <li>Laparoscopic Surgery</li>
            </ul>
          </div>

          {/* Sexual Health Services */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Sexual Health Services</h3>
            <ul className="list-disc ml-5">
              <li>STI Screening and Treatment</li>
              <li>Sexual Health Counseling</li>
              <li>Vaccinations for HPV</li>
            </ul>
          </div>

          {/* Gynecologic Oncology Screening */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Gynecologic Oncology Screening</h3>
            <ul className="list-disc ml-5">
              <li>Cervical Cancer Screening</li>
              <li>Ovarian Cancer Risk Assessment</li>
              <li>Genetic Counseling</li>
            </ul>
          </div>

          {/* Urogynecology */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Urogynecology</h3>
            <ul className="list-disc ml-5">
              <li>Pelvic Floor Disorders</li>
              <li>Urinary Incontinence Treatment</li>
              <li>Pelvic Pain Management</li>
            </ul>
          </div>
        </div>
      </section>
<WhatsappIcon/>
<ChatBot />
      <Footer />
    </div>
  );
};

export default GynaecologyClinic;
