import React, { useState, useEffect, useRef } from 'react'
import './Text_box.css'
import File_Record_Buttons from '../File_Record_Buttons/File_Record_Buttons';
import RecordModal from '../RecordModal/RecordModal';
import AttachFile from '../AttachFile/AttachFile';
 import { HubConnectionBuilder } from '@microsoft/signalr';


function Text_box({ username, contactId, server, messages, setMessages }) {

  const [ connection, setConnection ] = useState(null);
  //const [ chat, setChat ] = useState(messages);
  const latestChat = useRef(null);

  if(messages == null) {
    setMessages([]);
  }

  latestChat.current = messages;


  
  useEffect(() => {
      const newConnection = new HubConnectionBuilder()
          .withUrl('https://localhost:7213/hubs/chat')
          .withAutomaticReconnect()
          .build();

      setConnection(newConnection);
  }, []);

  useEffect(() => {
      if (connection) {
          connection.start()
              .then(result => {
                  console.log('Connected!');
                  connection.on('ReceiveMessage', message => {
                      console.log('receive message')
                      getMessages();

                      // if ((message.to == username) && (message.from == contactId)) {
                      //   console.log(message);
                      //   var time = new Date();
                      //   const item = { content: message.content, created: time.getHours() + ':' + time.getMinutes(), sent: false }
                      //   setMessages([...latestChat.current, item]);
                      // }
                        
                  });
              })
              .catch(e => console.log('Connection failed: ', e));
      }
  }, [connection]);

  const sendMessage = async (message) => {
      // const chatMessage = {

      // };
      if (connection['connection']['_connectionStarted']) {
          try {
              await connection.send('SendMessage', message);
          }
          catch(e) {
              console.log(e);
          }
      }
      else {
          alert('No connection to server yet.');
      }
  }



  useEffect(() => {
    const convoBox = document.getElementById("conversation-box");
    convoBox.scrollTop = convoBox.scrollHeight;
  });

  const [newMessage, setNewMessage] = useState('');

  const [finalNewMessage, setFinalNewMessage] = useState('');


  function handleChange(event) {
    setNewMessage(event.target.value);
  }

  async function fetchData(message) {

    if(message != '') {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ "content": message })
      };
      await fetch('https://localhost:7213/api/contacts/' + username + '/' + contactId + '/messages', requestOptions)

      const requestOptions2 = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ "from": username, "to": contactId, "content": message })
      };

      await fetch('https://' + server + '/api/transfer', requestOptions2)

      const messageObject = {
        From: username,
        To: contactId,
        Content: message,
      };
      sendMessage(messageObject)


      const response = await fetch('https://localhost:7213/api/contacts/' + username + '/' + contactId + '/messages', {
        method: 'GET'
      })
      const data = await response.json();
      setMessages(data);

    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newMessage.length > 0) {
      setFinalNewMessage(newMessage);
      const msg = newMessage;
      setNewMessage('');
      var time = new Date();
      const item = { content: msg, created: time.getHours() + ':' + time.getMinutes(), sent: true }
      //setMessages([...messages, item]);
      fetchData(msg);
      //getMessages();

    }
  }

  async function getMessages() {

    const response = await fetch('https://localhost:7213/api/contacts/' + username + '/' + contactId + '/messages', {
      method: 'GET'
    })
    const data = await response.json();
    setMessages(data);
  }


  return (
    <table className='text-box' >
 

      <th style={{ width: '100%', height: '100%' }}>
        <form onSubmit={handleSubmit} >
          <table className='new-message' style={{ width: '100%', height: '100%' }}>
            <th id="text-input" className='text-input' ><input className='text-input' type="text" placeholder="New message here..." value={newMessage} onChange={handleChange} /></th>
            <th className='send-button'>
              <button className="send-button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 20">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </th>
          </table>
        </form>
      </th>

      <AttachFile messages={messages} alertFunction={setMessages} />
      <RecordModal messages={messages} alertFunction={setMessages} />

    </table>
  )
}

export default Text_box;