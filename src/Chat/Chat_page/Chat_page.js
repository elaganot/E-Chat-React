import React, { useState } from 'react'
import Right_side from '../Right_side/Right_side'
import Left_side from '../Left_side/Left_side'
import User_info from '../User_info/User_info'
import './Chat_page.css'
import Contact_info from '../Contact_info/Contact_info'


function Chat_page({ contacts, setContacts, username, name, user_image }) {
  const [chatBox, setChatBox] = useState(false);
  return (
    <div className="chatPage-background-container d-flex" style={{justifyContent: "center"}}>
      <table className='chat-page d-flex' style={{ minWidth: '800px', padding: "2%", marginTop: "5%"}} >
        <th className='left-side' >
          <Left_side contacts={contacts} setContacts={setContacts} user_info={<User_info username={username} name={name} image={user_image} />} setChatBox={setChatBox} />
        </th>
        <th className='right-side'>
          {chatBox && <Right_side username = {username} contact_info={<Contact_info chat={chatBox} />} contactId = {chatBox.id} server={chatBox.server} messages={chatBox.messages} setMessages={chatBox.setMessages} />}
        </th>
      </table>
      </div>
  )
}

export default Chat_page;