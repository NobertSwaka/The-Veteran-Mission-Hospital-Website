import React from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";
import ChatBot from "./ChatBot";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your hospital provide?",
      answer: "Our hospital provides a wide range of services, including emergency care, outpatient services, surgeries, diagnostic imaging, and specialized treatments in various fields such as cardiology, orthopedics, and pediatrics.",
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by calling our reception at (+254) 710 177777 or by using our online appointment system available on our website.",
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact our billing department for more detailed information regarding your specific plan.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid ID, your insurance card, and any relevant medical records or test results. If you are a new patient, please arrive 15 minutes early to complete the necessary paperwork.",
    },
    {
      question: "What are your visiting hours?",
      answer: "Our visiting hours are from 9 AM to 8 PM. However, specific units may have different visiting hours, so please check with the unit for exact times.",
    },
    {
      question: "Do you have emergency services?",
      answer: "Yes, our hospital has a 24/7 emergency department staffed with qualified medical professionals ready to assist you at any time.",
    },
    {
      question: "How can I contact a patient?",
      answer: "You can contact a patient by calling the hospital's main line and asking for their room number. We will connect you if the patient is available to speak.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 pt-24">
      {/* Hero Section */}
      <section className="relative bg-green-400 h-[250px] w-full">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg mt-4">Your Questions Answered</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <WhatsappIcon />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default FAQ;
