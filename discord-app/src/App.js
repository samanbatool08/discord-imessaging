import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">

      <Sidebar />

      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
