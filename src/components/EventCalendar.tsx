"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Updated events for a student-teacher calendar with programming courses
const events = [
  {
    id: 1,
    title: "Python Workshop",
    time: "9:00 AM - 10:30 AM",
    description: "Join the Python workshop to learn about data structures and algorithms.",
  },
  {
    id: 2,
    title: "Assignment Submission",
    time: "11:59 PM",
    description: "Submit your Java assignment on OOP before the deadline.",
  },
  {
    id: 3,
    title: "Teacher's Office Hours",
    time: "2:00 PM - 4:00 PM",
    description: "Meet with Professor Sarah during her office hours to discuss C++ concepts.",
  },
  {
    id: 4,
    title: "C++ Exam",
    time: "1:00 PM - 3:00 PM",
    description: "Prepare for and attend the C++ exam. Don't forget to bring your ID and stationery.",
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting",
    time: "4:00 PM - 5:30 PM",
    description: "Parent-teacher meeting for progress review. Discuss the student's academic growth and areas for improvement.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Upcoming Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="event-card p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-darkPurple even:border-t-darkPurple hover:bg-[#441752] hover:scale-105 transition-all duration-300 ease-in-out group"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600 group-hover:text-white">{event.title}</h1>
              <span className="text-gray-300 text-xs group-hover:text-white">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm group-hover:text-white">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

// External CSS styles
const styles = `
  .event-card {
    background-color: #f9f9f9;
    border-left: 4px solid #5A336B;
    transition: all 0.3s ease;
  }

  .event-card:hover {
    background-color: #441752;
    color: white;
    border-left: 4px solid #320f29;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .event-card:hover h1,
  .event-card:hover span,
  .event-card:hover p {
    color: white;
  }

  .border-t-darkPurple {
    border-top-color: #5A336B;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
