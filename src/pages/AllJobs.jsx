import React from 'react';

const dummyJobs = [
  {
    id: 1,
    company: 'Google',
    position: 'Frontend Developer',
    status: 'pending',
    jobType: 'Full-Time',
    date: '2025-06-14',
  },
  {
    id: 2,
    company: 'Amazon',
    position: 'Backend Developer',
    status: 'interview',
    jobType: 'Part-Time',
    date: '2025-06-10',
  },
  {
    id: 3,
    company: 'Netflix',
    position: 'UI/UX Designer',
    status: 'declined',
    jobType: 'Remote',
    date: '2025-06-05',
  },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  interview: 'bg-green-100 text-green-800',
  declined: 'bg-red-100 text-red-800',
};

const AllJobs = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Jobs</h2>

      <div className="grid gap-6">
        {dummyJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-lg p-5 shadow-md bg-white flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-400 mt-1">{job.date}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[job.status]}`}
              >
                {job.status}
              </span>
              <span className="text-sm text-gray-600">{job.jobType}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
