import React, { useEffect, useState } from 'react'
import { getMeAPI } from '../services/allAPI';

function ProfileHeader() {
    const [user, setUser] = useState([])
    const getUser = async () => {
        try {
          const data = await getMeAPI();
          setUser(data || []); // Ensure posts is an array
        } catch (error) {
          console.error("Error fetching posts:", error);
          setUser([]); // Set posts to an empty array in case of error
        }
      };
    
      useEffect(() => {
        getUser();
      }, []);
      console.log(user);
    return (
        <div class="bg-white rounded-xl p-3  flex flex-col gap-3 " >

            <div className='relative'>
                <img src="./post.jpg" alt="Post Image" class="w-full h-96 object-cover" />
                <div className="w-52 rounded-full absolute bottom-0 left-0 transform translate-y-1/2">
                    <img src="./avatar.png" alt="Avatar Image" class="w-32 md:w-52 rounded-full" />
                </div>
            </div>


            <div className='mt-12 px-10'>
                <div className='flex justify-between'>
                    <h3>{user.fullName}</h3>
                    <button className='bg-white border-slate-950 border px-2 rounded-xl text-sm md:text-md md:px-4 md:py-1'>Edit Profile</button>
                </div>
                <div>
                    <div className='flex md:gap-10 md:flex-row flex-col gap-2'>
                        <h5 className='font-semibold'>{user.username}</h5>
                        <p className='text-tertiary-color text-sm md:text-md'><i class="fa-regular fa-calendar-days "></i> Joined <span>{user.createdAt}</span></p>
                    </div>
                    <p className='text-sm'>{user.bio}</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileHeader