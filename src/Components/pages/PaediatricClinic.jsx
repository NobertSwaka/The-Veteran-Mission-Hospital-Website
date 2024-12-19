import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";

const PediatricClinic = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24"> {/* Increased pt-24 for more space */}
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/heart-doctor-mother-child-hospital-checkup-examination-medical-advice-clinic-black-healthcare-man-cardiology-checking-little-girl-patient-medicare-examine-appointment_590464-80749.jpg?w=826')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Pediatric Clinic</h1>
          <p className="text-lg mt-4">Compassionate Care for Your Child's Health</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Scope of Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our Pediatric Clinic specializes in the care, diagnosis, and treatment of infants, children, adolescents, and young adults up to 18 (and sometimes 21) years of age. Our comprehensive services cover preventive care, growth and development monitoring, and treatment of a wide range of medical conditions unique to the pediatric population.
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
              <li>Routine Well-Child Exams</li>
              <li>Growth and Developmental Screenings</li>
              <li>Immunizations</li>
              <li>Anticipatory Guidance</li>
            </ul>
          </div>

          {/* Acute Illness Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Acute Illness Care</h3>
            <ul className="list-disc ml-5">
              <li>Diagnosis and Treatment of Common Pediatric Illnesses</li>
              <li>Emergency Care for Minor Injuries</li>
            </ul>
          </div>

          {/* Chronic Disease Management */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Chronic Disease Management</h3>
            <ul className="list-disc ml-5">
              <li>Asthma</li>
              <li>Diabetes</li>
              <li>Epilepsy</li>
              <li>Obesity</li>
              <li>ADHD and Behavioral Disorders</li>
            </ul>
          </div>

          {/* Newborn and Infant Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Newborn and Infant Care</h3>
            <ul className="list-disc ml-5">
              <li>Newborn Screenings</li>
              <li>Neonatal Care</li>
              <li>Breastfeeding Support</li>
            </ul>
          </div>

          {/* Developmental and Behavioral Health */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Developmental and Behavioral Health</h3>
            <ul className="list-disc ml-5">
              <li>Developmental Assessments</li>
              <li>Behavioral Health Management</li>
              <li>School Performance and Learning Disabilities</li>
            </ul>
          </div>

          {/* Infectious Disease Management */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Infectious Disease Management</h3>
            <ul className="list-disc ml-5">
              <li>Vaccination-Preventable Diseases</li>
              <li>Infectious Diseases Diagnosis and Treatment</li>
              <li>Antibiotic Stewardship</li>
            </ul>
          </div>

          {/* Adolescent Health */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Adolescent Health</h3>
            <ul className="list-disc ml-5">
              <li>Physical and Emotional Development</li>
              <li>Mental Health Support</li>
              <li>Sports Physicals</li>
            </ul>
          </div>

          {/* Genetic and Congenital Disorders */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Genetic and Congenital Disorders</h3>
            <ul className="list-disc ml-5">
              <li>Genetic Counseling and Testing</li>
              <li>Management of Congenital Disorders</li>
            </ul>
          </div>

          {/* Coordination of Care */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-110">
            <h3 className="text-2xl font-semibold mb-4">Coordination of Care</h3>
            <ul className="list-disc ml-5">
              <li>Referrals to Specialists</li>
              <li>Family-Centered Care</li>
            </ul>
          </div>
        </div>
      </section>
<WhatsappIcon />
      <Footer />
    </div>
  );
};

export default PediatricClinic;
