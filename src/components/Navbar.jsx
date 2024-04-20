import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../uparrow.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img classname="img" src={logo} alt="Logo" /> */}
          <span className="self-center text-3xl font-semibold whitespace-nowrap ">defi</span>
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 "
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`md:hidden fixed inset-0 bg-indigo-900 z-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="flex justify-end p-4">
            {/* <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 "
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <ul className="text-4xl flex flex-col gap-2 p-4 mt-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <Link to='/'>Home</Link>

              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
