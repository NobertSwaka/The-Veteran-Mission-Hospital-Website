import React from "react";
import teamMember1 from "../pages/Images/member1.jpeg";
import teamMember2 from "../pages/Images/member2.jpg";
import teamMember3 from "../pages/Images/member3.jpeg";
import teamMember4 from "../pages/Images/CEO.jpg";
import teamMember5 from "../pages/Images/member5.jpg";
import Footer from "./Footer";

const teamSections = [
  {
    title: "Administration",
    members: [
      {
        name: "Dr. Kendrick MacDowell Muganda",
        role: "Chief Executive Officer",
        image: teamMember4,
      },
      {
        name: "Alice Johnson",
        role: "Chief Medical Officer",
        image: teamMember1,
      },
      {
        name: "Kevin Lee",
        role: "Director of Operations",
        image: teamMember3,
      },
    ],
  },
  {
    title: "Pharmacy",
    members: [
      {
        name: "David Kim",
        role: "Head of Pharmacy",
        image: teamMember2,
      },
    ],
  },
  {
    title: "IT Department",
    members: [
      {
        name: "Sam Simpsons",
        role: "Head of IT",
        image: teamMember5,
      },
    ],
  },
  // Additional sections can be added here
];

const OurTeam = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[90px]"> {/* Adjust the padding to match header height */}
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptop_219728-4554.jpg?w=826')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Meet Our Team</h1>
          <p className="text-lg mt-4">
            Dedicated Professionals Committed to Exceptional Care
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <div className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8">
              {section.title}
            </h3>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;
