import { baseURL } from "./baseURL";
import { commonRequest } from "./commonStructure";

export const registerAPI = async (body) => {
    return await commonRequest('POST', `${baseURL}/api/auth/signup`, body);
};

export const loginAPI = async (body) => {
    return await commonRequest('POST', `${baseURL}/api/auth/signin`, body);
};

export const getNotificationsAPI = async () => {
    return await commonRequest('GET', `${baseURL}/api/notifications`, {});
};

// allPost
export const allPostAPI = async () => {
    return await commonRequest('GET', `${baseURL}/api/post/all`, {});
};

// followingPost
export const followingPostAPI = async () => {
  return await commonRequest('GET', `${baseURL}/api/post/following`, {});
};

// userPost
export const userPostAPI = async () => {
  return await commonRequest('GET', `${baseURL}/api/post`, {});
};


// createPost
export const createPostAPI = async (body) => {
  return await commonRequest('POST', `${baseURL}/api/post/create`, body,true);
};




// deleteUserPost
export const deleteUserPostAPI = async (id) => {
  return await commonRequest('DELETE', `${baseURL}/api/post/${id}`, {});
};


// getMe
export const getMeAPI = async () => {
  return await commonRequest('GET', `${baseURL}/api/auth/me`, {});
};


// logout
export const logoutAPI = async () => {
    localStorage.removeItem('token'); // Clear the token from localStorage on logout
    return await commonRequest('POST', `${baseURL}/api/auth/logout`, {});
};

export const getSuggestAPI = async () => {
    return await commonRequest('GET', `${baseURL}/api/user/suggest`, {});
};


// follow and unfollow
export const followUnfollowAPI = async (id) => {
  return await commonRequest('POST', `${baseURL}/api/user/follow/${id}`, {});
};


// get friends List
export const getFollowingAPI = async () => {
  return await commonRequest('GET', `${baseURL}/api/user/following`, {});
};


// like and Unlike
export const likeUnlikeAPI = async (id) => {
  return await commonRequest('POST', `${baseURL}/api/post/like/${id}`, {});
};


// comment
export const commentAPI = async (id,body) => {
  return await commonRequest('POST', `${baseURL}/api/post/comment/${id}`, body);
};


// upadte
// export const updateProfileAPI = async (body) => {
//   return await commonRequest('POST', `${baseURL}/api/user/update`, body);
// };


export const updateProfileAPI = async (body) => {
  return await commonRequest('POST', `${baseURL}/api/user/update`, body, true);
};