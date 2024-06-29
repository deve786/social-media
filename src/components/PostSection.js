import React, { useState, useEffect } from 'react';
import PostUpload from './PostUpload';
import Post from './Post';
import { allPostAPI, followingPostAPI } from '../services/allAPI';

function PostSection() {
  const [likeHandle, setLikeHandle] = useState(false)
  const [posts, setPosts] = useState([]);

  // const fetchAllPost = async () => {
  //   try {
  //     const data = await allPostAPI();
  //     setPosts(data || []); // Ensure posts is an array
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //     setPosts([]); // Set posts to an empty array in case of error
  //   }
  // };

  const fetchFollowingPost = async () => {
    try {
      const data = await followingPostAPI();
      setPosts(data || []); // Ensure posts is an array
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]); // Set posts to an empty array in case of error
    }
  };
// if(likeHandle==true){
//   fetchFollowingPost();
// }
  useEffect(() => {
    fetchFollowingPost(); 
  }, []);

  return (
    <div className='flex-1 gap-3 flex flex-col px-5 overflow-y-scroll h-screen no-scrollbar pb-5 md:px-10'>
      <PostUpload />
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post._id} data={post} data2={setLikeHandle} data3={likeHandle}/>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default PostSection;
