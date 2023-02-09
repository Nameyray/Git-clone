import React from 'react'
import './../App.css';

const Repository = () => (
  
  <div className='repo'>
    <div>
    <div className='title'>
      <i className='fa fa-book pr-1' />
      <a href='#'> <span>Repo Name</span></a>
    </div>
    <span className='desc'>Description</span>
    

    <div className='info'>
      <div className='item'>
        <i className='fa fa-code pr-1' />
        <span>Language Name</span>
      </div>

      <div className='item'>
        <i className='fa fa-code-fork pr-1' />
        <span>Fork</span>
      </div>

      <div className='item'>
        <i className='fa fa-star pr-1' />
        <span>Star</span>
      </div>
    </div>
    </div>
  </div>


)

export default Repository
