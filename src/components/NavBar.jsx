import logo from '../assets/Logo.svg';
import dashboardIcon from '../assets/Vector.svg';
import salesIcon from '../assets/salesIcon.svg';
import productIcon from '../assets/productIcon.svg';
import settingIcon from '../assets/settingIcon.svg';
import logoutIcon from '../assets/login.svg';
import setLogout from './logout/logout';

const NavBar = () => {
  const {
    showConfirmation,
    handleLogoutIconClick,
    renderLogoutConfirmation,
  } = setLogout();
  return (
    <nav className=' bg-white w-[220px] h-[100%] absolute xs:hidden'>
      <img src={logo} className='absolute h-11 left-[50px] top-[20px]' />
      <div className='flex flex-col mt-24 '>
        <label className=' py-4 pl-[50px] hover:bg-hover active:bg-hover2 text-[14px]  text-slate-500 flex'><img src={dashboardIcon} className='h-4 mr-3 mt-[1.5px]' />Dashboard</label>
        <label className=' py-4 pl-[50px] hover:bg-hover active:bg-hover2 text-[14px]  text-slate-500 flex'><img src={salesIcon} className='h-4 mr-3 mt-[1.5px]' />Sales</label>
        <label className=' py-4 pl-[50px] hover:bg-hover active:bg-hover2 text-[14px]  text-slate-500 flex'><img src={productIcon} className='h-4 mr-3 mt-[1.5px]' />Products</label>
        <label className=' py-4 pl-[50px] hover:bg-hover active:bg-hover2 text-[14px]  text-slate-500 flex'><img src={settingIcon} className='h-4 mr-3 mt-[1.5px]' />Settings</label>
        <label onClick={handleLogoutIconClick} className=' py-4 pl-[50px] hover:bg-bgRed active:bg-hover2 text-[14px]  text-[#C5C5C5] flex cursor-pointer'><img src={logoutIcon} className='h-4 mr-3 mt-[1.5px] ' />Logout</label>
      </div>
      {showConfirmation && renderLogoutConfirmation()}
    </nav>
  );
};

export default NavBar;
