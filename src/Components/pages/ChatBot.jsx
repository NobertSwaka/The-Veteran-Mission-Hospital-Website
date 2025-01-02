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
    } else if (input.includes("hospital location") || input.includes("located") || input.includes("where are you")) {
      botText = "We are located in Syokimau Along Katani Road 800M off Mombasa Road. You can find us on the map for directions.";
    } else if (input.includes("hello") || input.includes("hey") || input.includes("hi")) {
      botText = "Hello, Welcome to The Veteran Mission Hospitals Digital Assistant. I'm here to help! How may I assist you today?";
    } else if (input.includes("clinic")) {
      botText = "Visit Our Specialized Clinics page for more information.";
    }
  
  // New questions and answers
else if (input.includes("operating hours") || input.includes("24/7") || input.includes("close")) {
    botText = "Our hospital operates 24/7 for emergencies. Outpatient services are available from 8:00 AM to 8:00 PM.";
  } else if (input.includes("telemedicine")) {
    botText = "Yes, we offer telemedicine consultations. Please use the 'Book an Appointment' feature to schedule a session.";
  } else if (input.includes("choose doctor") || input.includes("select doctor")) {
    botText = "Yes, you can select a doctor based on availability.";
  } else if (input.includes("cancellation policy") || input.includes("cancel appointment")) {
    botText = "Appointments can be canceled or rescheduled up to 24 hours in advance without charges.";
  } else if (input.includes("pharmacy")) {
    botText = "Yes, we have an in-house pharmacy open 24/7 that is fully stocked.";
  } else if (input.includes("specialized clinics")) {
    botText = "Yes, we have specialized clinics for cardiology, orthopedics, neurology, oncology, and more.";
  } else if (input.includes("payment methods") || input.includes("payment") || input.includes("settle bills") || input.includes("do you accept")) {
    botText = "We accept cash, credit/debit cards, and mobile money.";
  } else if (input.includes("treatment costs") || input.includes("cost")) {
    botText = "Contact our billing department for a detailed estimate.";
  } else if (input.includes("medical records")) {
    botText = "Medical records can be accessed through our patient portal. Contact us for login details.";
  } else if (input.includes("wellness programs") || input.includes("packages")) {
    botText = "Yes, we offer wellness programs as well as health packages, including health check-ups, fitness assessments, and dietary consultations.";
  } else if (input.includes("bring for admission")) {
    botText = "Bring your ID, insurance details, medical records, and personal necessities.";
  } else if (input.includes("emergency room") || input.includes("need to visit the emergency room")) {
    botText = "If you're experiencing severe pain, shortness of breath, chest pain, uncontrolled bleeding, or other life-threatening symptoms, please visit the emergency room immediately.";
  } else if (input.includes("second opinion")) {
    botText = "Yes, you can request a second opinion from another specialist. Our staff will assist you in scheduling the consultation.";
  } else if (input.includes("mental health services") || input.includes("psychology") || input.includes("psychologist")) {
    botText = "Yes, we provide counseling, psychiatric evaluations, therapy, and other mental health services.";
  } else if (input.includes("update personal details")) {
    botText = "You can update your information by visiting the reception desk or contacting our customer service team.";
  } else if (input.includes("forget appointment") || input.includes("forgotten appointment")) {
    botText = "If you miss your appointment, please contact the hospital as soon as possible to reschedule or cancel without penalties.";
  } else if (input.includes("request prescription refill")) {
    botText = "To request a refill, contact our pharmacy or your doctor directly through the hospital portal or call our pharmacy department.";
  } else if (input.includes("copy of medical report")) {
    botText = "Yes, you can request a copy of your medical report through our patient services department or via the online portal.";
  } else if (input.includes("parking")) {
    botText = "Yes, we offer ample parking space for visitors and patients.";
  } else if (input.includes("accommodation for out-of-town patients")) {
    botText = "We can assist in finding nearby accommodation options for patients traveling from out of town.";
  } else if (input.includes("cafes or restaurants") || input.includes("cafeteria")) {
    botText = "Yes, we have a cafeteria and several food outlets that serve meals and snacks during hospital hours.";
  } else if (input.includes("diagnostic services") || input.includes("imaging") || input.includes("scan") || input.includes("x-ray")) {
    botText = "Yes, we have state-of-the-art diagnostic imaging services available for a wide range of tests, including X-rays, CT scans, and MRIs.";
  } else if (input.includes("physiotherapy")) {
    botText = "Yes, our physiotherapy department offers treatment for a variety of conditions, including rehabilitation after surgery or injury.";
  } else if (input.includes("vaccination services") || input.includes("vaccination") || input.includes("vaccine")) {
    botText = "Yes, we offer vaccination services for children, adults, and travelers. Please check our vaccine schedule for more details.";
  } else if (input.includes("health and safety measures")) {
    botText = "We follow strict health protocols, including sanitization, temperature checks, and mask-wearing requirements to ensure the safety of everyone.";
  } else if (input.includes("COVID-19 symptoms")) {
    botText = "If you exhibit any COVID-19 symptoms, please contact us immediately for guidance on testing and treatment options.";
  } else if (input.includes("report adverse event")) {
    botText = "If you experience any issues, please inform our staff immediately or contact our patient services department for assistance.";
  } else if (input.includes("prescription online")) {
    botText = "Yes, if you’ve had a consultation with one of our doctors, you can request a prescription via our online portal.";
  } else if (input.includes("follow-up consultation online")) {
    botText = "You can schedule a follow-up consultation through the hospital portal or by calling the hospital directly.";
  } else if (input.includes("access medical records online")) {
    botText = "Yes, you can access your medical records and test results securely through our patient portal.";
  } else if (input.includes("health awareness programs")) {
    botText = "Yes, we offer health awareness seminars and workshops on various topics like diabetes management, heart health, and wellness. Please check our website for upcoming events.";
  } else if (input.includes("leave feedback") || input.includes("feedback")) {
    botText = "You can leave feedback through our online survey, directly at the reception desk, or by emailing us at customerexperience@veteranmissionhospitals.org or leave us a message on our contact us page.";
  } else if (input.includes("job") || input.includes("jobs") || input.includes("vacancies") || input.includes("careers")) {
    botText = "We currently have several job openings. Please visit our 'Careers' page on our website or contact our HR department for more details on available vacancies.";
  } else if (input.includes("discounts or loyalty programs") || input.includes("discount")) {
    botText = "Yes, we have special programs for loyal patients and offers for various services. Please inquire at the reception for more details.";
  } else if (input.includes("health screening")) {
    botText = "Yes, we offer health screening packages for early detection of conditions such as cancer, heart disease, diabetes, and hypertension.";
  } else if (input.includes("patient support groups")) {
    botText = "Yes, we offer support groups for various conditions, including cancer, chronic illnesses, and mental health. These groups provide emotional support and information.";
  } else if (input.includes("wellness and lifestyle coaching")) {
    botText = "Yes, we provide wellness programs focused on nutrition, weight management, stress management, and overall health improvement.";
  } else if (input.includes("patient confidentiality")) {
    botText = "We adhere strictly to patient confidentiality policies. Your medical information will not be shared without your consent, except as required by law.";
  } else if (input.includes("bring my pet") || input.includes("pets")) {
    botText = "Pets are not allowed in patient areas unless they are certified service animals. Please check with the hospital before bringing pets to ensure compliance with our policy.";
  } else if (input.includes("stay overnight") || input.includes("overnight stay")) {
    botText = "If you need an overnight stay, our staff will assist with your admission and provide details about your room, meals, and additional services.";
  } else if (input.includes("surgery") || input.includes("prepare for surgery") || input.includes("recovery period after surgery")) {
    if (input.includes("expect during my surgery")) {
      botText = "Our team will explain the procedure in detail before your surgery. You will be under the care of experienced surgeons, anesthesiologists, and nursing staff.";
    } else if (input.includes("prepare for surgery")) {
      botText = "Depending on the type of surgery, our team will provide you with pre-operative instructions, including fasting, medication adjustments, and what to bring on the day of surgery.";
    } else if (input.includes("recovery period")) {
      botText = "Recovery times vary depending on the type of surgery. Your doctor will provide you with personalized aftercare instructions to ensure the best recovery process.";
    }
  } else if (input.includes("pediatric services") || input.includes("pediatric") || input.includes("paediatrics") || input.includes("pediatrics") || input.includes("paediatrics")) {
    botText = "We offer a range of pediatric services, including well-child checkups, vaccinations, treatment for childhood illnesses, and pediatric surgery.";
  } else if (input.includes("social media") || input.includes("socials") || input.includes("follow") || input.includes("media") || input.includes("pages")) {
    botText = "You can follow us on all social media platforms like Facebook, LinkedIn, TikTok, X, Instagram, etc. at @theveteranmissionhospitals.";
  } else if (input.includes("free Wi-Fi") || input.includes("Wi-Fi for patients") || input.includes("Wi-Fi for visitors") || input.includes("wifi")) {
    botText = "Yes, we offer free Wi-Fi throughout the hospital for both patients and visitors.";
  } else if (input.includes("entertainment options") || input.includes("patient entertainment") || input.includes("entertainment")) {
    botText = "Yes, we provide television access in patient rooms, and some areas of the hospital have reading material and entertainment options.";
  } else if (input.includes("lounges") || input.includes("waiting areas for visitors") || input.includes("waiting area")) {
    botText = "Yes, we have designated waiting areas and lounges for visitors in different departments.";
  } else if (input.includes("meals for patients") || input.includes("meals provided") || input.includes("meal") || input.includes("food")) {
    botText = "Yes, patients receive meals tailored to their specific medical needs and dietary restrictions. Family members can also purchase meals from the hospital cafeteria.";
  } else if (input.includes("advanced medical technology") || input.includes("medical equipment")) {
    botText = "Yes, we are equipped with the latest medical technology, including advanced diagnostic tools, surgical equipment, and monitoring devices.";
  } else if (input.includes("patient experience")) {
    botText = "We are committed to providing excellent patient care and a positive experience. If you have any feedback, please let us know.";
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
    if (isVisible) {
      setMessages([]); // Clear messages when chat is closed
    }
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
              <img
                src={botProfileImage}
                alt="Digital Assistant"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h1 className="text-lg font-semibold">TVMH Digital Assistant</h1>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <p className="text-sm text-gray-200">Online</p>
                </div>
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
