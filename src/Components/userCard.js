import React from 'react'

function UserCard ({ user }) {
  return (
    <div className='p-md-5 ps-3'>
      <h3 className='h3 text-dark '>
        Hi there , <span className='fw-light'>{user || 'jane'}</span>
      </h3>
      <p className='fs-6 fw-lighter text-muted'>How does he feel ?</p>
    </div>
  )
}

export default UserCard
