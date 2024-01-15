import React from 'react'
import { Warehouse ,LayoutList} from 'lucide-react';

const Notification = ({ count, notifications, onView, onClose }) => {
  return (
    <div className="fixed  p-4 bg-white text-black rounded-md shadow-lg  w-[250px] right-0 top-20">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Notifications</span>
        <button onClick={onClose} className="text-gray-400 hover:text-black focus:outline-none">
          X
        </button>
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="mb-2">
          {notification}
        </div>
      ))}
      <button onClick={onView} className="mt-4 p-2 bg-blue-500  rounded-sm bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800">
        Mark as Viewed
      </button>
    </div>
  );
};

export default Notification;
