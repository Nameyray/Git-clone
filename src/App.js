import React from 'react';
import './App.css';
import UserInfo from './Components/UserInfo';
import Navbar from './Components/Navbar';
import Search from './Components/Search'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Search />
     <UserInfo />
    
    
    </div>
  );
}

export default App;
