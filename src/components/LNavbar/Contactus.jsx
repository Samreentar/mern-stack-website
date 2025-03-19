"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactUsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted", inputValues);

    try {
      const response = await fetch("http://localhost:8080/api/v1/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValues),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      alert("Message sent successfully!");
      setInputValues({ name: "", email: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const isDisabled = Object.values(inputValues).some((value) => value === "");

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="md:hidden">
          <button type="button" className="text-15px font-medium" onClick={openModal}>
            Contact Us
          </button>
        </div>
        <div className="hidden md:block">
          <button type="button" className="text-15px font-medium space-links" onClick={openModal}>
            Contact Us
          </button>
        </div>
      </div>


      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* Transparent background for the entire modal */}
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            {/* Transparent dialog panel */}
            <Dialog.Panel className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-2xl p-6 transform transition-all">
              <h2 className="text-2xl font-semibold text-center text-indigo-800 mb-4">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Fill out the form below or reach out to us directly!
              </p>

              {/* Contact Methods */}
              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://wa.me/92450515175"
                  className="flex items-center p-3 bg-[#25D366] text-white rounded-lg shadow-md hover:bg-[#128C7E] transition"
                >
                  <FaWhatsapp size={20} className="mr-2" /> WhatsApp
                </a>
                <a
                  href="mailto:wishmanoor679@gmail.com"
                  className="flex items-center p-3 bg-[#0078D4] text-white rounded-lg shadow-md hover:bg-[#005A9E] transition"
                >
                  <FaEnvelope size={20} className="mr-2" /> Email
                </a>
                <a
                  href="tel:+92450515175"
                  className="flex items-center p-3 bg-[#28A745] text-white rounded-lg shadow-md hover:bg-[#218838] transition"
                >
                  <FaPhone size={20} className="mr-2" /> Call
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputValues.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputValues.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={inputValues.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    rows="4"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="w-full py-3 bg-[#441752] text-white rounded-lg shadow-lg hover:bg-[#6e1f69] transition"
                >
                  Send Message
                </button>
              </form>

              {/* Cancel Button */}
              <button
                onClick={closeModal}
                className="mt-4 w-full py-2 text-sm text-white bg-[#441752] hover:bg-[#6e1f69] rounded-lg border border-[#6e1f69] transition"
              >
                Cancel
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactUsForm;



