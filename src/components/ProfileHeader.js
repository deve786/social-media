import React from 'react'

function ProfileHeader() {
    return (
        <div class="bg-white rounded-xl p-3  flex flex-col gap-3 " >

            <div className='relative'>
                <img src="./post.jpg" alt="Post Image" class="w-full h-96 object-cover" />
                <div class="w-52 rounded-full absolute bottom-0 left-0 transform translate-y-1/2">
                    <img src="./avatar.png" alt="Avatar Image" class="w-52 rounded-full" />
                </div>
            </div>


            <div className='mt-12 px-10'>
                <div className='flex justify-between'>
                    <h3>Ajay John</h3>
                    <button className='bg-white border-slate-950 border px-4 py-1 rounded-xl'>Edit Profile</button>
                </div>
                <div>
                    <div className='flex gap-10'>
                        <h5 className='font-semibold'>@ajayjohn20</h5>
                        <p className='text-tertiary-color'><i class="fa-regular fa-calendar-days "></i> Joined June 22</p>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima....</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileHeader