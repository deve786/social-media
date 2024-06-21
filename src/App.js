
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Message from './pages/Message';

function App() {
  return (
    <div className="App min-h-screen bg-gray-200 ">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/inbox' element={<Message/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
