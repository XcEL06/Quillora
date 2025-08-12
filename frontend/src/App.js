=== FILE: frontend/src/App.js ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import Messages from './pages/Messages';
import Admin from './pages/Admin';
import './styles.css';

export default function App(){
  return (
    <Router>
      <nav className='nav'>
        <Link to='/'>Quillora</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/groups'>Groups</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/admin'>Admin</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}
