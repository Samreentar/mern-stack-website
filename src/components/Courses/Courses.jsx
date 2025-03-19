import React, { useState } from "react";

const names = [
  {
    module: "AI-Powered Grading",
    description:
      "Our AI-driven grading system utilizes sophisticated algorithms to assess student responses. It ensures grading accuracy and consistency while eliminating biases, offering fair and objective evaluations. By automating the grading process, this feature saves educators valuable time, allowing them to focus on meaningful student interactions and personalized support.",
    category: "Auto",
  },
  {
    module: "OCR Capabilities",
    description:
      "The Optical Character Recognition (OCR) feature seamlessly converts handwritten answers into editable digital text. This tool is capable of processing diverse handwriting styles and supports multiple languages. With this functionality, educators can digitize traditional paper-based exams, integrating them into modern digital grading workflows with ease and accuracy.",
    category: "OCR",
  },
  {
    module: "Real-Time Analytics",
    description:
      "Our platform offers powerful real-time analytics, giving educators instant insights into student performance and exam trends. These data points help teachers identify areas where students are excelling or struggling. With this information, adjustments to teaching methods and exam strategies can be made swiftly, improving the overall learning experience for students.",
    category: "Analytics",
  },
  {
    module: "Customizable Exam Creation",
    description:
      "Design custom exams tailored to your specific curriculum and educational goals. The platform supports various question formats such as multiple-choice, short-answer, and essay questions, enabling educators to create dynamic, well-rounded assessments. This flexibility ensures that assessments can align with specific teaching objectives and challenge students appropriately.",
    category: "Creation",
  },
  {
    module: "User-Friendly Interface",
    description:
      "The platform boasts an intuitive and user-friendly interface, ensuring that all users—whether students, teachers, or administrators—can navigate it effortlessly. Clear navigation, simple drag-and-drop features, and a visually pleasing layout make it accessible to users of all technical skill levels, enhancing productivity and user experience.",
    category: "Interface",
  },
];

const NamesList = () => {
  const [selectedButton, setSelectedButton] = useState("Auto");

  const filteredNames = names.filter((name) => name.category === selectedButton);

  const nameElements = filteredNames.map((name, index) => (
    <div
      key={index}
      className="p-8 bg-[#611F69] bg-opacity-100 rounded-lg shadow-xl hover:shadow-2xl transition-all mt-8 flex items-center justify-center text-center"
      style={{ minHeight: "250px" }} // Consistent height for centering
    >
      <div className="text-lg sm:text-base text-white font-medium">
        <h3 className="text-3xl mb-4">{name.module}</h3>
        <p className="text-sm sm:text-base leading-relaxed mb-4">{name.description}</p>
        <button className="mt-4 px-6 py-3 bg-white text-[#611F69] font-semibold rounded-lg hover:bg-gray-200">
          Explore More
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-[#F5EFFF] min-h-screen flex flex-col items-center">
      <div
        id="courses-section"
        className="w-full max-w-2xl py-12 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          Unlock the Potential of Smart Exam Solutions
        </h2>
      </div>
      <div className="flex nowhitespace space-x-5 rounded-xl p-1 overflow-x-auto mt-4">
        {["Auto", "OCR", "Analytics", "Creation", "Interface"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedButton(category)}
            className={`${
              selectedButton === category
                ? "text-black border-b-2 border-[#611F69]"
                : "text-lightgrey"
            } pb-2 text-lg`}
          >
            {category === "Auto"
              ? "AI-Driven Grading"
              : category === "OCR"
              ? "OCR Capabilities"
              : category === "Analytics"
              ? "Real-Time Analytics"
              : category === "Creation"
              ? "Customizable Exam Creation"
              : "User-Friendly Interface"}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8">
          {nameElements.length > 0 ? (
            nameElements
          ) : (
            <p className="text-center text-lg text-gray-600">No data to show</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NamesList;

