import axios from "axios";
//define the api base url
const URL_BASE = "https://api.github.com"

//user Name
export async function getUserData(userName){
  const userInfo = await axios.get(`$("URL_BASE")/user/${userName}`)

  console.log(userInfo)

  return userInfo
}

//Repos
export async function getUserRepos(userName){
  const repos = await axios.get(`$("URL_BASE")/user/${userName}/repos`)

  console.log(repos)
  
  return repos
  
}