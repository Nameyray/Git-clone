import React from 'react'
import './../App.css';
const UserInfo = () => (
  <div className='user'>
    <img src="" alt="logo.svg" class="avatar"
     width="130" height= "130"
    />

    <div className='info'>
      <h5 id="h3">userName</h5>

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
