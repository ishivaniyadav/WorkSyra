import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="bg-gray-900 text-white p-8 flex flex-col items-center">
          <SearchForm />
          <h2 className="mt-12 text-xl text-center">No jobs to display...</h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
