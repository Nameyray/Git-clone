import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import UserInfo from '../Components/UserInfo'
import Repository from '../Components/Repository'
import {getUserData, getUserRepo} from '../api/Api'



function UserPage() {

  //create a user and repo hook
  const[user, setUser] = useState();
  const[repos, setRepos] = useState();
  return (
    <div className='app'>
      <Navbar />
      <Search />
      <UserInfo />
      <Repository />
    </div>
  )
}

export default UserPage
