import React from 'react'
import { Link } from 'react-router-dom'

function Options() {
  return (
    <div className='flex flex-col gap-5 p-5 pe-20 bg-white rounded-xl'>
      <Link to='/'>
        <button className='flex items-center gap-2 text-primary-color hover:text-primary-color'>
          <i className="fa-solid fa-house "></i>
          <span>Feed</span>
        </button>
      </Link>
      <Link to='/inbox'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-message "></i>
          <span>Message</span>
        </button>
      </Link>
      <Link to='/notifications'>
        <button className='flex items-center gap-2 hover:text-primary-color'>
        <i class="fa-solid fa-envelope "></i>
          <span>Notifications</span>
        </button>
      </Link>

    </div>
  )
}

export default Options