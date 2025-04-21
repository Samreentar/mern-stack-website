import React, { useState } from "react";

const names = [
  {
    module: "AI-Powered Grading",
    description:
      "Our AI-driven grading system serves as the foundation of our examination platform, bringing a transformative approach to the way student assessments are conducted. By integrating cutting-edge artificial intelligence and machine learning algorithms, this system is designed to evaluate and score student responses with unmatched precision, efficiency, and consistency. Unlike traditional grading methods, which are prone to subjectivity and human error, our AI-powered evaluation process ensures that every student's work is assessed based on clearly defined and objective criteria, promoting fairness, transparency, and accuracy in academic assessments.One of the primary advantages of this AI-driven approach is its ability to eliminate biases that may inadvertently affect manual grading. Human evaluators, despite their best intentions, may be influenced by factors such as handwriting, personal opinions, or even fatigue.",


    category: "Auto",
  },
  {
    module: "OCR Capabilities",
    description:
      "Our Smart Grader comes equipped with a powerful Optical Character Recognition (OCR) feature, designed to seamlessly convert handwritten answers into editable digital text with remarkable accuracy. No matter the handwriting style or language, our OCR technology ensures precise recognition, making it easier than ever to digitize traditional paper-based exams. With this functionality, educators can effortlessly integrate handwritten responses into modern digital grading workflows, eliminating manual transcription and significantly boosting efficiency. This not only saves time but also ensures a faster, smarter, and more accurate grading experience, allowing educators to focus on providing meaningful feedback and fostering student success.",
    category: "OCR",
  },
  {
    module: "Real-Time Analytics",
    description:
      "Our Smart Grader goes beyond just grading—it empowers educators with real-time analytics, offering instant and data-driven insights into student performance and exam trends. With comprehensive visual reports and performance metrics, teachers can quickly identify patterns, strengths, and areas of struggle among students. This powerful functionality enables educators to pinpoint learning gaps, assess question difficulty levels, and refine their teaching strategies for maximum effectiveness. By leveraging these analytics, institutions can make informed decisions to enhance curriculum design, optimize assessment methods, and provide targeted support where it’s needed the most. The ability to access instant performance trends not only improves grading efficiency but also fosters a more adaptive and student-centric learning environment, ensuring that every learner gets the guidance and resources needed to succeed.",
    category: "Analytics",
  },
  {
    module: "Customizable Exam Creation",
    description:
      "Our Smart Grader enables educators to design custom exams that align with their curriculum and learning objectives, ensuring assessments are engaging, diverse, and well-structured. Supporting multiple-choice, short-answer, essay, and coding questions, the platform offers flexible customization to match different difficulty levels and evaluation needs. With intelligent question organization, randomization, and weighting, educators can create balanced and fair assessments that accurately measure student understanding. This adaptability ensures exams are not just a test of knowledge but a tool for meaningful learning and growth.",
    category: "Creation",
  },
  {
    module: "User-Friendly Interface",
    description:
      "Our Smart Grader is designed with an intuitive, user-friendly interface, ensuring that students, teachers, and administrators can navigate the platform effortlessly. With a clean and visually appealing layout, users can easily access essential features without the need for extensive technical knowledge. The platform incorporates clear navigation, responsive design, and simple drag-and-drop functionality, making tasks like creating exams, grading responses, and analyzing performance data seamless and efficient. Whether it’s a teacher setting up assessments, a student submitting answers, or an administrator managing academic records, every interaction is streamlined for maximum productivity. By prioritizing ease of use and accessibility, Smart Grader enhances the overall user experience, allowing educators to focus on teaching, students on learning, and institutions on efficient academic management.",
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

