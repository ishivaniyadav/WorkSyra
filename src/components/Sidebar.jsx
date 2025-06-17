import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/dashboard", label: "Stats" },
  { path: "/dashboard/add-job", label: "Add Job" },
  { path: "/dashboard/all-jobs", label: "All Jobs" },
  { path: "/dashboard/profile", label: "Profile" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen px-4 py-6">
      <h2 className="text-2xl font-bold text-cyan-600 mb-10">WorkSyra</h2>
      <nav className="space-y-4">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-cyan-100 ${
                isActive ? "bg-cyan-200 text-cyan-800 font-semibold" : "text-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
