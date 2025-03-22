"use client";
import Link from "next/link";
import { FaFileAlt, FaUpload } from "react-icons/fa";

const ExamPortal: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="p-12 bg-white rounded-3xl shadow-xl w-full max-w-4xl border-2 border-[#660066] relative top-[-30px] transition-all duration-300 hover:shadow-2xl">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-[#660066] text-center mb-12 tracking-wide">
          Exam Portal
        </h2>

        {/* Portal Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* View Exam Box */}
          <Link
            href="/Dashboard/list/exams/ExamView"
            className="flex flex-col items-center justify-center p-12 h-52 w-full bg-white text-[#660066] border-2 border-[#660066] rounded-2xl text-2xl font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#660066] hover:text-white hover:scale-105"
          >
            
            <FaFileAlt className="text-6xl mb-3 transition-all duration-300 hover:text-white" />
            View Exam Papers
          </Link>

          {/* Submit Exam Box */}
          <Link
            href="/Dashboard/list/exams/ExamSubmission"
            className="flex flex-col items-center justify-center p-12 h-52 w-full bg-white text-[#800080] border-2 border-[#800080] rounded-2xl text-2xl font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#800080] hover:text-white hover:scale-105"
          >
            <FaUpload className="text-6xl mb-3 transition-all duration-300 hover:text-white" />
            Submit Exam
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamPortal;
