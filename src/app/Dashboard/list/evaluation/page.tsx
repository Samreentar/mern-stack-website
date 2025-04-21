"use client";
import Insertpaper from "@/components/Dashboard/Insertpaper";
import Manualinsert from "@/components/Dashboard/Manualinsert";
import EventCalendar from "@/components/EventCalendar";
import React, { useState } from "react";

const Evaluation = () => {
  const [file, setFile] = useState(null); // state to hold the uploaded file
  const [loading, setLoading] = useState(false); // optional: show loading while processing
  const [output, setOutput] = useState(""); // to store extracted code

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // attach PDF file

    try {
      setLoading(true);

      const res = await fetch("http://localhost:4000/api/ocr/extract-code", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Extracted Code:", data.extractedCode);
      setOutput(data.extractedCode); // show output on screen too

    } catch (err) {
      console.error("OCR failed:", err);
      alert("Something went wrong while extracting code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-x-5 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <Insertpaper />

        {/* File Upload
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 border rounded-md"
        /> */}

        {/* Grade Now Button */}
        <div className="flex justify-center bg-lamaSky rounded-xl">
          <button
            onClick={handleSubmit}
            className="flex w-1/3 h-9 rounded-md justify-center items-center bg-blue-600 text-white hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Grading..." : "Grade Now"}
          </button>
        </div>

        {/* Output Area */}
        {output && (
          <div className="mt-4 p-4 bg-gray-100 border rounded">
            <h2 className="font-semibold mb-2">Extracted Code:</h2>
            <pre className="whitespace-pre-wrap text-sm">{output}</pre>
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default Evaluation;
