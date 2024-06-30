import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAPI } from '../services/allAPI';

function Options() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAPI();
      localStorage.removeItem('token'); // Clear the token from localStorage
      alert("Logged out successfully");
      navigate('/login'); // Redirect to the login page or any other appropriate page
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed");
    }
  };

  return (
    <div className='flex w-full md:w-fit gap-5 p-5 flex-row absolute bottom-2 left-0 rounded-xl justify-around bg-white sm:static md:pe-20 sm:flex-col sm:w-fit sm:justify-normal z-10'>
      <Link to='/'>
        <button className='flex items-center gap-2 text-primary-color hover:text-primary-color'>
          <i className="fa-solid fa-house "></i>
          <span className='hidden md:flex'>Feed</span>
        </button>
      </Link>
      <Link to='/inbox'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
          <i className="fa-solid fa-message "></i>
          <span className='hidden md:flex'>Message</span>
        </button>
      </Link>
      <Link to='/notifications'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
          <i className="fa-solid fa-envelope "></i>
          <span className='hidden md:flex'>Notifications</span>
        </button>
      </Link>
      <Link to='/profile'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
          <i className="fa-solid fa-user"></i>
          <span className='hidden md:flex'>Profile</span>
        </button>
      </Link>
      <div className='sm:hidden'>
        <Link to='/suggest'>
          <button className='flex items-center gap-2 hover:text-primary-color'>
          <i className='fa-solid fa-user-plus'></i>
            <span className='hidden md:flex'>Profile</span>
          </button>
        </Link>
      </div>
      <div className='sm:hidden'>
        <Link to='/friends'>
          <button className='flex items-center gap-2 hover:text-primary-color'>
          <i className='fa-solid fa-user-minus'></i>
            <span className='hidden md:flex'>Profile</span>
          </button>
        </Link>
      </div>
      <button onClick={handleLogout} className='flex items-center gap-2 hover:text-primary-color'>
        <i className="fa-solid fa-right-from-bracket"></i>
        <span className='hidden md:flex'>Logout</span>
      </button>
    </div>
  );
}

export default Options;
