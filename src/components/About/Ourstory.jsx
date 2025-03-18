import React from "react";
import { FaLightbulb, FaRobot, FaCog, FaGlobe } from "react-icons/fa";

const Ourstory = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="text-center mb-12 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black relative z-10">
          Discover <span className="text-[#611F69]">Our Story</span>
        </h1>
        
        <div className="absolute inset-0 z-0">
          <div className="w-32 h-32 bg-[#611F69] rounded-full blur-3xl opacity-30 top-[-20px] left-[calc(50%-16rem)]"></div>
          <div className="w-32 h-32 bg-[#611F69] rounded-full blur-3xl opacity-30 top-[10px] right-[calc(50%-16rem)]"></div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className="p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]"
          style={{ backgroundColor: "#611F69" }} // Purple background
        >
          <div className="flex items-center space-x-4">
            <FaLightbulb className="text-white text-5xl" />
            <h2 className="text-xl font-semibold text-white">
              Revolutionizing Education
            </h2>
          </div>
          <p className="mt-4 text-white">
            We identified the inefficiencies in traditional grading and
            developed a solution that ensures fair and unbiased assessments
            through AI-powered tools.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]"
          style={{ backgroundColor: "#611F69" }} // Purple background
        >
          <div className="flex items-center space-x-4">
            <FaRobot className="text-white text-5xl" />
            <h2 className="text-xl font-semibold text-white">
              AI-Powered Solutions
            </h2>
          </div>
          <p className="mt-4 text-white">
            Our platform leverages AI technologies like OCR and LLMs to deliver
            accurate, efficient, and secure grading systems.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]"
          style={{ backgroundColor: "#611F69" }} // Purple background
        >
          <div className="flex items-center space-x-4">
            <FaCog className="text-white text-5xl" />
            <h2 className="text-xl font-semibold text-white">
              Advanced AI Technology
            </h2>
          </div>
          <p className="mt-4 text-white">
            By automating grading processes, we empower educators to focus on
            fostering student growth and innovation in education.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(97,31,105,0.6)]"
          style={{ backgroundColor: "#611F69" }} // Purple background
        >
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-white text-5xl" />
            <h2 className="text-xl font-semibold text-white">
              Seamless User Experience
            </h2>
          </div>
          <p className="mt-4 text-white">
            Our intuitive platform ensures accessibility and simplicity,
            enabling users to navigate effortlessly and achieve results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourstory;
