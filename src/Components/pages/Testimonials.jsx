import React from 'react';
import Footer from './Footer';
import image1 from '../pages/Images/doc1.jpeg';
import image2 from '../pages/Images/doc2.jpeg';
import image3 from '../pages/Images/doc3.jpeg';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Example Inc.',
    text: 'The Veteran Mission Hospitals provided exceptional care, and I am forever grateful for their compassion and professionalism.',
    image: image1,
  },
  {
    name: 'Jane Smith',
    title: 'Teacher, Example School',
    text: 'The staff at Veteran Mission Hospitals truly goes above and beyond to ensure patients are comfortable and well-informed.',
    image: image2,
  },
  {
    name: 'Samuel Johnson',
    title: 'Engineer, Example Corp.',
    text: 'I received excellent care and support from the team at Veteran Mission Hospitals. Highly recommended!',
    image: image3,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100 min-h-screen mt-20"> {/* Added mt-20 for margin-top */}
      <h2 className="text-3xl font-semibold text-center mb-12">Testimonials</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
