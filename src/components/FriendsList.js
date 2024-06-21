import React from 'react'

function FriendsList() {
  return (
    <div className='p-5 pe-20 hidden md:block'>
       <h3 className='mb-3'> My Friends</h3>
        <div className='flex  flex-col '>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3 hover:bg-hover-bg'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3  hover:bg-hover-bg'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3  hover:bg-hover-bg'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3  hover:bg-hover-bg'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3 hover:bg-gray-200'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          <div className='flex items-center justify-start cursor-pointer py-3 pe-3 hover:bg-gray-200'>
            <div><img src="./avatar.png" alt="" className='w-16'/></div>
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          
        </div>

    </div>
  )
}

export default FriendsList