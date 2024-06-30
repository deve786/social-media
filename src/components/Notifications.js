import React, { useEffect, useState } from 'react';
import { getNotificationsAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const fetchAllNotifications = async () => {
    try {
      const data = await getNotificationsAPI();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchAllNotifications();
  }, []);
console.log(notifications);
  return (
    <div className='bg-white rounded-xl p-3 flex-1 overflow-y-scroll h-[96vh] no-scrollbar'>
      <h2 className='text-2xl font-semibold'>Notifications</h2>
      <div>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification._id} className='flex justify-between cursor-pointer py-3 pe-3 hover:bg-hover-bg'>
              <div className='flex items-center gap-2'>
                <div>
                  <img src= {notification.from.profileImg ?`${baseURL}/uploads/${notification.from?.profileImg}`:'./avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                </div>
                <div className='flex flex-col leading-4'>
                  <p className='md:text-md text-sm'>
                    <span className='font-semibold'>{notification.from.username}</span> <span>{notification.type} </span><span>{notification.type=='like'?'your post':'you'}</span>
                  </p>
                </div>
              </div>
              <div>
                <p><i className="fa-solid fa-circle text-[7px] text-primary-color"></i></p>
              </div>
            </div>
          ))
        ) : (
          <p>No notifications found.</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
