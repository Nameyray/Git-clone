import React from 'react';
import './App.css';
import UserInfo from './Components/UserInfo';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Repository from './Components/Repository';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Search />
     <UserInfo />
     <Repository />
    
    
    </div>
  );
}

export default App;
