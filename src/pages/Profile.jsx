import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Shivani Yadav");
  const [email, setEmail] = useState("shivani@example.com");
  const [location, setLocation] = useState("Delhi, India");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-md rounded-lg p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled
          />
          <p className="text-xs text-gray-500 mt-1">Email can’t be changed.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
