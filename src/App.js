import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Chat_page from './Chat/Chat_page/Chat_page';
import Login from './Login/Login_page';
import Register_Page from './Register/Register_page';
import './index.css'
import Contacts from './Chat/Contacts/Contacts';



function App() {

  const [userName, setUserName] = useState("eden");
  const [name, setName] = useState("Eden Hamami");
  const [userImage, setUserImage] = useState("default.jpg");

  const [contacts, setContacts] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://localhost:7213/api/contacts/users', {
      method: 'GET'
    })
    const data = await response.json();
    setContacts(data);
  }, [])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login className="login-page" contacts={contacts} setContacts={setContacts} setRegisteredUserName={setUserName} setRegisteredName={setName} setUserImage={setUserImage} />} />
        <Route path="register" element={<Register_Page contacts={contacts} setContacts={setContacts} setRegisteredUserName={setUserName} setRegisteredName={setName} setUserImage={setUserImage} />} />
        <Route path="chat" element={<Chat_page contacts={contacts} setContacts={setContacts} username={userName} name={name} user_image={userImage} />} />
      </Routes>
    </div>
  )
}

export default App;
