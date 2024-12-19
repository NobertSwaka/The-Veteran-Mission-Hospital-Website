import React from "react";
import Footer from "./Footer"; // Import Footer component
import WhatsappIcon from "./WhatsappIcon";

const SpecializedClinicTimetable = () => {
  const timetable = [
    {
      day: "Monday",
      clinics: [
        "Chronic Disease Clinic",
        "Cardiology",
        "Nephrology",
        "Orthopedic",
      ],
      time: "10:00 AM",
    },
    {
      day: "Tuesday",
      clinics: ["General Surgery", "Orthopedic", "Pulmonology", "Urology"],
      time: "10:00 AM",
    },
    {
      day: "Wednesday",
      clinics: [
        "Chronic Disease Clinic",
        "General Surgery",
        "Orthopedic",
        "Dermatology",
        "Paediatric Surgery",
      ],
      time: "10:00 AM",
    },
    {
      day: "Thursday",
      clinics: [
        "Gastroenterology",
        "Pulmonology",
        "Orthopedic",
        "Dermatology",
        "Mental Health",
      ],
      time: "10:00 AM",
    },
    {
      day: "Friday",
      clinics: [
        "Chronic Disease Clinic",
        "Nephrology",
        "Neuro-spine",
        "Maxillofacial",
      ],
      time: "10:00 AM",
    },
    {
      day: "Saturday",
      clinics: [
        "Gastroenterology",
        "Plastic Surgery",
        "Orthopedic",
        "Cardiovascular",
      ],
      time: "10:00 AM",
    },
    {
      day: "Sunday",
      clinics: ["ENT", "Urology", "Paediatric Surgery"],
      time: "10:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-20"> {/* Added mt-20 for margin-top */}
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          Specialized Clinics Timetable
        </h1>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-green-200 text-gray-800">
              <th className="border border-gray-300 p-3 w-1/5 text-left">
                Day
              </th>
              <th className="border border-gray-300 p-3 w-2/5 text-left">
                Specialized Clinics
              </th>
              <th className="border border-gray-300 p-3 w-1/5 text-left">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-green-50 hover:scale-105 transform transition-transform duration-200`}
              >
                <td className="border border-gray-300 p-3 font-medium">
                  {entry.day}
                </td>
                <td className="border border-gray-300 p-3">
                  {entry.clinics.map((clinic, i) => (
                    <div key={i}>{clinic}</div>
                  ))}
                </td>
                <td className="border border-gray-300 p-3">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<WhatsappIcon />
      {/* Footer added here */}
    </div>
    
  );
};

export default SpecializedClinicTimetable;
