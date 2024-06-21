import React from 'react'
import PostUpload from './PostUpload'
import Post from './Post'

function PostSection() {
  return (
    <div  className='flex-1 gap-3 flex flex-col min-h-screen px-10 overflow-y-auto'>
        <PostUpload/>
        <Post/>
    </div>
  )
}

export default PostSection