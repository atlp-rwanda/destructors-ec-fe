/* eslint-disable no-restricted-syntax */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { slice } from 'lodash';
import { markAllNotifications, markSingleNotification } from './utils/markNotifications';

const Notification = ({notifications}) => {

  const [allnotifications, setAllnotifications] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  const notificationContainer = slice(allnotifications, 0, index);

  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= allnotifications.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    setAllnotifications(notifications);
  }, [notifications]);

  const [isRead, setIsRead] = useState(false);

  const markAsRead = async (id) => {
    await markSingleNotification(id);
    const notificationsContainer = notifications.map(obj => {

      if (obj.id == id) {
        obj.status = true;
      }
      return obj;
    });
    setAllnotifications(notificationsContainer);
  };
  const markAllAsRead = async () => {
    await markAllNotifications();
    setIsRead(true);
    const notificationsContainer = notifications.map(obj => {
      obj.status = true;
      return obj;
    });
    setAllnotifications(notificationsContainer);
  };
  console.log(notificationContainer);
  return (
    <div className='absolute  bg-white w-[400px] top-[100px] ease-in z-50 right-8 px-3 pb-3 rounded-lg drop-shadow-2xl'>
      <div className=' flex w-full py-2 border-b-2'>
        <h2 className=' text-xl font-black p-2 text-primary '>Notifications</h2>
        <div className={` ml-[100px] flex  mt-3 ${ notificationContainer.find(( notification  => notification.status === false)) ? 'text-primary hover:text-[#2198e7]' : ' text-slate-400 disabled'}`} onClick={markAllAsRead}>
          <p className=' text-sm'> Mark all as read</p>
          <svg
            className='w-5 h-5'
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.6664523,15.0943204 L12.0462428,13.6932433 L12.5459105,14.1998821 L20.6192054,6 L22,7.40005893 L12.5459105,17 L10.6664523,15.0943204 Z M6.54591047,14.1998821 L14.6192054,6 L16,7.40005893 L6.54591047,17 L1.97366706,12.3500147 L3.35446166,10.9499558 L6.54591047,14.1998821 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className={` h-[350px] overflow-auto ... ${(notificationContainer.length === 0) ? ' flex justify-center items-center' : ''}`}>
        {notificationContainer &&
        (notificationContainer.length != 0 ) ? notificationContainer.map( (notification) => {
            return (
              <div key={notification.id} className={`font-rubik  p-3 flex border-b-[2px] border-[#eee] hover:bg-[#eee] ${(notification.status === false && isRead === false) ? ' bg-slate-200' : ''}`} onClick={() => markAsRead(notification.id)} >
                <img src={`${notification.message.image}`} className=' mt-2 block rounded-[50%] w-[30px] h-[30px] mr-2' alt="" />
                <div className=' mt-1'>
                  <div className=' text-xs flex gap-x-[120px]'>
                    <h4 className=' text-primary text-base w-[120px]'>{notification.subject}</h4>
                    <div className='  text-primary'>{notification.time}</div>
                  </div>
                  <p className=' text-[#282626] text-xs'>{notification.message.text}</p>
                </div>
              </div>
            );
          }) : <p className=' font-black text-primary'>You have no Notifications</p>}
      </div>
      { (allnotifications.length >= 5) &&
      <div className='border-t-2 flex justify-center items-center p-5'>
        {!isCompleted && (
          <button onClick={loadMore} type="button" className="rounded-full bg-[#2D719D] hover:bg-[#2198e7] h-[30px] text-xs text-slate-50 px-3">
            MORE LOAD
          </button>
        )}
      </div>
      }
    </div>
  );
};

Notification.propTypes = {
  notifications: PropTypes.array.isRequired,
};


export default Notification;
