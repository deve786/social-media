import React from 'react'
import { Link } from 'react-router-dom'

function Options() {
  return (
    <div className='flex w-full md:w-fit gap-5 p-5 flex-row   absolute bottom-2 left-0  rounded-xl justify-around bg-white sm:static  md:pe-20 sm:flex-col sm:w-fit sm:justify-normal z-10'>
      <Link to='/'>
        <button className='flex items-center gap-2 text-primary-color hover:text-primary-color'>
          <i className="fa-solid fa-house "></i>
          <span className='hidden md:flex'>Feed</span>
        </button>
      </Link>
      <Link to='/inbox'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-message "></i>
          <span className='hidden md:flex'>Message</span>
        </button>
      </Link>
      <Link to='/notifications'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-envelope "></i>
          <span className='hidden md:flex'>Notifications</span>
        </button>
      </Link>
      <Link to='/profile'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-user"></i>
          <span className='hidden md:flex'>Profile</span>
        </button>
      </Link>
      <Link to='/login'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-right-from-bracket"></i>
          <span className='hidden md:flex'>Logout</span>
        </button>
      </Link>

    </div>
  )
}

export default Options