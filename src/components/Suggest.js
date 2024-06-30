import React, { useState, useEffect } from 'react';
import { followUnfollowAPI, getMeAPI, getSuggestAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';


function Suggest() {
    const [user, setUser] = useState({});

  const [suggestedFriends, setSuggestedFriends] = useState([]);

  // Fetch suggested friends data from API
  const fetchSuggestedFriends = async () => {
    try {
      const data = await getSuggestAPI();
      setSuggestedFriends(data); // Assuming data is an array of suggested friends
    } catch (error) {
      console.error('Error fetching suggested friends:', error);
      setSuggestedFriends([]); // Handle error by setting an empty array or showing a message
    }
  };

  const handleFollowUnfollow=async(id)=>{
    const result=await followUnfollowAPI(id)
    fetchSuggestedFriends()
    console.log(result);
  }
  

  useEffect(() => {
    fetchSuggestedFriends();
  }, []);
console.log(suggestedFriends);
  return (
    <div className='bg-white p-3 px-5 rounded-xl overflow-y-scroll h-[96vh] no-scrollbar hidden md:block'>
      <h2 className='mb-3 font-semibold'>Suggested Friends</h2>
      
      {suggestedFriends.map((friend, index) => (
        <div key={index} className='flex items-center justify-between gap-4 cursor-pointer py-3 pe-3 hover:bg-hover-bg'>
          <div className='flex items-center'>
            <div><img src={friend.profileImg?`${baseURL}/uploads/${friend?.profileImg}`: './avatar.png'}   alt={friend.username} className='w-14 h-14 rounded-full' /></div>
            <div className='flex flex-col leading-4'>
              <h4 className='text-md'>{friend.fullName}</h4>
              <p className='text-xs text-tertiary-color'>{friend.location}</p>
            </div>
          </div>
          <button onClick={()=>handleFollowUnfollow(friend._id)}><i className='fa-solid fa-user-plus cursor-pointer text-lg hover:text-primary-color'></i></button>
        </div>
      ))}
      
    </div>
  );
}

export default Suggest;
