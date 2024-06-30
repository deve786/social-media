import React, { useEffect, useState } from 'react';
import { commentAPI, deleteUserPostAPI, likeUnlikeAPI, followingPostAPI, getMeAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post({ data2, data3 }) {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  
  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getMeAPI();
        setUser(data || {});
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({});
      }
    };

    fetchUserData();
  }, []);

  // Fetch following posts on component mount
  useEffect(() => {
    fetchFollowingPosts();
  }, []);

  // Function to fetch following posts
  const fetchFollowingPosts = async () => {
    try {
      const data = await followingPostAPI();
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    }
  };

  // Function to handle deleting a post
  const handleDeletePost = async (postId) => {
    try {
      const response = await deleteUserPostAPI(postId);
      console.log('Delete Post Response:', response);
      fetchFollowingPosts(); // Refresh posts after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Function to handle liking/unliking a post
  const handleLikeUnlike = async (postId) => {
    try {
      const response = await likeUnlikeAPI(postId);
      console.log('Like/Unlike Post Response:', response);
      fetchFollowingPosts(); // Refresh posts after like/unlike
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  // Function to handle commenting on a post
  const handleComment = async (postId) => {
    try {
      const response = await commentAPI(postId, { text: comment });
      console.log('Commented on post:', response);
      toast.success("Comment added successfully!"); // Trigger toast notification
      setComment('');
      fetchFollowingPosts();
    } catch (error) {
      console.error('Error commenting on post:', error);
      toast.error("Failed to add comment. Please try again."); // Toast for error scenario
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
console.log(posts);
  return (
    <>
      <ToastContainer />
      {posts.map((post) => {
        const userId = user._id;
        const isLiked = post.likes.includes(userId);

        return (
          <div key={post._id} className='bg-white p-3 w-[100%] flex flex-col gap-3 rounded-xl'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row gap-2'>
                <div className='flex'>
                  <img src={post.user.profileImg ? `${baseURL}/uploads/${post.user?.profileImg}` : './avatar.png'} alt="Avatar" className='w-10 h-10 rounded-full' />
                </div>
                <div className='flex flex-col leading-4'>
                  <h4 className='text-md'>{post.user.username}</h4>
                  <p className='text-xs text-tertiary-color'>{new Date(post.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className='flex gap-3 flex-col'>
              <p>{post.text}</p>
              <img src={post.img ? `${baseURL}/${post?.img}` : './post.jpg'} alt="" className='w-full rounded' />
            </div>
            {/* Comment section */}
            <div>
              {/* Input for adding new comment */}
              <div className='m-2 flex gap-2 items-center'>
                <span>
                  <button onClick={() => handleLikeUnlike(post._id)}>
                    <i className={isLiked ? 'fa-solid fa-heart text-primary-color text-lg cursor-pointer' : 'fa-regular fa-heart text-lg cursor-pointer'}></i>
                  </button>
                </span>
                <span>{post.likes.length} Likes</span>
              </div>
              <div className='flex justify-between w-full gap-2'>
                <img src={user.profileImg ? `${baseURL}/uploads/${user?.profileImg}` : './avatar.png'} alt="" className=' w-10 h-10 rounded-full' />
                <div className='relative w-full bg-gray-100 flex'>
                  <input
                    type="text"
                    className='w-full bg-transparent outline-none px-4 py-2 text-sm'
                    name='text'
                    value={comment}
                    onChange={handleInputChange}
                    placeholder="Add a comment..."
                  />
                  <i className="far fa-smile text-xl cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-4"></i>
                </div>
                <button className='ml-3' onClick={() => handleComment(post._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
              {/* Display comments */}
              <div>
                <div className='flex justify-start flex-col ms-10'>
                  <h2>Comments</h2>
                  {post.comments.map((comment, index) => (
                    <div key={index} className='flex items-center mb-2 gap-2'>
                      <img src={comment.user.profileImg ? `${baseURL}/uploads/${comment.user?.profileImg}` : './avatar.png'} alt="" className='w-8 h-8 rounded-full' />
                      <p className='text-sm'>{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
