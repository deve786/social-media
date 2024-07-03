import React, { useEffect, useState } from 'react';
import { getMeAPI, updateProfileAPI } from '../services/allAPI';
import EditProfileModal from './EditProfileModal';
import { baseURL } from '../services/baseURL';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProfileHeader() {
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateType, setUpdateType] = useState(null); // 'profileFields', 'profile', 'cover'

  const fetchUserData = async () => {
    try {
      const data = await getMeAPI();
      setUser(data || {});
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser({});
    }
  };
  useEffect(() => {

    fetchUserData();
  }, []);

  const handleProfileUpdate = async (updatedData) => {
    try {
      await updateProfileAPI(updatedData);
      setUpdateType(null); // Reset update type after successful update
      fetchUserData(); // Refresh user data after update
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setUpdateType(null); // Reset update type if modal is closed
  };

  const handleProfileImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profileImg', file);

    try {
      await updateProfileAPI(formData);
      toast.success("Profile Image updated");
      fetchUserData(); // Refresh user data after update
    } catch (error) {
      console.error("Error updating profile image:", error);
      toast.error("error in profile image updating");
    }
  };

  const handleCoverImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('coverImg', file);

    try {
      const data = await updateProfileAPI(formData);
      toast.success("cover image updated");
      console.log(data);

      fetchUserData(); // Refresh user data after update
    } catch (error) {
      console.error("Error updating cover image:", error);
      toast.error("error cover image updating");
    }
  };

  return (
    <div className="bg-white rounded-xl p-3 flex flex-col gap-3">
      <div className='relative'>
        <label htmlFor="coverImg">
          <input
            type="file"
            id="coverImg"
            className="hidden"
            name='coverImg'
            onChange={handleCoverImageChange}
          />
          <div className='bg-slate-600'><img src={user.coverImg ? `${baseURL}/uploads/${user?.coverImg}` : ''} alt="Profile Cover" className="w-full h-96 object-cover  border border-black rounded" /></div>
        </label>
        <div className="w-52 rounded-full absolute bottom-0 left-5 transform translate-y-1/2">
          <label htmlFor="profileImg">
            <input
              type="file"
              id="profileImg"
              className="hidden"
              name='profileImg'
              onChange={handleProfileImageChange}
            />
            <img
              src={user.profileImg ? `${baseURL}/uploads/${user?.profileImg}` : './avatar.png'}
              alt="Avatar Image"
              className="w-20 h-20 rounded-full cursor-pointer border"
            />
          </label>
        </div>
      </div>

      <div className='mt-12 px-10'>
        <div className='flex justify-between'>
          <h3>{user.fullName}</h3>
          <button
            className='bg-white border-slate-950 border px-2 rounded-xl text-sm md:text-md md:px-4 md:py-1 sm:block hidden'
            onClick={() => {
              setIsModalOpen(true);
              setUpdateType('profileFields'); // Set update type to profile fields
            }}
          >
            Edit Profile
          </button>
          <button
            className='bg-white border-slate-950 border px-2 rounded text-sm md:text-md md:px-4 md:py-1 sm:hidden block'
            onClick={() => {
              setIsModalOpen(true);
              setUpdateType('profileFields'); // Set update type to profile fields
            }}
          >
            <i class="fa-solid fa-pen-to-square"></i>          </button>
        </div>
        <div>
          <div className='flex md:gap-10 md:flex-row flex-col gap-2'>
            <h5 className='font-semibold'>{user.username}</h5>
            <p className='text-tertiary-color text-sm md:text-md flex gap-2 items-center'>
              <i className="fa-regular fa-calendar-days"></i>
              Joined <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </p>
          </div>
          <p className='text-sm'>{user.bio}</p>
        </div>
      </div>

      {isModalOpen &&
        <EditProfileModal
          user={user}
          onClose={handleModalClose}
          onProfileUpdate={handleProfileUpdate}
          updateType={updateType}
        />
      }
    </div>
  );
}

export default ProfileHeader;
