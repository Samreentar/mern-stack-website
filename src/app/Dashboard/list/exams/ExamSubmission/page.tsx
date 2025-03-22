"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";
import { MdOutlineUploadFile } from "react-icons/md";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md border border-gray-200 relative top-[-80px]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4 flex items-center justify-center gap-2">
          <MdOutlineUploadFile className="text-blue-600 text-3xl" />
          Submit Your Exam
        </h2>

        <label className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition">
          <input type="file" onChange={handleFileChange} className="hidden" />
          <FaFileUpload className="text-4xl text-gray-600 mb-2" />
          <span className="text-gray-700 font-medium">
            {file ? `📄 ${file.name}` : "Choose Exam File"}
          </span>
        </label>

        <button
          onClick={handleSubmit}
          disabled={uploading}
          className={`mt-6 w-full bg-purple-600 text-black px-4 py-2 rounded-md text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md ${
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
