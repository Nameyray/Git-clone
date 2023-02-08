import React from 'react'
import './../App.css';

const Search = () => (
  <div className='search'>
     <form action="submit">
        <input id='type' type="text" placeholder="Search.." name="search"></input>
        <button id='btn' type="submit">Submit</button>
      </form>
  </div>

)
 


export default Search
