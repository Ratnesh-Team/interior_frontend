import React, { useState } from 'react';
import Notification from './Notification';
import { Bell } from 'lucide-react';

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [notifications, setNotifications] = useState([
    'New message received',
    'Friend request accepted',
    'You have a meeting at 2:00 PM',
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [viewedNotifications, setViewedNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!viewedNotifications) {
      setViewedNotifications(true);
      setNotificationCount(0);
    }
  };

  const handleNotificationClose = () => {
    setShowNotifications(false);
  };

  const handleNotificationView = () => {
    setViewedNotifications(true);
    setNotificationCount(0);
  };

  return (
    <div className="App">
      <div className="fixed ">
        <div className="relative">
          <button
            onClick={handleNotificationClick}
            className={`relative p-2 bg-${viewedNotifications ? 'slate-100' : 'gradient-to-tr from-indigo-200 to-indigo-100'}-500 text-indigo-800 rounded-full hover:bg-${
              viewedNotifications ? 'gray' : 'blue'
            }-600 focus:outline-none`}
          >
            {!viewedNotifications && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs px-2 rounded-full">
                {notificationCount}
              </span>
            )}
            <Bell/>
          </button>
          {showNotifications && (
            <Notification
              count={notificationCount}
              notifications={notifications}
              onView={handleNotificationView}
              onClose={handleNotificationClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
