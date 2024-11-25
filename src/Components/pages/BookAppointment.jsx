import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import the Firestore instance

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

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
      // Use the db reference to add document to Firestore
      const docRef = await addDoc(collection(db, "appointments"), formData);
      console.log("Document written with ID: ", docRef.id);
      setSuccessMessage("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        clinic: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
          Book an Appointment
        </h1>
        {successMessage && (
          <div className="text-green-700 text-center mb-4">{successMessage}</div>
        )}
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
    </div>
  );
};

export default BookingPage;
