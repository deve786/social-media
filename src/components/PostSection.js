import React from 'react'
import PostUpload from './PostUpload'
import Post from './Post'

function PostSection() {
  return (
    <div  className='flex-1 gap-3 flex flex-col  px-5 overflow-y-scroll h-screen  no-scrollbar pb-5 md:px-10'>
        <PostUpload/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default PostSection