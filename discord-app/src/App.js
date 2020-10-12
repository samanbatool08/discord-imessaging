import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    //BEM naming convention
    <div className="app">
      {user ? ( 
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
