import React from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import UserInfo from '../Components/UserInfo'
import Repository from '../Components/Repository'



function UserPage() {
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
