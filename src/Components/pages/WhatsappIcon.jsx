import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes, FaPhone } from "react-icons/fa";

const WhatsappIcon = () => {
  const [isVisible, setIsVisible] = useState(false); // Visibility for WhatsApp and Call buttons
  const [isModalOpen, setIsModalOpen] = useState(false); // Visibility for the modal
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    // Add a delay before showing the icons for a smooth transition
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust delay for desired effect
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Save user data to your database
      await fetch("https://your-api-endpoint.com/save-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      // Redirect to WhatsApp with a pre-filled message
      const whatsappUrl = `https://wa.me/254710177777?text=Hello,%20my%20name%20is%20${encodeURIComponent(
        userData.name
      )},%20my%20email%20is%20${encodeURIComponent(
        userData.email
      )},%20and%20my%20phone%20number%20is%20${encodeURIComponent(
        userData.phone
      )}.`;
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Icon */}
      <div
        className={`bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <FaWhatsapp size={32} />
      </div>

      {/* Call Icon */}
      <div
        className={`bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.open("tel:+254710177777", "_self")}
      >
        <FaPhone size={32} />
      </div>

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50">
          <div className="bg-white w-full max-w-sm rounded-lg shadow-lg m-4 p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Need Help?</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <p className="text-sm text-gray-600 mb-4">
              Our Customer Support Team is here to help. Fill in your details
              below to start chatting with us on WhatsApp.
            </p>

            {/* Form */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 border rounded"
            />

            {/* Submit Button */}
            <button
              className={`w-full py-2 rounded text-white ${
                userData.name && userData.email && userData.phone
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!userData.name || !userData.email || !userData.phone}
            >
              Start Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappIcon;
