import React from "react";
import { FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Courses = () => {
  return (
    <div className="h-full min-h-screen w-full bg-gray-900 pt-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold text-black mb-4">
          Courses We Evaluate
        </h2>
      </div>

      {/* Prominent Text */}
      <div className="text-center mb-16">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            lineHeight: "1.3",
          }}
        >
          Our AI-powered *Smart Grader* provides detailed insights into programming assignments, ensuring accuracy and efficiency.
        </p>
      </div>

      {/* Courses Section */}
      <div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto">
        {/* C++ Course */}
        <div className="rounded-xl bg-[#5B1C61] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(91,28,97,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <SiCplusplus className="text-[#5B1C61] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">C++</h3>
          <p className="text-white mt-3">
          Our AI Smart Grader evaluates C++ assignments with precision and speed.  
  It deeply analyzes memory management, object-oriented programming (OOP) principles, and algorithm efficiency.  
  Additionally, it assesses code readability, modularity.  
            
          </p>
        </div>

        {/* Python Course */}
        <div className="rounded-xl bg-[#5B1C61] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(91,28,97,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <FaPython className="text-[#5B1C61] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">Python</h3>
          <p className="text-white mt-3">
            Our AI-powered evaluation system provides instant feedback on Python code, ensuring clarity, efficiency, and correctness.  
            It verifies syntax accuracy, logical flow, and adherence to PEP-8 standards, while also analyzing loops, recursion, functions, and OOP implementation.  
            
          </p>
        </div>

        {/* Java Course */}
        <div className="rounded-xl bg-[#5B1C61] p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(91,28,97,0.6)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-white/40">
            <FaJava className="text-[#5B1C61] text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-white mt-6">Java</h3>
          <p className="text-white mt-3">
            Our AI-driven Smart Grader evaluates Java code with deep analysis and intelligent feedback.It examines OOP structure, multi-threading, data structures, and exception handling to ensure code reliability and maintainability.  
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
