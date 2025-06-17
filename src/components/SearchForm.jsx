import React from "react";

const SearchForm = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-md w-full max-w-5xl">
      <h3 className="text-white text-lg mb-4">Search Form</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md border border-gray-300"
        />
        <select className="p-2 rounded-md border border-gray-300">
          <option value="all">Job Status</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option value="all">Job Type</option>
        </select>
        <select className="p-2 rounded-md border border-gray-300">
          <option value="newest">Sort</option>
        </select>
      </div>
      <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
        Reset Search Values
      </button>
    </div>
  );
};

export default SearchForm;
