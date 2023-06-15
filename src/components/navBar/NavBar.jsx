import logo from '../../assets/Logo (2).svg';
import SearchField from '../searchIputField/SearchField';
import totalCartItems from '../../utils/cartUtil';
import { useSelector } from 'react-redux';
import { logDOM } from '@testing-library/dom';
import { Link } from 'react-router-dom';
import getUserInfo from '../../utils/getUserInfo';
import Navigations from './Navigations';
import UserLogin from './UserLogin';
function NavBar () {
  // const cartItems = useSelector((state) => state.cart.items);
  // const totalitems = cartItems.length;
  const pathname = window.location.pathname;
  // const wishlistItems = useSelector((state) => state.wishListGet.wishlistData);
  // const totalwishlistitems = wishlistItems.length;
  const info = getUserInfo();
  return (
    <div
      className={`flex flex-row justify-around items-center  ${
        pathname !== '/' ? ' gap-[600px] xs:gap-0' : ''
      }`}>
      <div className='w-20'>
        <img src={logo} alt='log' />
      </div>
      {pathname === '/' && <SearchField />}
      {info?.data?.role ? (
        <Navigations />
      ) : <UserLogin />}

    </div>
  );
}

export default NavBar;
