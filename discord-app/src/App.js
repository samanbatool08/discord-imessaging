import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { selectUser } from './features/userSlice';
import { auth } from 'firebase';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      console.log('user is', authUser)
      if (authUser) {
        // user is logged in
      } else {
        // user is logged out
      }
    })
  }, [])

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
