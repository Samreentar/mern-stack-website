"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Current route check karne ke liye
import React, { useState, useEffect } from "react";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contact from "./Contactus";
import Image from "next/image";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#courses-section" },
  { name: "Our Team", href: "/#mentors-section" },
  { name: "Testimonial", href: "/#testimonial-section" },
  { name: "Join", href: "/#join-section" },
  { name: "About ExamTech", href: "/Aboutus" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LandingNavbar = () => {
  const [showSignDialog, setShowSignDialog] = useState(true);
  const pathname = usePathname(); // Current route ko track karne ke liye

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowSignDialog(false);
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-lightpink navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <Image
                    className="block lg:hidden"
                    src="/assets/logo/graduation.png"
                    alt="Courses-Logo"
                    width={150}
                    height={100}
                  /> */}
                  <Image
                    className="hidden lg:block"
                    src="/assets/logo/graduation.jpeg"
                    alt="ExamTech-Logo"
                    width={80}
                    height={70}
                  />
                  <div
                    className="hidden lg:block"
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#3D0158",
                      marginTop: "10px",
                    }}
                  >
                    SmartGrader
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden sm:ml-14 md:block mt-5">
                  <div className="flex space-x-4">
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href ? "text-purple font-bold" : "hover:text-purple",
                          "px-3 py-2 text-15px font-medium space-links"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Contact />
                  </div>
                </div>
              </div>

              {/* Sign In and Register buttons for Desktop */}
              <div className="hidden md:flex items-center space-x-8">
                {showSignDialog && <Signdialog />}
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathname === item.href ? "text-purple font-bold" : "",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Contact />
              {/* Sign In and Register buttons for Mobile */}
              <div className="px-3 py-2">
                {showSignDialog && <Signdialog />}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default LandingNavbar;
