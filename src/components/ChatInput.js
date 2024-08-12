import { useState } from 'react';
import io from 'socket.io-client';
import { sendMessageAPI } from '../services/allAPI';

const socket = io('https://social-media-backend-black.vercel.app'); // Ensure this matches the server URL

function ChatInput({ currentUserId, receiverId, onNewMessage }) {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if (message.trim()) {
            try {
                const body = { message, image: '' };
                const response = await sendMessageAPI(receiverId._id, body);
                console.log('Message sent:', response);
                setMessage('');

                // Emit a sendMessage event to the server
                const newMessage = { senderId: currentUserId, receiverId: receiverId._id, message };
                socket.emit('sendMessage', newMessage);

                // Update messages in the parent component
                onNewMessage(newMessage);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className='p-3 flex items-center gap-1 w-full border border-2 h-10 md:h-full border-black rounded-full'>
            
            <input
                type="text"
                className='bg-transparent px-3 outline-none w-full rounded'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your Message....'
            />
            
            <button className='ml-3' onClick={handleSendMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </div>
    );
}

export default ChatInput;
