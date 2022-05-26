import React, {useState} from 'react'
import Contact_list from '../Contact_list/Contact_list';
import './Left_side.css'


function Left_side({ contacts, setContacts, user_info, setChatBox }) {
  return (
    <>
      <tr className='user-info' >
          {user_info}
      </tr>
      <tr className='contacts-list'><Contact_list contacts={contacts} setContacts={setContacts} setChatBox={setChatBox} userName={user_info.props.username} name={user_info.props.name} /></tr>
    </>
  )
}

export default Left_side;