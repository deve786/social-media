import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logoutAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Options() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logoutAPI();
      localStorage.removeItem('token'); // Clear the token from localStorage
      toast.success("Logged out successfully");
      navigate('/login'); // Redirect to the login page or any other appropriate page
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed"); // Display error toast
    }
  };

  return (
    <div className='flex w-full md:w-fit gap-5 p-5 flex-row absolute bottom-2 left-0 rounded-xl justify-around bg-white sm:static md:pe-20 sm:flex-col sm:w-fit sm:justify-normal z-10'>
      <Link to='/' className={location.pathname === '/' ? 'active-link' : ''}>
        <button className={`flex items-center gap-2 hover:text-primary-color ${location.pathname === '/' ? 'text-primary-color' : ''}`}>
          <i className="fa-solid fa-house "></i>
          <span className='hidden md:flex'>Feed</span>
        </button>
      </Link>
      <Link to='/inbox' className={location.pathname === '/inbox' ? 'active-link' : ''}>
        <button className={`flex items-center gap-2 hover:text-primary-color focus:text-primary-color ${location.pathname === '/inbox' ? 'text-primary-color' : ''}`}>
          <i className="fa-solid fa-message "></i>
          <span className='hidden md:flex'>Message</span>
        </button>
      </Link>
      <Link to='/notifications' className={location.pathname === '/notifications' ? 'active-link' : ''}>
        <button className={`flex items-center gap-2 hover:text-primary-color focus:text-primary-color ${location.pathname === '/notifications' ? 'text-primary-color' : ''}`}>
          <i className="fa-solid fa-envelope "></i>
          <span className='hidden md:flex'>Notifications</span>
        </button>
      </Link>
      <Link to='/profile' className={location.pathname === '/profile' ? 'active-link' : ''}>
        <button className={`flex items-center gap-2 hover:text-primary-color focus:text-primary-color ${location.pathname === '/profile' ? 'text-primary-color' : ''}`}>
          <i className="fa-solid fa-user"></i>
          <span className='hidden md:flex'>Profile</span>
        </button>
      </Link>
      <div className='sm:hidden'>
        <Link to='/suggest' className={location.pathname === '/suggest' ? 'active-link' : ''}>
          <button className={`flex items-center gap-2 hover:text-primary-color focus:text-primary-color ${location.pathname === '/suggest' ? 'text-primary-color' : ''}`}>
            <i className='fa-solid fa-user-plus'></i>
            <span className='hidden md:flex'>Suggest</span>
          </button>
        </Link>
      </div>
      <div className='sm:hidden'>
        <Link to='/friends' className={location.pathname === '/friends' ? 'active-link' : ''}>
          <button className={`flex items-center gap-2 hover:text-primary-color focus:text-primary-color ${location.pathname === '/friends' ? 'text-primary-color' : ''}`}>
            <i className='fa-solid fa-user-minus'></i>
            <span className='hidden md:flex'>Friends</span>
          </button>
        </Link>
      </div>
      <button onClick={handleLogout} className='flex items-center gap-2 hover:text-primary-color focus:text-primary-color active:text-primary-color'>
        <i className="fa-solid fa-right-from-bracket"></i>
        <span className='hidden md:flex'>Logout</span>
      </button>
      <ToastContainer /> {/* Place ToastContainer at the end of the component */}
    </div>
  );
}

export default Options;
