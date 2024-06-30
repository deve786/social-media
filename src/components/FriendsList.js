import React, { useEffect, useState } from 'react';
import { followUnfollowAPI, getFollowingAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  const handleFollowUnfollow = async (id) => {
    const result = await followUnfollowAPI(id);
    fetchFriendsList();
    console.log(result);
  }

  const fetchFriendsList = async () => {
    try {
      const result = await getFollowingAPI(); // Assuming getFollowingAPI fetches the list of friends
      setFriends(result); // Assuming result is an array of friend objects
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  useEffect(() => {
    fetchFriendsList();
  }, []);

  return (
    <div className='p-5 pe-20 hidden md:block'>
      <h3 className='mb-3'>My Friends</h3>
      <div className='flex flex-col '>
        {friends.map((friend) => (
          <div key={friend._id} className='flex items-center justify-between cursor-pointer py-3 pe-3 hover:bg-hover-bg'>
            <div className='flex items-center gap-2 px-6'>
              <div>
                <img src={friend.profileImg ? `${baseURL}/uploads/${friend.profileImg}` : './avatar.png'} alt={friend.username} className='w-10 h-10 rounded-full' />
              </div>
              <div className='flex flex-col leading-4'>
                <h4 className='text-md'>{friend.fullName}</h4>
                <p className='text-xs text-tertiary-color'>{friend.username || 'Location not specified'}</p>
              </div>
            </div>
            <div>
              <button onClick={() => handleFollowUnfollow(friend._id)} className=' hover:text-primary-color'>
                <i className="fa-solid fa-user-minus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
