import React from 'react'

function PostUpload() {
    return (
        <div className='bg-white p-3 rounded-xl flex flex-col gap-3'>
            <div className='flex justify-between'>
                <img src="./avatar.png" alt="" className='w-16 rounded-full' />
                <input type="text" className='w-full bg-gray-100 outline-none px-4 py-2 text-sm' placeholder="What's happening?" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <i class="fa-solid fa-image text-xl cursor-pointer "></i>
                    <i class="fa-regular fa-face-smile text-xl cursor-pointer "></i>
                </div>
                <button className='bg-primary-color px-3 py-1 rounded text-white'>Post</button>
            </div>
        </div>
    )
}

export default PostUpload