import React, { useEffect, useState } from 'react';
import LeftSection from '../components/LeftSection';
import Suggest from '../components/Suggest';
import { followUnfollowAPI, getAllUsersAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';
import { baseURL } from '../services/baseURL';


function Search({ friend, setSuggest, suggest, setFriend }) {

    const [allUsers, setAllUsers] = useState([])
    const [searchedUser, setSearchedUser] = useState([])


    const handleAllUser = async () => {
        const data = await getAllUsersAPI()
        console.log(data);
        setAllUsers(data)
    }
    useEffect(() => {


        handleAllUser()
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value;
        console.log(query);
        const searchData = allUsers.filter(user => user.fullName.toLowerCase().includes(query.toLowerCase()));
        console.log(searchData);
        setSearchedUser(searchData)
    };


    const handleFollowUnfollow = async (id) => {
        const result = await followUnfollowAPI(id)
        // fetchSuggestedFriends()
        setFriend(!friend)
        console.log(result);
    }

    return (
        <div className='p-3 flex justify-between overflow-hidden h-screen md:gap-2 sm:flex sm:flex-row gap-2'>
            <div><LeftSection friend={friend} setSuggest={setSuggest} suggest={suggest} /></div>
            <div className='flex flex-col gap-3 flex-1 overflow-y-scroll h-screen no-scrollbar'>
                <div className='bg-white rounded-xl p-3 flex-1 overflow-y-scroll h-[96vh] no-scrollbar pt-10'>

                    <div className=''>
                        <input onChange={(e) => handleSearch(e)} type="text" name="q" class="w-full border h-12 outline-none shadow p-4 rounded-full " placeholder="search" />

                    </div>

                    {
                        searchedUser.length > 0 ?
                            <div className='mt-8'>
                                {searchedUser.map((friend, index) => (

                                    <div key={index} className='flex items-center justify-between gap-4 cursor-pointer py-3 pe-3 hover:bg-hover-bg'>
                                        <Link to={`/user/${friend._id}`}>
                                            <div className='flex items-center gap-2'>
                                                <div><img src={friend.profileImg ? `${baseURL}/uploads/${friend?.profileImg}` : './avatar.png'} alt={friend.username} className='w-10 h-10 rounded-full' /></div>
                                                <div className='flex flex-col leading-4'>
                                                    <h4 className='text-md'>{friend.fullName}</h4>
                                                    <p className='text-xs text-tertiary-color'>{friend.location}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <button onClick={() => handleFollowUnfollow(friend._id)}><i className='fa-solid fa-user-plus cursor-pointer text-lg hover:text-primary-color'></i></button>
                                    </div>

                                ))}
                            </div>
                            :
                            <p className='mt-6'>User Not Found</p>
                        }


                </div>
            </div>
            <Suggest setFriend={setFriend} friend={friend} />
        </div>
    );
}

export default Search;
