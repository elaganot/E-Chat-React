import React, { useState, useEffect } from 'react'
import "./Contact_item.css"

function Contact_item({id, name, server, messages, userName, setChatBox }) {


  const [isPressed, setIsPressed] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [newTime, setNewTime] = useState('');

  if(messages && (messages.length > 0)) {
    setNewMessage(messages[messages.length -1].content);
    setNewTime(messages[messages.length -1].created);
  }

  const [messagesUpdated, setMessages] = useState(messages);


  useEffect(() => {
    if (isPressed) {
      if(messagesUpdated.length > 0) {
      //handleChatBox();
      setChatBox({image: 'default.jpg', id: id, name: name, server: server, messages: messagesUpdated, setMessages: setMessages});
      setNewMessage(messagesUpdated[messagesUpdated.length - 1].content);
      var time = new Date();
      setNewTime(time.getHours() + ':' + time.getMinutes());
      }
    }
  }, [messagesUpdated]);

  function handleChatBox() {
    getMessages();
    setIsPressed(true)
    setChatBox({image: 'default.jpg', id: id, name: name, server: server, messages: messagesUpdated, setMessages: setMessages});
  }

  async function getMessages() {

    const response = await fetch('https://localhost:7213/api/contacts/' + userName + '/' + id + '/messages', {
      method: 'GET'
    })
    const data = await response.json();
    setMessages(data);
  }

    let shortenedMessage = newMessage
    if (newMessage && newMessage.length > 25)
      shortenedMessage = newMessage.substring(0, 25) + '...';

  return (
    <button className = "user-button" onClick={() => handleChatBox()}>
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <img src={'default.jpg'} className='contact-image'></img>
      <div class="ms-2 me-auto">
        <div className="contact-name"
          style={{fontSize:"me",fontWeight:'bold' }}>{name}</div>
        <div className="contact-message"  
        style={{ fontFamily: "Candara",fontWeight:"normal",wordBreak: 'break-word'
      }}>{
          shortenedMessage
        }</div>
      </div>
      <span class="message-time"  style={{ fontFamily: "Gabriola",fontWeight:"bold"}}>{newTime}</span>
    </li>
    </button>
  )
}

export default Contact_item;