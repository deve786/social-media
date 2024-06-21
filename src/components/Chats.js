import React from 'react'

function Chats() {
  return (
    <div className='p-3'>
        <div className='flex items-center justify-start cursor-pointer py-3 pe-3  '>
            <div><img src="./avatar.png" alt="" className='w-14'/></div>
            <div className='flex flex-col leading-4 '>
             
              <p className='text-sm bg-tertiary-color py-1 px-3 rounded-xl text-white'>Hi,are you there....</p>
            </div>
          </div>

          <div className='flex items-center justify-end cursor-pointer py-3 pe-3  '>
          <div className='flex flex-col leading-4 '>
             
             <p className='text-sm bg-tertiary-color py-1 px-3 rounded-xl text-white'>Hello...</p>
           </div>
            <div><img src="./avatar.png" alt="" className='w-14'/></div>
            
          </div>
    </div>
  )
}

export default Chats