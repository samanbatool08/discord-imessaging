import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1>Let's build discord!! </h1>

      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
    </div>
  );
}

export default App;
