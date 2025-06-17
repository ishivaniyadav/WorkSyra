import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "./assets/banner.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 min-h-screen text-gray-900 font-sans">
      <nav className="flex items-center justify-between w-full px-8 py-5 shadow-sm bg-white">
        <a href="#" className="flex items-center space-x-3">
          <div className="bg-cyan-500 text-white rounded-full p-2 font-bold text-lg shadow-md">WS</div>
          <span className="text-cyan-500 text-2xl font-semibold">WorkSyra</span>
        </a>
      </nav>

      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-16 gap-10">
        <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Manage Your <span className="text-cyan-500">Job Hunt</span><br />
            The Smarter Way
          </h1>
          <p className="text-gray-700 text-lg">
            Say goodbye to job search stress. Track applications, organize tasks, and
            stay on top of opportunities – all in one sleek, easy-to-use platform.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={() => navigate("/register")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-md font-medium transition duration-200"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-6 py-3 rounded-xl font-medium transition duration-200"
            >
              Login / Demo
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <img
            src={banner}
            alt="Job tracking dashboard illustration"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
