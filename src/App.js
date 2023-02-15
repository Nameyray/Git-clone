import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Search from './Components/Search';
// import UserInfo from './Components/UserInfo';
// import Repository from './Components/Repositories';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Switch, Route, Navigate} from 'react-router-dom';
// import UserPage from '../src/Components/UserPage'
import UserPage from './Components/UserPage';

function App() {
  return (
    <div className='app'>
      <UserPage />
    </div>
    // <BrowserRouter>

    // <Switch>
    //   <Route path = "/:userName" component = {UserPage } /> 
    //    <Navigate to = {'/Nameyray'} />
   
    // </Switch>
     
    // </BrowserRouter>
    
  
  
    
    
    
  
  );
}

export default App;
