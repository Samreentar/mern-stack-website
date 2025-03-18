// components/WhyChooseOurProduct.js
import React from "react";

export default function Choose() {
  const features = [
    {
      title: "Accurate Grading",
      description:
        "Leverage advanced AI algorithms to ensure precise and unbiased grading of student responses.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M18 15a6 6 0 1 1 -10.853 -3.529c1.926-2.338 4.763-3.327 3.848-8.47 2.355 1.761 5.84 5.38 2.022 9.406-1.136 1.091-.244 2.767 1.221 2.593.882-.105 2.023-.966 3.23-2.3.532.68.532 1.717.532 2.3z" />
        </svg>
      ),
    },
    {
      title: "Time Efficiency",
      description:
        "Automate grading to save valuable time for educators, allowing them to focus on teaching.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="7" />
          <polyline points="12 9 12 12 13.5 13.5" />
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
      ),
    },
    {
      title: "Scalability",
      description:
        "Easily handle large volumes of exams and student responses without compromising performance.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      title: "Customizable Criteria",
      description:
        "Adjust grading criteria to fit different subjects and exam formats, ensuring flexibility.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      title: "Secure Platform",
      description:
        "Protect student data with robust security measures, maintaining the integrity of the examination process.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "Provide instant feedback to students to enhance their learning experience and improve performance.",
      icon: (
        <svg
          className="h-16 w-16 rounded-full bg-white text-blue-500 p-4 shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <h2 className="ml-24 text-4xl font-bold mb-5 text-center text-purple-800 mt-16">
        Why Choose Exam-Tech Solutions
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#611F69] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-500 rounded-full mr-6 shadow-xl">
                {feature.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-white mt-2">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center bg-gray-100 mt-10">
        <div className="w-10/12 bg-purple-600 h-2 rounded-full"></div>
      </div>
    </section>
  );
}

