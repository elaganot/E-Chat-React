import React from 'react'
import './User_info.css'

function User_info({username, name, image }) {
  if (name.length > 15)
    name = name.substring(0, 15) + '...';

  return (
    <div className="row"  style={{ maxWidth: '260px', overflow: 'hidden' }}>
      <div style={{ width: '50px', height: '50px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center center', borderRadius: '50%' }}></div>
      <th className='username' style={{ maxWidth: 'inherit' }}> Welcome {name}</th>
      <th className='add-contact'>
        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="bi bi-person-plus-fill"></i>
        </button>
      </th>
    </div>
  )
}

export default User_info;