import React, { useEffect, useState } from 'react';
import { commentAPI, deleteCommentAPI, deleteUserPostAPI, getMeAPI, likeUnlikeAPI, likeUnlikeCommentAPI, userPostAPI } from '../services/allAPI';
import { baseURL } from '../services/baseURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserPost() {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  // Fetch user posts on component mount
  useEffect(() => {
    getUserPost();
  }, []);

  const getUserPost = async () => {
    try {
      const data = await userPostAPI();
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      console.log("postid ", postId);
      const response = await deleteUserPostAPI(postId);
      console.log(response);
      toast.success("Post deleted successfully");
      getUserPost();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error("Error deleting post");
    }
  };

  const handleLikeUnlike = async (postId) => {
    try {
      const response = await likeUnlikeAPI(postId);
      console.log('Like/Unlike Post Response:', response);
      getUserPost();
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  const handleComment = async (postId) => {
    try {
      const response = await commentAPI(postId, { text: comment });
      console.log('Commented on post:', response);
      setComment('');
      getUserPost();
    } catch (error) {
      console.error('Error commenting on post:', error);
    }
  };

  const handleLikeUnlikeComment = async (postId, commentId) => {
    try {
      const response = await likeUnlikeCommentAPI(postId, commentId);
      console.log('Like/Unlike Comment Response:', response);
      getUserPost();
    } catch (error) {
      console.error('Error liking/unliking comment:', error);
      toast.error("Failed to like/unlike comment. Please try again.");
    }
  };

  // handle delete the comment
  const handleDeleteComment = async (postId, commentId) => {
    try {
      const response = await deleteCommentAPI(postId, commentId);
      console.log(response);
      // toast.success("Comment added successfully!"); // Trigger toast notification
      // setComment('');
      getUserPost(); // Refresh posts to show new 
    } catch (error) {
      console.error('Error delete comment on post:', error);
      toast.error("Failed to delete comment. Please try again."); // Toast for error scenario
    }
  };

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
                  <img src={post.user.profileImg ? `${baseURL}/uploads/${post.user.profileImg}` : './avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                </div>
                <div className='flex flex-col leading-4'>
                  <h4 className='text-md'>{post.user.username}</h4>
                  <p className='text-xs text-tertiary-color'>{new Date(post.createdAt).toLocaleString()} </p>
                </div>
              </div>
              <div>
                <button onClick={() => handleDeletePost(post._id)}>
                  <i className="fa-solid fa-trash text-lg"></i>
                </button>
              </div>
            </div>
            <div className='flex gap-3 flex-col'>
              <p>{post.text}</p>
              <img src={`${baseURL}/${post.img}`} alt="" className='w-full rounded' />
            </div>
            <div>
              <div className='m-2 flex gap-2 items-center'>
                <span>
                  <button onClick={() => handleLikeUnlike(post._id)}>
                    <i className={isLiked ? 'fa-solid fa-heart text-primary-color text-lg cursor-pointer' : 'fa-regular fa-heart text-lg cursor-pointer'}></i>
                  </button>
                </span>
                <span>{post.likes.length} Likes</span>
              </div>
              <div className='flex justify-between w-full gap-2'>
                <img src={post.user.profileImg ? `${baseURL}/uploads/${post.user.profileImg}` : './avatar.png'} alt="" className='h-10 w-10 rounded-full' />
                <div className='relative w-full bg-gray-100 flex'>
                  <input type="text" className='w-full bg-transparent  outline-none px-4 py-2 text-sm' value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." />
                </div>
                <button className='ml-3' onClick={() => handleComment(post._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
              <div>
                <div className='flex justify-start flex-col ms-10'>
                  <h2 className='text-sm font-semibold mt-2'>Comments</h2>
                  {post.comments && post.comments.map((comment, index) => {
                    const isCommentLiked = comment.likes.includes(userId);
                    return (
                      <div key={index} className='flex flex-row justify-between mb-2 gap-2'>
                        <div>
                          <div className=' items-center flex gap-1'>
                            <img src={comment.user.profileImg ? `${baseURL}/uploads/${comment.user.profileImg}` : './avatar.png'} alt="" className='w-8 h-8 rounded-full' />
                            <p className='text-sm'>{comment.text}</p>
                          </div>
                          <div className='flex gap-1  items-center'>
                            <button onClick={() => handleLikeUnlikeComment(post._id, comment._id)}>
                              <i className={isCommentLiked ? 'fa-solid fa-heart text-primary-color text-sm cursor-pointer' : 'fa-regular fa-heart text-sm cursor-pointer'}></i>
                            </button>
                            <span className='text-xs'>{comment.likes.length} Likes</span>
                          </div>
                        </div>
                        {user._id === comment.user._id && <button onClick={() => handleDeleteComment(post._id, comment._id)}>
                          <i className="fa-solid fa-trash text-sm"></i>
                        </button>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserPost;
