import React from 'react'
import './../App.css';
import profile from '../assets/profile.jpg';
const UserInfo = () => (
  <div className='user'>
    <img src={profile} alt="" 
     width="140" height= "140"
    />

    <div className='info'>
      <h5 id="h3">userName</h5>
      </div>

    <div className='span1'>
    <div class="span">
      <i className='fa fa-map-marker pr-1'/>
      <span> Location .</span>
    </div>

    <div class="span">
      <i className='fa fa-envelope pr-1'/>
      <span> Email</span>
    </div>

    <div class="span">
      <i className='fa fa-group pr-1'/>
      <span> Followers </span>
    </div>

    <div class="span">
      <i className='fa fa-heart pr-1'/>
      <span> Following</span>
    </div>
   
    </div>
    
  </div>
   
   
)

export default UserInfo
