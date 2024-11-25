// src/Components/pages/ClinicsCarousel.jsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const clinicsData = [
  {
    id: 1,
    name: 'Cardiology',
    day: 'Monday',
    time: '9:00 AM - 12:00 PM',
  },
  {
    id: 2,
    name: 'Neurology',
    day: 'Tuesday',
    time: '1:00 PM - 4:00 PM',
  },
  {
    id: 3,
    name: 'Pediatrics',
    day: 'Wednesday',
    time: '10:00 AM - 1:00 PM',
  },
  {
    id: 4,
    name: 'Orthopedics',
    day: 'Thursday',
    time: '2:00 PM - 5:00 PM',
  },
  {
    id: 5,
    name: 'Dermatology',
    day: 'Friday',
    time: '11:00 AM - 2:00 PM',
  },
  {
    id: 6,
    name: 'Maternity',
    day: 'Friday',
    time: '11:00 AM - 2:00 PM',
  },
  {
    id: 7,
    name: 'Pulmonology',
    day: 'Friday',
    time: '11:00 AM - 2:00 PM',
  },
  {
    id: 8,
    name: 'NeuroSurgical',
    day: 'Friday',
    time: '11:00 AM - 2:00 PM',
  },
  {
    id: 9,
    name: 'Nutritional',
    day: 'Friday',
    time: '11:00 AM - 2:00 PM',
  },
  // Add more clinics as needed
];

const ClinicsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clinicsPerPage = 3;

  const totalClinics = clinicsData.length;

  const next = () => {
    if (currentIndex < totalClinics - clinicsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-burgundy">
      <h2 className="text-2xl font-bold mb-4 text-center text-green">Specialized Clinics</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${(100 / clinicsPerPage) * currentIndex}%)` }}
          >
            {clinicsData.map((clinic) => (
              <div
                key={clinic.id}
                className="flex-none w-full sm:w-1/2 md:w-1/3 px-2"
              >
                <div className="bg-green-500 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">{clinic.name} Clinic</h3>
                  <p className="text-white"><strong>Day:</strong> {clinic.day}</p>
                  <p className="text-white"><strong>Time:</strong> {clinic.time}</p>
                  <Link to={`/BookAppointment`}>
                    <button className="mt-4 w-full bg-red-700 hover:bg-yellow-800 text-white font-semibold py-2 rounded">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg border-2 border-white"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
        )}

        {currentIndex < totalClinics - clinicsPerPage && (
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg border-2 border-white"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ClinicsCarousel;
