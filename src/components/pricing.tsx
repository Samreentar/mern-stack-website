import React from 'react';
import Link from 'next/link';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
  payment_link: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Business Plan',
    price: '$69.99/month',
    features: ['AI-Powered Auto-Grading', 'Customizable Exam Creation', 'Role based Access Control', 'Online Examination Management'],
    payment_link: "https://buy.stripe.com/test_00g4ib9Ff0Xfh0cdQQ",
  },
  {
    title: 'Pro Plus Plan',
    price: '$199.99/month',
    features: ['AI-Powered Auto-Grading', 'Optical Character Recognition (OCR)', 'Customizable Exam Creation', 'Role based Access Control', 'User-Friendly Interface'],
    payment_link: "https://buy.stripe.com/test_9AQbKDdVvbBTfW8cMN",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#F5EFFF] py-12 mb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-pulse text-8xl animate-fadeIn">
            Pricing
          </h2>
          <p className="mt-4 text-xl leading-7 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Choose your plan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className="bg-[#4B164C] max-w-md mx-auto py-10 px-8 text-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white animate-fadeIn">{option.title}</h3>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-white">{option.price}</span>
                </div>
              </div>
              <div className="mt-6">
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-white">{feature}</p>
                    </li>
                  ))}
                </ul>
                <Link href={option.payment_link}>
                  <button
                    className="mt-6 block w-full text-center bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Pay Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
