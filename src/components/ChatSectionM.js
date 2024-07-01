// import React, { useEffect, useState } from 'react';
// import Chats from './Chats';
// import ChatInput from './ChatInput';
// import { getMessagesAPI, getMeAPI } from '../services/allAPI'; 
// import { baseURL } from '../services/baseURL';

// function ChatSectionM({ selectedUserId }) {
//     console.log(selectedUserId);
//   const [messages, setMessages] = useState([]);
//   const [user, setUser] = useState({});
//   const [currentUserId, setCurrentUserId] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const data = await getMeAPI();
//         setUser(data || {});
//         setCurrentUserId(data._id); // Assuming the user ID is in the _id field
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setUser({});
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         if (selectedUserId) {
//           const response = await getMessagesAPI(selectedUserId._id);
//           setMessages(response);
//         }
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };

//     fetchMessages();
//   }, [selectedUserId]);

//   // Ensure selectedUserId and messages are populated correctly before rendering
//   if (!selectedUserId || !messages) {
//     return <div>Loadings...</div>; // Or any placeholder or loading indicator
//   }

//   return (
//     <div className='bg-white rounded-xl justify-between hidden flex-col md:flex md:flex-1'>
//       <div className='flex flex-col justify-between'>
//         <div className='flex items-center justify-between cursor-pointer py-3 pe-3 ms-1'>
//           <div className='flex gap-2 items-center'>
//             <div>
//               <img src={selectedUserId?.profileImg ? `${baseURL}/uploads/${selectedUserId?.profileImg}` : "./avatar.png"} alt="" className='w-10 h-10 rounded-full' />
//             </div>
//             <div className='flex flex-col leading-4'>
//               <h4 className='text-md'>{selectedUserId?.fullName}</h4>
//               <p className='text-xs text-tertiary-color'>{selectedUserId?.username}</p>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <Chats messages={messages} currentUserId={currentUserId} user={user} receiver={selectedUserId} />
//       </div>
//       <div className='p-5'>
//         <ChatInput receiverId={selectedUserId} />
//       </div>
//     </div>
//   );
// }

// export default ChatSectionM;
