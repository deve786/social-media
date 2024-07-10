import React, { useEffect, useState } from 'react';
import { commentAPI, likeUnlikeAPI, followingPostAPI, getMeAPI, likeUnlikeCommentAPI, deleteCommentAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

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
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to handle liking/unliking a post
  const handleLikeUnlike = async (postId) => {
    try {
      const response = await likeUnlikeAPI(postId);
      console.log('Like/Unlike Post Response:', response);
      fetchFollowingPosts();
      // Optimistically update the post list
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: response.likes } : post
        )
      );
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
      fetchFollowingPosts(); // Refresh posts to show new comment
    } catch (error) {
      console.error('Error commenting on post:', error);
      toast.error("Failed to add comment. Please try again."); // Toast for error scenario
    }
  };

  // handle like and Unlike the comment
  const handleLikeUnlikeComment = async (postId, commentId) => {
    try {
      const response = await likeUnlikeCommentAPI(postId, commentId);
      console.log(response);
      // toast.success("Comment added successfully!"); // Trigger toast notification
      // setComment('');
      fetchFollowingPosts(); // Refresh posts to show new comment
    } catch (error) {
      console.error('Error like and unlike comment on post:', error);
      toast.error("Failed to like and unlike comment. Please try again."); // Toast for error scenario
    }
  };


  // handle delete the comment
  const handleDeleteComment = async (postId, commentId) => {
    try {
      const response = await deleteCommentAPI(postId, commentId);
      console.log(response);
      // toast.success("Comment added successfully!"); // Trigger toast notification
      // setComment('');
      fetchFollowingPosts(); // Refresh posts to show new comment
    } catch (error) {
      console.error('Error delete comment on post:', error);
      toast.error("Failed to delete comment. Please try again."); // Toast for error scenario
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  console.log(user);
  console.log(posts);
  // Loading skeleton
  const LoadingSkeleton = () => (
    <div role="status" className="max-w-2xl p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="flex items-center mt-4">
        <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );

  console.log(posts);
  return (
    <>
      <ToastContainer />
      {loading ? (
        <LoadingSkeleton />
      ) : (
        posts.map((post) => {
          const userId = user._id;
          const isLiked = post.likes && post.likes.includes(userId);

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
                <img src={post.img ? `${baseURL}/${post?.img}` : ''} alt="" className='w-full rounded' />
              </div>
              <div>
                <div className='m-2 flex gap-2 items-center'>
                  <span>
                    <button onClick={() => handleLikeUnlike(post._id)}>
                      <i className={isLiked ? 'fa-solid fa-heart text-primary-color text-lg cursor-pointer' : 'fa-regular fa-heart text-lg cursor-pointer'}></i>
                    </button>
                  </span>
                  <span>{post.likes && post.likes.length} Likes</span>
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
                  </div>
                  <button className='ml-3' onClick={() => handleComment(post._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-color">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className='flex justify-start flex-col ms-10'>
                    <h2>Comments</h2>
                    {post.comments.map((comment, index) => {
                      console.log(comment);
                      const isCommentLiked = comment.likes && comment.likes.includes(userId);

                      return (
                        <>
                          <div key={index} className='flex flex-row justify-between  mb-1 '>
                            <div>
                              <div className='flex items-center gap-2'>
                                <img src={comment.user.profileImg ? `${baseURL}/uploads/${comment.user?.profileImg}` : './avatar.png'} alt="" className='w-8 h-8 rounded-full' />
                                <p className='text-sm'>{comment.text}</p>
                              </div>
                              <div className='flex gap-1 items-center ms-10'>
                                <span>
                                  <button onClick={() => handleLikeUnlikeComment(post._id, comment._id)}>
                                    <i className={isCommentLiked ? 'fa-solid fa-heart text-primary-color text-sm cursor-pointer' : 'fa-regular fa-heart text-sm cursor-pointer'}></i>
                                  </button>
                                </span>
                                <span className='text-sm'>{comment.likes && comment.likes.length} Likes</span>
                              </div>
                            </div>
                            {user._id === comment.user._id && <button onClick={() => handleDeleteComment(post._id, comment._id)}>
                              <i className="fa-solid fa-trash text-sm"></i>
                            </button>}
                          </div>

                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default Post;
