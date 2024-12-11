import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const WhatsappIcon = () => {
  const [isVisible, setIsVisible] = useState(false); // Visibility for WhatsApp and Call buttons

  useEffect(() => {
    // Add a delay before showing the icons for a smooth transition
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust delay for desired effect
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Icon */}
      <div
        className={`bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.open("https://wa.me/254710177777", "_blank")} // Open WhatsApp chat directly
      >
        <FaWhatsapp size={32} />
      </div>

      {/* Call Icon */}
      <div
        className={`bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.open("tel:+254710177777", "_self")} // Initiate call directly
      >
        <FaPhone size={32} />
      </div>
    </div>
  );
};

export default WhatsappIcon;
