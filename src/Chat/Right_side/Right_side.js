import React, { useState } from 'react'
import './Right_side.css'
import Text_box from '../Text_box/Text_box';
import Conversation_box from '../Conversation_box/Conversation_box';



function Right_side({setFinalNewMessage, username, contact_info, contactId, server, messages, setMessages}) {


  return (
    <table className='right-side' style={{maxWidth:'800px'}}>
      <tr className='contact-info'>{contact_info}</tr>
      <tr className='conversation-box'><Conversation_box messages={messages} /></tr>
      <tr className='text-box'><Text_box username = {username} contactId = {contactId} server={server} messages={messages} setMessages={setMessages} /></tr>
    </table>)
}

export default Right_side;