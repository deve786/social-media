import React from 'react'

function Post() {
  return (
    <div className='bg-white p-3 w-[100%] flex flex-col gap-3 rounded-xl'>
      <div className='flex flex-row items-center'>
        <div className='flex '>
          <img src="./avatar.png" alt="" className='w-16' />
        </div>
        <div className='flex flex-col leading-4 '>
          <h4 className='text-md'>Ajay John</h4>
          <p className='text-xs text-tertiary-color'>15 min ago </p>
        </div>
      </div>
      <div className=' flex gap-3 flex-col'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil labore totam iste, voluptates, officia laborum sequi distinctio, iusto at harum dolorem. Qui, quod. Voluptatem ratione similique rem. Tenetur, eaque.</p>
        <img src="./post.jpg" alt="" className='w-full rounded' />
      </div>
      <div className='flex justify-between px-4'>
        <div className='gap-2 flex items-center'><i class="fa-regular fa-heart text-xl cursor-pointer hover:text-primary-color"></i>25 Like</div>
        <div className='gap-2 flex items-center'><i class="fa-regular fa-message text-xl cursor-pointer hover:text-primary-color"></i>14 Comment</div>
        <div className='gap-2 flex items-center'><i class="fa-solid fa-share text-xl cursor-pointer hover:text-primary-color"></i>10 Share</div>
      </div>
      <div>
        <div className='flex justify-between'>
          <img src="./avatar.png" alt="" className='w-16 rounded-full' />
          <div className='relative w-full bg-gray-100 flex'>
            <input type="text" className='w-full bg-transparent outline-none px-4 py-2 text-sm' placeholder="What's happening?" />
            <i className="far fa-smile text-xl cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4"></i>
          </div>
          <button className='ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary-color ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>

      </div>
      <div>
        <div className='flex justify-start flex-col  ms-10'>
          <h2>Comments</h2>
          <div className='flex items-center'>
            <img src="./avatar.png" alt="" className='w-14 rounded-full' />
            
            <p className='text-sm'>Super post....</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Post