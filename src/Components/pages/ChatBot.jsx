import React, { useState, useEffect, useRef } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { db } from "./firebase";
import { FaTimes, FaComments } from "react-icons/fa";
import moment from "moment";

// Import default profile images
import userProfileImage from './Images/chatbotp.jpg';
import botProfileImage from './Images/chatbotp2.jpg';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const messagesRef = ref(db, "messages");

  // Ref for the latest message
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const fetchMessages = () => {
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const fetchedMessages = Object.values(data);
          setMessages(fetchedMessages);
        }
      });
    };

    fetchMessages();
  }, []);

  // Send message
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = {
        text: input,
        user: "User",
        timestamp: new Date().toISOString(),
      };

      await push(messagesRef, userMessage);

      const botResponse = generateBotResponse(input);
      await push(messagesRef, botResponse);

      setInput("");
    }
  };

  // Generate bot response based on user input
  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let botText;

    // Handling FAQ questions based on the provided questions and answers
    if (input.includes("services")) {
      botText = "Our hospital provides a wide range of services, including emergency care, outpatient services, surgeries, diagnostic imaging, and specialized treatments in fields such as cardiology, orthopedics, and pediatrics.";
    } else if (input.includes("appointment")) {
      botText = "You can schedule an appointment by calling our reception at (+254) 710 177777 or by using our online appointment system available on our website.";
    } else if (input.includes("insurance")) {
      botText = "We accept most major insurance plans. Please contact our billing department for more detailed information regarding your specific plan.";
    } else if (input.includes("bring") || input.includes("appointment")) {
      botText = "Please bring a valid ID, your insurance card, and any relevant medical records or test results. If you are a new patient, please arrive 15 minutes early to complete the necessary paperwork.";
    } else if (input.includes("visiting hours")) {
      botText = "Our visiting hours are from 9 AM to 8 PM. However, specific units may have different visiting hours, so please check with the unit for exact times.";
    } else if (input.includes("emergency")) {
      botText = "Yes, our hospital has a 24/7 emergency department staffed with qualified medical professionals ready to assist you at any time.";
    } else if (input.includes("call") || input.includes("contact")) {
        botText = "You can contact us by calling our reception at 0710177777. We are available to assist you.";
    } else if (input.includes("contact a patient")) {
        botText = "You can contact a patient by calling the hospital's main line and asking for their room number. We will connect you if the patient is available to speak.";
    } else if (input.includes("hospital location")) {
      botText = "Our hospital is located in Syokimau Along Katani Road 800M off Mombasa Road. You can find us on the map for directions.";
    } else if (input.includes("clinic")) {
      botText = "Visit Our Specialized Clinics page for more information.";
    } else {
      botText = "Hello, Welcome to The Veteran Mission Hospitals. I'm here to help! How may I assist you today?";
    }

    return {
      text: botText,
      user: "Bot",
      timestamp: new Date().toISOString(),
    };
  };

  // Scroll to the last message after new message is added
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle Enter key for sending message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formatTime = (timestamp) => {
    return moment(timestamp).format("h:mm A");
  };

  return (
    <div>
      <div
        className={`fixed bottom-4 left-4 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg cursor-pointer ${isVisible ? "opacity-0" : "opacity-100"}`}
        onClick={toggleVisibility}
      >
        <FaComments size={32} />
      </div>

      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <div className="w-full bg-white shadow-md rounded-lg">
            <div className="flex items-center bg-gray-600 text-white px-4 py-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold">TVMH Hospital Assistant</h1>
                <p className="text-sm text-gray-200">Online</p>
              </div>
              <button onClick={toggleVisibility} className="ml-auto text-white hover:text-gray-400">
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-4 h-96 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.user === "User" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex ${msg.user === "User" ? "flex-row-reverse" : ""} items-center`}>
                    <img
                      src={msg.user === "User" ? userProfileImage : botProfileImage}
                      alt="profile"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div
                      className={`${
                        msg.user === "User" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
                      } p-3 rounded-xl max-w-xs sm:max-w-md lg:max-w-lg`}
                    >
                      <span>{msg.text}</span>
                      {msg.image && <img src={msg.image} alt="clinic schedule" className="mt-2 max-w-full h-auto rounded" />}
                      <div className="text-xs text-gray-500 mt-1">{formatTime(msg.timestamp)}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={lastMessageRef} />
            </div>

            <div className="flex items-center px-4 py-2 bg-white border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message"
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button onClick={sendMessage} className="ml-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-red-700 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
