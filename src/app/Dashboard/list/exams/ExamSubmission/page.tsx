"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";

const ExamSubmission: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post("http://localhost:4000/test-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(`✅ File "${file.name}" uploaded successfully!`);
      console.log(response.data);
      setFile(null);
    } catch (error) {
      console.error("❌ File upload failed:", error);
      alert("❌ File upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="p-8 bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-300 relative top-[-60px]">
        
        {/* Stylish Purple Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700 tracking-wide">
          Submit Your Exam
        </h2>

        {/* Upload Box with Solid Purple Border and Purple Icon */}
        <label className="w-[90%] mx-auto flex flex-col items-center justify-center p-10 border-4 border-solid border-purple-700 rounded-xl cursor-pointer transition-all duration-300 hover:border-purple-900 hover:bg-purple-200 hover:shadow-2xl">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <FaFileUpload className="text-6xl text-purple-700 mb-3 transition-transform duration-300 hover:scale-125" />
          <span className="text-gray-700 font-medium text-lg transition-colors duration-300 hover:text-purple-900">
            {file ? `📄 ${file.name}` : "Click to Upload Your Exam File"}
          </span>
        </label>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={uploading}
          className={`mt-8 w-full bg-[#4B0F50] text-white px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:bg-[#3A0C3E] hover:scale-105 active:scale-95 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {uploading ? "Uploading..." : "Submit Exam"}
        </button>
      </div>
    </div>
  );
};

export default ExamSubmission;
