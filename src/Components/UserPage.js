import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import UserInfo from '../Components/UserInfo'
import Repository from '../Components/Repository'
import Loading from '../Components/Loading'
import {getUserData, getUserRepos} from '../api/Api'




function UserPage({match}) {

  //create a user and repo hook
  const[user, setUser] = useState();
  const[repos, setRepos] = useState();
  const userNameParams = match.params.userName;

  //hook to run whenever a user is changed
  useEffect(() => {
    fetchUser()
    fetchRepos()

  }, [fetchUser, fetchRepos] )
  async function fetchUser(){
    const{data} = await getUserData(userNameParams); 
    setUser(data)
  }

  async function fetchRepos(){
    const{data} = await getUserRepos(user); 
    setRepos(data)
  }
  return (

    <>
    {user ? (
    <>
      <Navbar />
      <Search />
      <UserInfo />
      <Repository /> 
      
      </>
    ) : (
      <Loading />
    )}
  </>
   
  )
}

export default UserPage



