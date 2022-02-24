import React from 'react'

function UserCard ({ device }) {
  return (
    <div className='p-md-5 ps-3'>
      <h3 className='h3 text-dark '>
        Hello there, 
      </h3>
      <p className='fs-6 fw-lighter text-muted'>How does he feel ?</p>
      <p className='fs-6 fw-lighter text-muted'>Device ID : {device}</p>
    </div>
  )
}

export default UserCard
