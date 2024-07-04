import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Message from './pages/Message';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Authentication from './pages/Authentication';
import SuggestM from './pages/SuggestM';
import FriendsM from './pages/FriendsM';
import ChatSectionM from './components/ChatSectionM';


function App() {
  const [auth, setAuth] = useState(false)
  const [suggest, setSuggest] = useState(false)
  const [friend, setFriend] = useState(false)
  const token = sessionStorage.getItem('token');
  
 
  return (
    <div className="App min-h-screen bg-gray-200">
      <Routes>
        <Route path='/' element={token ? <LandingPage suggest={suggest} setSuggest={setSuggest} setFriend={setFriend} friend={friend} /> : <Navigate to="/login" />} />
        <Route path='/inbox' element={token ? <Message /> : <Navigate to="/login" />} />
        <Route path='/suggest' element={token ? <SuggestM /> : <Navigate to="/login" />} />
        <Route path='/friends' element={token ? <FriendsM /> : <Navigate to="/login" />} />
        <Route path='/chat' element={token ? <ChatSectionM /> : <Navigate to="/login" />} />


        <Route path='/notifications' element={token ? <Notification /> : <Navigate to="/login" />} />
        <Route path='/profile' element={token ? <Profile setFriend={setFriend} friend={friend} /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Authentication setAuth={setAuth}/>} />
        <Route path='/register' element={<Authentication register />} />
        <Route path='*' element={<Navigate to={token ? '/' : '/login'} />} />
      </Routes>
    </div>
  );
}

export default App;
