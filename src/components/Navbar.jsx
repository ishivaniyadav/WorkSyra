import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-cyan-700">Dashboard</h2>
      <div className="flex items-center gap-4">
        <button className="bg-cyan-500 text-white px-4 py-1 rounded-md flex items-center gap-2">
          <FaUserCircle />
          Shivani
        </button>
      </div>
    </div>
  );
};

export default Navbar;
