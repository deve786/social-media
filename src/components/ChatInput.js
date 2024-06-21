import React from 'react'

function ChatInput() {
  return (
    <div className='p-3 flex items-center gap-1 w-full border border-2 rounded-full'>
        <i class="fa-solid fa-image text-xl cursor-pointer "></i>
        <input type="text" className='bg-transparent px-3 outline-none w-full rounded' />
        <i class="fa-regular fa-face-smile text-xl cursor-pointer "></i>
        <button className='ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary-color ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
    </div>
  )
}

export default ChatInput