import React from 'react';
import Footer from './Footer';
import WhatsappIcon from "./WhatsappIcon";
import ChatBot from './ChatBot';

// Sample data for doctors (you can replace this with dynamic data from an API)
const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    description: "Experienced in treating heart-related conditions.",
    image: "https://i.pinimg.com/564x/87/31/83/8731835cbff585d86b3581fdf5c0cab6.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialty: "Pediatrician",
    description: "Specializes in children's health and diseases.",
    image: "https://img.freepik.com/premium-photo/doctor-team-hospital-work-smile-together-portrait-medical-facility-medic-nurse-healthcare-clinic-with-workers-showing-happiness-confidence-diversity-teamwork-miami_590464-89339.jpg?w=826",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Gynecologist",
    description: "Expert in women's health and reproductive systems.",
    image: "https://i.pinimg.com/564x/01/32/66/013266fc6be644bcb9bd494718f401c9.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Orthopedic Surgeon",
    description: "Specializes in musculoskeletal issues.",
    image: "https://img.freepik.com/fotos-premium/o-doutor-e-o-miudo-escutam-se-pelo-estetoscopio_99043-4075.jpg?w=826",
  },
];

const Doctors = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 pt-20"> {/* Increased pt-20 to move content further down */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="mt-2 text-gray-500">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhatsappIcon />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Doctors;
