import React, { useState } from "react";
import Footer from "./Footer";
import WhatsappIcon from "./WhatsappIcon";
import GalPhoto1 from "./Images/hawa.jpg";
import GalPhoto2 from "./Images/dahabo.jpg";
import ChatBot from "./ChatBot";

const Gallery = () => {
  // Sample albums
  const albums = [
    {
      cover: "https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1729292323~exp=1729295923~hmac=faa4e5c738c9447339ac19832580b924af5d75f1b09443c0db89aeb584abaa56&w=826",
      title: "Our Hospital's Grand Opening",
      images: [
        "https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?t=st=1729292323~exp=1729295923~hmac=faa4e5c738c9447339ac19832580b924af5d75f1b09443c0db89aeb584abaa56&w=826",
        "https://i.pinimg.com/564x/03/cf/c5/03cfc5f07e8c0e0bdf91d7a820ee3c2b.jpg",
        "https://i.pinimg.com/564x/3a/c2/ea/3ac2eaaab921f25c15a982a332278090.jpg",
      ]
    },
    {
      cover: "https://i.pinimg.com/564x/06/b4/1b/06b41b66e9951bc8c6f6dd3abcbb1242.jpg",
      title: "Health Awareness Camp",
      images: [
        "https://i.pinimg.com/564x/06/b4/1b/06b41b66e9951bc8c6f6dd3abcbb1242.jpg",
        "https://i.pinimg.com/564x/42/bd/12/42bd1210827bf4f8edde9ba0951915bc.jpg",
        "https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224144.jpg?t=st=1729292507~exp=1729296107~hmac=c1c100fce24accd66ee2155c6e3ab158b6009e492cb57c11c036f1c3ae813045&w=826",
      ]
    },
    // Add more albums as needed
  ];

  const upcomingActivities = [
    {
      title: "Annual Health Checkup",
      date: "2024-12-10",
      description: "A free health checkup for our community members. Don't miss this opportunity to get your health evaluated.",
      image: "https://img.freepik.com/free-photo/doctor-patient-examination_1150-11636.jpg", // Activity photo
    },
    {
      title: "Medical Awareness Campaign",
      date: "2024-12-15",
      description: "A community outreach program to raise awareness on various health topics.",
      image: "https://img.freepik.com/free-photo/medical-team-conference_1150-16194.jpg", // Activity photo
    },
    {
      title: "Yoga and Wellness Workshop",
      date: "2025-01-20",
      description: "A day dedicated to improving mental and physical well-being through yoga and wellness practices.",
      image: "https://img.freepik.com/free-photo/fitness-group-yoga-class_1150-10193.jpg", // Activity photo
    },
    // Add more activities as needed
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  // Sample standalone photos
  const photos = [
    "https://img.freepik.com/free-photo/photo1.jpg",
    "https://img.freepik.com/free-photo/photo2.jpg",
    "https://img.freepik.com/free-photo/photo3.jpg",
    "https://img.freepik.com/free-photo/photo4.jpg",
    // Add more photos as needed
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage: "url('https://i.pinimg.com/564x/5a/74/d8/5a74d80f4edfd30c8acd3329c4d865e7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Gallery</h1>
          <p className="text-lg mt-4">Memorable Moments at Our Hospital</p>
        </div>
      </section>

      {/* Gallery Section (Albums) */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Events and Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {albums.map((album, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openAlbum(album)}
            >
              <img
                src={album.cover}
                alt={`Album cover ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-center py-2 w-full">
                {album.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Activities Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-100 w-full">
        <h2 className="text-4xl font-semibold text-center mb-6">Upcoming Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingActivities.map((activity, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src={activity.image}
                  alt={`Activity image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-lg text-gray-600 mb-2">{activity.date}</p>
              <p className="text-gray-800">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-100 w-full">
        <h2 className="text-4xl font-semibold text-center mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={GalPhoto1}  // Corrected to use the photo URL from the array
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Album Modal */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeAlbum}
        >
          <div className="bg-white p-4 max-w-4xl w-full rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeAlbum}
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">{selectedAlbum.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedAlbum.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={GalPhoto2}  // Corrected to use dynamic images from the album
                    alt={`Album image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <WhatsappIcon />
      <ChatBot />
      <Footer />
      
    </div>
  );
};

export default Gallery;
