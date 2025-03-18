import React from "react";

// MENTORS DATA
const mentors = [
  {
    id: 1,
    name: "Wishma Noor ",
    specialization: "C++ Specialist",
    imageSrc: "/assets/mentor/Wishma.jpeg", // Ensure this file exists
    description:
      "A skilled mentor with deep expertise in C++ programming, focusing on efficient system design and algorithm optimization.",
  },
  {
    id: 2,
    name: "Samreen Tariq",
    specialization: "Python Specialist",
    imageSrc: "/assets/mentor/Samreen.jpeg", // Ensure this file exists
    description:
      "An expert in Python programming, with a strong background in data science, AI, and scripting solutions.",
  },
  {
    id: 3,
    name: "Maira Nawaz",
    specialization: "Java Specialist",
    imageSrc: "/assets/mentor/Maira.jpeg", // Ensure this file exists
    description:
      "An experienced Java developer specializing in building robust and scalable enterprise applications.",
  },
];

const Mentor = () => {
  return (
    <div
      id="mentors-section"
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F5EFFF" }} // Set background color to #F5EFFF
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Meet Our Expert Mentors
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our skilled mentors are here to guide you on your journey to success.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="group bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-xl hover:shadow-[#611F69] hover:border-[#611F69] transition-all duration-500"
            style={{
              backgroundColor: "transparent", // Transparent background
              padding: "12px", // Reduced padding inside the card
            }}
          >
            {/* Adjusted Image Styling */}
            <div className="relative" style={{ height: "250px", marginBottom: "12px" }}>
              <img
                src={mentor.imageSrc}
                alt={mentor.name}
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center"> {/* Reduced padding here */}
              <h3 className="text-2xl font-bold text-gray-800">{mentor.name}</h3>
              <p className="text-md text-blue-500 font-medium mt-2">
                {mentor.specialization}
              </p>
              <p className="mt-4 text-gray-600 text-sm">{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
