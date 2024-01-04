// Mom.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Mom = () => {
  const [meetingData, setMeetingData] = useState({
    meetingTitle: '',
    meetingDate: '',
    minutes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeetingData({
      ...meetingData,
      minutes: [...meetingData.minutes, meetingData],
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          {/* Meeting title input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Meeting Title
            </label>
            <input
              className="input-field"
              id="meetingTitle"
              name="meetingTitle"
              type="text"
              placeholder="Meeting Title"
              value={meetingData.meetingTitle}
              onChange={handleChange}
            />
          </div>
          {/* Meeting date input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Meeting Date
            </label>
            <input
              className="input-field"
              id="meetingDate"
              name="meetingDate"
              type="date"
              value={meetingData.meetingDate}
              onChange={handleChange}
            />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-center">
            <button
              className="btn-primary"
              type="submit"
            >
              Start Meeting
            </button>
          </div>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Meeting Minutes</h2>
          <ul>
            {meetingData.minutes.map((minute, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-200 rounded">
                <p className="text-gray-700 font-bold">{minute.meetingTitle}</p>
                <p className="text-gray-600">{minute.meetingDate}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mom;
