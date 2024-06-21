import React from 'react'
import Chats from './Chats'
import ChatInput from './ChatInput'

function ChatSection() {
  return (
    <div className='flex-1 bg-white rounded-xl justify-between flex flex-col'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center justify-between cursor-pointer py-3 pe-3  '>
          <div className='flex'>
            <div>
              <img src="./avatar.png" alt="" className='w-16' />
            </div>
    
            <div className='flex flex-col leading-4 '>
              <h4 className='text-md'>Ajay John</h4>
              <p className='text-xs text-tertiary-color'>New-York, USA </p>
            </div>
          </div>
          
        </div>
        <hr />
        <Chats/>
      </div>
      <div className='p-5'><ChatInput/></div>
    </div>
  )
}

export default ChatSection