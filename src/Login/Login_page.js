//LIBRARY
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
//CSS
import './Login_page.css'
import './Input/Input.css'
//COMPONENTS
import Label from './Label/Label'
import Input from './Input/Input'


const Login_page = ({ contacts, setContacts, setRegisteredUserName, setRegisteredName, setUserImage }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //Saving the input from the user
    function handleChange(name, value) {
        if (name == 'UserName') {
            setUserName(value);
        }
        else {
            setPassword(value);
        }
    }

    //check in list
    function ifMatch(param) {
        for (const element of contacts) {
            if (element.userName == param.userName && element.password == param.password) {
                setRegisteredUserName(element.userName);
                setRegisteredName(element.name);
                //setUserImage(element.image);
                navigate("/chat");
                return;
            }
        }
        alert('Error username or password')
    }

    function handleSubmit() {
        let account = { userName, password };
        if (account) {
            ifMatch(account);
        }
    }


    return (
        <div className="login-background-container d-flex" style={{justifyContent: "center"}}>

    <div style={{backgroundImage: 'url(../../public/login_background.gif)', width:'100vw'}}>
        <div className="login-content">
            <img src='login_title.png' className="login-title"></img>
            <Label text='UserName'></Label>
            <Input
                attribute={{
                    id: 'UserName',
                    name: 'UserName',
                    type: 'text',
                    placeholder: "Please enter your name"
                }}
                handleChange={handleChange}
            />

            <Label text='Password'></Label>
            <Input className='regular-style'
                attribute={{
                    id: 'Password',
                    name: 'Password',
                    type: 'password',
                    placeholder: "enter your password"
                }}
                handleChange={handleChange}
            />

            <div>not registered? click <Link to={"/register"}>here</Link> to register </div>
            <div className="submit-button-container">
                <nav>
                    <button onClick={handleSubmit} className='login-btn'>
                        LOGIN
                    </button>
                </nav>
            </div>
            </div>
            <a href="https://localhost:7213/">
            <button className='rating-btn'></button>
        </a>
        </div>
        </div>
    )
}

export default Login_page;