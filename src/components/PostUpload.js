import React, { useState } from 'react';
import axios from 'axios';
import { createPostAPI } from '../services/allAPI';

function PostUpload() {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handlePostUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('text', text);
            if (image) {
                formData.append('image', image);
            }

            const result=await createPostAPI(formData)
            console.log(result);

            console.log('Post uploaded:', result);
            // Optionally reset state after successful upload
            setText('');
            setImage(null);
            setImagePreview(null);
        } catch (error) {
            console.error('Error uploading post:', error);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);

        // Preview image
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (selectedImage) {
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <div className='bg-white p-3 rounded-xl flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <img src="./avatar.png" alt="Avatar" className='w-16 rounded-full' />
                <input
                    type="text"
                    className='w-full bg-gray-100 outline-none px-4 py-2 text-sm'
                    placeholder="What's happening?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <label htmlFor='imageUpload'>
                        <i className="fa-solid fa-image text-xl cursor-pointer"></i>
                    </label>
                    <input
                        type='file'
                        id='imageUpload'
                        accept='image/*'
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <i className="fa-regular fa-face-smile text-xl cursor-pointer"></i>
                </div>
                <button
                    className='bg-primary-color px-3 py-1 rounded text-white'
                    onClick={handlePostUpload}
                >
                    Post
                </button>
            </div>
            {imagePreview && (
                <div className="mt-3">
                    <img src={imagePreview} alt="Preview" className="w-52 rounded-lg shadow-md " />
                </div>
            )}
        </div>
    );
}

export default PostUpload;
