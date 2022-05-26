import React from 'react'
import Message from '../Message/Message'
import './Conversation_box.css'
import '../Message/Message.css'


function Conversation_box({ messages }) {

  if(messages) {

    var messageList = messages.map((message, key) => {
      return (
        <li className="clearfix">
          <Message {...message} key={key} />
        </li>

      )
    });
  }

  return (
    <ul id="conversation-box" className='conversation-box' style={{listStyle:'none', overflowY: 'scroll' ,maxWidth:'800px' }}>
      {messages && messageList}
    </ul>



  )
}

export default Conversation_box;