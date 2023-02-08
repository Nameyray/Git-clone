import React from 'react'

const Repository = () => (
  <div className='card'>
    <div>
    <div className='title'>
      <i className='fa fa-book pr-1' />
      <a href='#'> <span>Repo Name</span></a>
    </div>
    <span className='desc'>Description</span>
    </div>

    <div className='info'>
      <div className='item'>
        <i className='fa fa-code pr-1' />
        <span>Language Name</span>
      </div>

      <div className='item'>
        <i className='fa fa-fork pr-1' />
        <span>Fork</span>
      </div>

      <div className='item'>
        <i className='fa fa-star pr-1' />
        <span>Star</span>
      </div>
    </div>
  </div>


)

export default Repository