import { useSelector } from 'react-redux';
import getUserInfo from '../../utils/getUserInfo';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../redux/actions/cartActions';
import { getProductWishilist } from '../../redux/actions/wishListActions';
import { io } from 'socket.io-client';
import NotificationSound from "../notifications/16451_download_note_iphone_notification_ringtone_apple_sms_ringtones.mp3";
import { increment } from '../../redux/reducers/notifications';
import Notification from '../notifications/Notification';
import { showSuccessMessage } from '../../utils/toast';

function Navigations () {
  const cartItems = useSelector((state) => state.cart.items);
  const totalitems = cartItems.length;
  const wishlistItems = useSelector((state) => state.wishListGet.wishlistData);
  const totalwishlistitems = wishlistItems.length;
  const info = getUserInfo();
  const dispatch = useDispatch();
  const audioPlayer = useRef(null);
  const [openNotification, setOpenNotification] = useState(false);
  const [newNotifications, setNewNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const unReadNotification = useSelector((state) => state.notifications.value);

  function playAudio () {
    audioPlayer.current.play();
  }
  let loginToken = localStorage.getItem('token');
  useEffect(() =>{
    dispatch(fetchCart());
    dispatch(getProductWishilist());
  }, []);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_REACT_APP_API_URLs}/notifications`, {
      extraHeaders: {
        authorization: `Bearer ${loginToken}`,
      },
    });
    newSocket.on('old-notification', (notification) => {
      setNotifications(notification);
    });
    newSocket.on('new-notification', (subject, message, image, id) => {
      const newNotification = {
        id,
        subject,
        message: {
          text: message,
          image,
        },
        status: false,
      };
      setNewNotifications(newNotification);

      showSuccessMessage('you have new notification 🔔');
      playAudio();
    });
    return () => {
      newSocket.disconnect();
      newSocket.off('old-notification');
    };
  }, [newNotifications, loginToken]);
  let notificationNber = 0;
  notifications.forEach(element => {
    if (element.status === false) {
      notificationNber += 1;
    }
  });
  useEffect(() => {
    dispatch(increment(notificationNber));
  }, [dispatch, notificationNber]);

  const notificationTab = () => {
    setOpenNotification(!openNotification);
  };

  return (
    <div className='flex gap-2 cursor-pointer'>
      <Link to="/dashboard" >
        <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11.1111H7C7.55 11.1111 8 10.6111 8 10V1.11111C8 0.5 7.55 0 7 0H1C0.45 0 0 0.5 0 1.11111V10C0 10.6111 0.45 11.1111 1 11.1111ZM1 20H7C7.55 20 8 19.5 8 18.8889V14.4444C8 13.8333 7.55 13.3333 7 13.3333H1C0.45 13.3333 0 13.8333 0 14.4444V18.8889C0 19.5 0.45 20 1 20ZM11 20H17C17.55 20 18 19.5 18 18.8889V10C18 9.38889 17.55 8.88889 17 8.88889H11C10.45 8.88889 10 9.38889 10 10V18.8889C10 19.5 10.45 20 11 20ZM10 1.11111V5.55556C10 6.16667 10.45 6.66667 11 6.66667H17C17.55 6.66667 18 6.16667 18 5.55556V1.11111C18 0.5 17.55 0 17 0H11C10.45 0 10 0.5 10 1.11111Z" fill="#555555"/>
        </svg>
      </Link>
      {(info?.data?.role === 'buyer' || info?.data?.role === 'admin') ? (
        <Link to='/carts'>
          <div className=' static flex  items-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z'
                fill='#555555'
              />
            </svg>
            <div className=' absolute ml-4 mb-3 border-solid border-2 rounded-full h-5 w-5 flex items-center justify-center bg-[#2D719D] text-white text-xs'>
              {totalitems}
            </div>
          </div>
        </Link>
      ) : ''}
      <Link to='/profile'>
        <svg
          width='22'
          height='24'
          viewBox='0 0 22 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M14.6186 11.1284C16.1543 10.0084 17.1544 8.19581 17.1544 6.15384C17.1544 2.76061 14.3937 0 11.0005 0C7.60727 0 4.84666 2.76061 4.84666 6.15384C4.84666 8.19581 5.84665 10.0084 7.38237 11.1284C3.56487 12.5892 0.84668 16.2905 0.84668 20.6154C0.84668 22.4817 2.36501 24 4.23129 24H17.7697C19.636 24 21.1543 22.4817 21.1543 20.6154C21.1543 16.2905 18.4362 12.5892 14.6186 11.1284ZM6.69284 6.15384C6.69284 3.77859 8.62526 1.84617 11.0005 1.84617C13.3758 1.84617 15.3082 3.77859 15.3082 6.15384C15.3082 8.52909 13.3758 10.4616 11.0005 10.4616C8.62526 10.4616 6.69284 8.52909 6.69284 6.15384ZM17.7697 22.1538H4.23129C3.38299 22.1538 2.69285 21.4637 2.69285 20.6153C2.69285 16.0344 6.4196 12.3076 11.0006 12.3076C15.5815 12.3076 19.3083 16.0344 19.3083 20.6153C19.3082 21.4637 18.6181 22.1538 17.7697 22.1538Z'
            fill='#555555'
          />
        </svg>
      </Link>
      <div>
        <div className=' static flex  items-center' onClick={notificationTab}>

          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.0003 19.3348C19.1095 19.3348 21.9357 18.5511 22.2087 15.4054C22.2087 12.2619 20.2382 12.464 20.2382 8.60704C20.2382 5.59432 17.3827 2.1665 13.0003 2.1665C8.61799 2.1665 5.76241 5.59432 5.76241 8.60704C5.76241 12.464 3.79199 12.2619 3.79199 15.4054C4.06602 18.563 6.89225 19.3348 13.0003 19.3348Z'
              stroke='#555555'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.5886 22.5952C14.1108 24.2362 11.8054 24.2556 10.3135 22.5952'
              stroke='#555555'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className=' absolute ml-4 mb-3 border-solid border-2 rounded-full h-5 w-5 flex items-center justify-center bg-[#2D719D] text-white text-xs'>
            {unReadNotification}
          </div>
          { openNotification &&
          <Notification
            notifications = {notifications}

          />}
          <audio ref={audioPlayer} src={NotificationSound} />
        </div>

      </div>
      <Link to='/product-wishes'>
        <div className=' static flex  items-center'>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.4245 21.7536L4.18364 13.5031C3.09071 12.4091 2.47665 10.9251 2.47656 9.37775C2.47647 7.83039 3.09035 6.34637 4.18315 5.25216C5.27595 4.15795 6.75816 3.54317 8.30371 3.54308C9.84925 3.54299 11.3315 4.15759 12.4245 5.25167C13.5179 4.15883 14.9998 3.54503 16.5449 3.54503C18.0899 3.54503 19.5718 4.15883 20.6653 5.25167V5.25167C21.7564 6.34666 22.3691 7.83022 22.3691 9.37692C22.3691 10.9236 21.7564 12.4072 20.6653 13.5022L12.4245 21.7536ZM8.30357 5.48796C7.53513 5.48793 6.78394 5.71606 6.14502 6.1435C5.50609 6.57093 5.00814 7.17847 4.71413 7.88928C4.42012 8.60008 4.34326 9.38221 4.49329 10.1367C4.64331 10.8913 5.01347 11.5843 5.55695 12.1282L12.4245 19.0038L19.292 12.1282C19.6864 11.7421 19.9942 11.2763 20.1949 10.7618C20.3955 10.2473 20.4844 9.69598 20.4557 9.14443C20.4269 8.59287 20.2812 8.05377 20.0281 7.563C19.7751 7.07223 19.4205 6.64105 18.988 6.29814C18.5556 5.95524 18.0551 5.70847 17.52 5.57428C16.9849 5.44008 16.4273 5.42152 15.8845 5.51984C15.3416 5.61815 14.8259 5.83109 14.3717 6.14449C13.9174 6.45788 13.5351 6.86453 13.25 7.33739L12.4245 8.67147L11.5989 7.33739C11.2581 6.76859 10.7748 6.29886 10.1967 5.97479C9.61866 5.65072 8.96604 5.48356 8.30357 5.4899V5.48796Z'
              fill='black'
            />
          </svg>
          <div className=' absolute ml-4 mb-3 border-solid border-2 rounded-full h-5 w-5 flex items-center justify-center bg-[#2D719D] text-white text-xs'>
            {totalwishlistitems}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navigations;
