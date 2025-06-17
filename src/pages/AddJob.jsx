import React, { useState } from 'react';

const AddJob = () => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ position, company, location, jobType, status });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-black mb-4">Add Job</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg"
      >
        <div>
          <label className="text-black block mb-1">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
            placeholder="e.g. Frontend Developer"
          />
        </div>

        <div>
          <label className="text-black block mb-1">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
            placeholder="e.g. Google"
          />
        </div>

        <div>
          <label className="text-black block mb-1">Job Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
            placeholder="e.g. Noida"
          />
        </div>

        <div>
          <label className="text-black block mb-1">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="remote">Remote</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="text-black block mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
          >
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        <div className="md:col-span-2 flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() => {
              setPosition('');
              setCompany('');
              setLocation('');
              setJobType('full-time');
              setStatus('pending');
            }}
            className="bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
