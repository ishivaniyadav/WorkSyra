import React from 'react';
import { FaSuitcase, FaCalendarCheck, FaTimesCircle } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      label: 'Pending Applications',
      count: 12,
      icon: <FaSuitcase className="text-yellow-400 text-2xl" />,
      color: 'bg-white',
    },
    {
      label: 'Interviews Scheduled',
      count: 5,
      icon: <FaCalendarCheck className="text-green-400 text-2xl" />,
      color: 'bg-white',
    },
    {
      label: 'Jobs Declined',
      count: 3,
      icon: <FaTimesCircle className="text-red-400 text-2xl" />,
      color: 'bg-white',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-black mb-6">Stats Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${stat.color} shadow-md flex items-center justify-between`}
          >
            <div>
              <h3 className="text-3xl font-bold text-black">{stat.count}</h3>
              <p className="text-gray-800 mt-1">{stat.label}</p>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
