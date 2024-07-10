import React, { useEffect, useState } from 'react';
import LeftSection from '../components/LeftSection';
import Suggest from '../components/Suggest';
import { allPostAPI, followUnfollowAPI, getMeAPI, getSingleUserAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';
import { baseURL } from '../services/baseURL';

function UserPage({ friend, setFriend }) {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loggedUser, setLoggedUser] = useState({});
    const [isFollowing, setIsFollowing] = useState(false);
   
    const fetchUserData = async () => {
        try {
            const userData = await getSingleUserAPI(userId);
            const allPosts = await allPostAPI();
            const userPosts = allPosts.filter(post => post.user._id === userId);
            const loggedUserData = await getMeAPI();

            setUser(userData);
            setPosts(userPosts);
            setLoggedUser(loggedUserData);

            const isUserFollowing = loggedUserData.following.includes(userId);
            setIsFollowing(isUserFollowing);

            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading user details.</p>;
    }

    const handleFollowUnfollow = async (id) => {
        try {
            await followUnfollowAPI(id);
            setFriend(!friend);
            setIsFollowing(!isFollowing);
            fetchUserData();
        } catch (err) {
            console.error("Failed to follow/unfollow user", err);
        }
    }

    return (
        <div className='p-3 flex justify-between overflow-hidden h-screen md:gap-2 sm:flex sm:flex-row gap-2'>
            <div><LeftSection /></div>
            <div className='flex flex-col gap-3 flex-1 overflow-y-scroll h-screen no-scrollbar'>
                <div className='bg-white rounded-xl p-3 flex-1 overflow-y-scroll h-[96vh] no-scrollbar'>
                    <div className='p-9 flex items-center gap-5'>
                        <div>
                            <img src={user.profileImg ? `${baseURL}/uploads/${user.profileImg}` : './avatar.png'} alt={user.username} className='w-32 h-32 rounded-full' />
                        </div>
                        <div>
                            <div className='flex md:gap-2 flex-col gap-2'>
                                <div className='flex flex-row gap-5 items-center'>
                                    <h5 className='font-semibold'>{user.fullName}</h5>
                                    <button onClick={() => handleFollowUnfollow(user._id)} className='border px-4 py-1 rounded hover:bg-gray-300'>
                                        {isFollowing ? 'Unfollow' : 'Follow'}
                                    </button>
                                </div>
                                <p className='text-tertiary-color text-sm md:text-md flex gap-2 items-center'>
                                    <i className="fa-regular fa-calendar-days"></i>
                                    Joined <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                                </p>
                            </div>
                            <div className='flex gap-10 mt-3'>
                                <p>{posts.length} posts</p>
                                <p>{user.followers.length} Followers</p>
                                <p>{user.following.length} Following</p>
                            </div>
                            <p className='text-sm mt-3'>{user.bio}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-col'>
                        <p className='text-center font-semibold mt-2 underline underline-offset-2'>Posts</p>
                        <div className='flex flex-wrap flex-row gap-2 mt-3 items-center justify-start'>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    post.img && <img key={index} src={`${baseURL}/${post.img}`} alt="" className='w-52 h-60' />
                                ))
                            ) : (
                                <p className='text-center mt-3'>No Post</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Suggest setFriend={setFriend} friend={friend} />
        </div>
    );
}

export default UserPage;
