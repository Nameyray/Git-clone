import React from 'react';
import './../App.css';

const Navbar = ()=> (
  <div class="topnav">
    <div class="search-container">
    </div>
    <a class="active" href="#home">Home</a>
    <a href="#about">Users</a>
    <a href="Repositories.html">Repositories</a>

    <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit"><i class="fa fa-search"></i>Submit</button>
      </form>
    </div> 
)
   


export default Navbar
