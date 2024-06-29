
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Message from './pages/Message';
import Notification from './pages/Notification';

import Profile from './pages/Profile';
import Authentication from './pages/Authentication';

function App() {
  return (
    <div className="App min-h-screen bg-gray-200 ">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/inbox' element={<Message/>}></Route>
        <Route path='/notifications' element={<Notification/>}></Route>
        <Route path='/login' element={<Authentication/>}></Route>
        <Route path='/register' element={<Authentication register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
