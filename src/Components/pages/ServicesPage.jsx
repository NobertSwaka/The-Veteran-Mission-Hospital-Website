// src/components/pages/AboutPage.jsx
import React from 'react';

const ServicesPage= () => {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-1d6c4f1d8f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // Replace with your desired image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-2xl">
            Committed to Excellence in Healthcare
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              At The Veteran Mission Hospitals, our mission is to provide exceptional medical care with compassion and integrity. We strive to enhance the health and well-being of our community through comprehensive healthcare services, cutting-edge technology, and a dedicated team of professionals.
            </p>
          </div>
          
          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              Our vision is to be the leading healthcare provider, recognized for our commitment to patient-centered care, innovative treatments, and continuous improvement. We aim to create a healing environment where every patient receives personalized and effective care.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Our History</h3>
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1d6c4f1d8f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" // Replace with your desired image URL
                alt="Our History"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <p className="text-gray-700 mb-4">
                Founded in 1990, The Veteran Mission Hospitals began as a small community clinic dedicated to serving veterans and their families. Over the years, we have expanded our facilities and services to become a full-fledged hospital equipped with state-of-the-art medical technology and specialized departments.
              </p>
              <p className="text-gray-700">
                Our commitment to excellence has earned us numerous accolades and the trust of thousands of patients. We continue to grow and innovate, always putting the needs of our patients first.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual team member images
                alt="Dr. John Doe"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">Dr. John Doe</h4>
                <p className="text-gray-600">Chief Medical Officer</p>
                <p className="mt-2 text-gray-700">
                  With over 20 years of experience in internal medicine, Dr. Doe leads our medical team with dedication and expertise.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual team member images
                alt="Nurse Jane Smith"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">Nurse Jane Smith</h4>
                <p className="text-gray-600">Head Nurse</p>
                <p className="mt-2 text-gray-700">
                  Nurse Smith ensures that our patients receive compassionate and comprehensive care throughout their stay.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg" // Replace with actual team member images
                alt="Dr. Michael Brown"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">Dr. Michael Brown</h4>
                <p className="text-gray-600">Cardiologist</p>
                <p className="mt-2 text-gray-700">
                  Specializing in cardiovascular health, Dr. Brown is committed to providing top-notch heart care and innovative treatments.
                </p>
              </div>
            </div>
            
            {/* Add more team members as needed */}
            
          </div>
        </div>
      </section>
      
      {/* Our Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Facility 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1d6c4f1d8f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" // Replace with actual facility images
                alt="Advanced Imaging"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Advanced Imaging</h4>
              <p className="text-gray-700 text-center mt-2">
                Equipped with the latest MRI and CT scan technology to ensure accurate diagnoses and effective treatments.
              </p>
            </div>
            
            {/* Facility 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1d6c4f1d8f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" // Replace with actual facility images
                alt="Emergency Services"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">24/7 Emergency Services</h4>
              <p className="text-gray-700 text-center mt-2">
                Our dedicated emergency department is open around the clock, staffed with experienced professionals ready to handle any urgent medical situation.
              </p>
            </div>
            
            {/* Facility 3 */}
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1d6c4f1d8f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" // Replace with actual facility images
                alt="Pediatric Care"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Pediatric Care</h4>
              <p className="text-gray-700 text-center mt-2">
                Specialized care for children and adolescents, providing a comfortable and nurturing environment for our young patients.
              </p>
            </div>
            
            {/* Add more facilities as needed */}
            
          </div>
        </div>
      </section>
      
      {/* Testimonials (Optional) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">What Our Patients Say</h3>
          <div className="space-y-8">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "The Veteran Mission Hospitals provided exceptional care during my surgery. The staff were compassionate and professional throughout my entire stay."
              </p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg" // Replace with actual patient images or avatars
                  alt="Patient 1"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Emily Clark</p>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "From the moment I walked in, I felt welcomed and cared for. The medical team at Veteran Mission Hospitals is top-notch!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with actual patient images or avatars
                  alt="Patient 2"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Mark Johnson</p>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
            </div>
            
            {/* Add more testimonials as needed */}
            
          </div>
        </div>
      </section>
      
      {/* Call to Action (Optional) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Experience Exceptional Care?</h3>
          <p className="text-gray-700 mb-6">
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded"
          >
            Contact Us
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default ServicesPage;
