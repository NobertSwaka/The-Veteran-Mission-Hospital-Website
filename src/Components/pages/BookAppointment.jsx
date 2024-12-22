import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "./firebase";
import emailjs from "emailjs-com"; // Import EmailJS
import Footer from "./Footer"; // Import Footer component

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const specializedClinics = [
    "Cardiology Clinic",
    "Pediatrics Clinic",
    "Gynaecology Clinic",
    "Orthopedic Clinic",
    "Dental Clinic",
    "ENT Clinic",
    "Neurology Clinic",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Add data to Firebase database
      const bookingsRef = ref(db, "bookings");
      await push(bookingsRef, formData);

      // 2. Send email using EmailJS
      const emailParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        clinic: formData.clinic,
      };

      // Use your service ID, template ID, and user ID from EmailJS
      const serviceID = "service_jhsnhtm";
      const templateID = "template_acnkitn";
      const userID = "Tm7_IiAsDoF3iM0qf";

      emailjs.send(serviceID, templateID, emailParams, userID)
        .then((response) => {
          console.log("Email sent successfully", response);
        })
        .catch((error) => {
          console.error("Error sending email: ", error);
        });

      // Show success modal
      setModalMessage("Appointment booked successfully!");
      setIsModalOpen(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        clinic: "",
      });
    } catch (error) {
      // Show error modal
      setModalMessage("Error booking appointment. Please try again.");
      setIsModalOpen(true);
      console.error("Error booking appointment: ", error);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-100 flex flex-col pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/58/d8/87/58d887b41dec4a14bdab336e93a4fdb0.jpg')" }} // Add your background image URL here
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto mb-8 opacity-90">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Specialized Clinic</label>
            <select
              name="clinic"
              value={formData.clinic}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select a Clinic</option>
              {specializedClinics.map((clinic, index) => (
                <option key={index} value={clinic}>
                  {clinic}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl text-center mb-4">{modalMessage}</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-red-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BookingPage;
