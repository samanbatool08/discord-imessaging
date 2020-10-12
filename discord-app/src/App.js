import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
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
        <h2>You need to log in </h2>
      )}
    </div>
  );
}

export default App;
