import React from 'react'
import PostUpload from './PostUpload'
import Post from './Post'

function PostSection() {
  return (
    <div  className='flex-1 gap-3 flex flex-col  px-10 overflow-y-scroll h-screen  no-scrollbar pb-5'>
        <PostUpload/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default PostSection