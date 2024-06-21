
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Message from './pages/Message';
import Notification from './pages/Notification';

function App() {
  return (
    <div className="App min-h-screen bg-gray-200 ">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/inbox' element={<Message/>}></Route>
        <Route path='/notifications' element={<Notification/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
