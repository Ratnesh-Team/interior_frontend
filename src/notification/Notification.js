import React from 'react';

const Notification = ({ count, notifications, onView, onClose }) => {
  return (
    <div className="fixed  p-4 bg-gray-800 text-white rounded-md shadow-lg  w-[250px] right-0 top-20">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Notifications</span>
        <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
          ×
        </button>
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="mb-2">
          {notification}
        </div>
      ))}
      <button onClick={onView} className="mt-4 p-2 bg-blue-500 text-white rounded-full">
        Mark as Viewed
      </button>
    </div>
  );
};

export default Notification;
