import React, { useEffect, useState } from 'react';
import Post from './Post';
import { userPostAPI } from '../services/allAPI';
import UserPost from './UserPosts';

function ProfilePost() {


  return (
    <div className="flex-1 gap-3 flex flex-col px-5  pb-5 md:px-10">

      <UserPost />

    </div>
  );
}

export default ProfilePost;
