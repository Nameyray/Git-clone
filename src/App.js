import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Search from './Components/Search';
// import UserInfo from './Components/UserInfo';
// import Repository from './Components/Repositories';
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";

import UserPage from './Components/UserPage';

function App() {
  // const username = prompt("Enter Github Username");
  return (
    
      
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path ={"/Nameyray"} />
      </Routes>
    </Router>
  );
}

export default App;
