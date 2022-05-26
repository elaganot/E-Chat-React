import React, { useState, useRef, useEffect } from "react";
import './Register_page.css'
import './Input/Input.css'
import Label from "./Label/Label";
import Input from "./Input/Input";
import { useNavigate } from "react-router-dom"


function Register_Page({ contacts, setContacts, setRegisteredUserName, setRegisteredName, setUserImage }) {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [missingFields, setmissingFields] = useState(true);
    const [newUser, setNewUser] = useState(false)
    const navigate = useNavigate();


    useEffect(() => {

        if (!missingFields) {
            if (!(userNameError == false && passwordError == false && repeatPasswordError == false)) {
                setIsLogin(false);
                return
            }
        }
    }, [missingFields, userNameError, passwordError, repeatPasswordError, photo]);


    useEffect(() => {
        if (name.length > 0 && password.length > 0
            && userName.length > 0 && repeatPassword.length > 0) {
            setmissingFields(false)
        }
    }, [name, userName, password, repeatPassword]);

  
    useEffect(() => {
        async function fetchData() {
            if(newUser) {
  
                // POST request using fetch inside useEffect React hook
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "userName": newUser.userName, name: newUser.name, password: newUser.password, myContacts: [] })
                };
                await fetch('https://localhost:7213/api/contacts/users', requestOptions)
                console.log(newUser.userName);

                setContacts(curr => [...curr, newUser]);
                setRegisteredUserName(userName);
                setRegisteredName(name);
                navigate("/chat");
            }
        }
        fetchData();
  
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [newUser]);

    function handleChange(name, value) {

        if (name == 'Name') {
            setName(value);
        }
        else if (name == 'UserName') {
            if (value.length < 6) {
                setUserNameError("userName must be at least 6 characters long"
                );
            }
            else {
                setUserNameError(false);
                setUserName(value);
            }
        }
        else if (name == 'Password') {
            if (value.length < 6) {
                setPasswordError("Password Must Be At Least 6 Characters");
            }
            else if (value.search(/[A-Z]/) == -1 && value.search(/[a-z]/) == -1) {
                setPasswordError("Your Password must contain letters");
            }
            else if (value.search(/[0-9]/) == -1) {
                setPasswordError("Your Password must contain numbers");
            }
            else {
                setPasswordError(false);
                setPassword(value)
            }
        }

        else if (name = 'RepeatPassword') {
            if (value != password) {
                setRepeatPasswordError("Passwords are not the same");
            }
            else {
                setRepeatPasswordError(false);
                setRepeatPassword(value);
            }
        }

    }


    function handleSubmit(event) {
        event.preventDefault();
        if (missingFields) {
            alert('There are missing fields.');
        } else {
            setIsLogin(true);
            

            const newContact = { userName: userName, name: name, password: password, picture: 'default.jpg', myContacts: [] };
            setNewUser({ userName: userName, name: name, password: password, picture: 'default.jpg', myContacts: [] });
            // setContacts(curr => [...curr, newContact]);
            // setRegisteredUserName(userName);
            // setRegisteredName(name);
            console.log(newContact.userName);
            console.log(newUser);

            if (photo) {
                //setUserImage(photo)
            }
            else {
                //setUserImage('default.jpg')
            }
            // navigate("/chat");
        }

    }


    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
        setIsFilePicked(true);
    };


    const inputFile = useRef(null)

    const onButtonClick = (event) => {
        event.preventDefault();
        inputFile.current.click();
    };



    return (
        <div className="register-background-container d-flex" style={{justifyContent: "center"}}>
        <div className="register-container">
            <div className="register-content">
                <img src='register_title.png' className="register-title"></img>
                <Label text='Name' ></Label>
                <Input
                    attribute={{
                        id: 'Name',
                        name: 'Name',
                        type: 'text',
                        placeholder: "Please enter your name"
                    }}
                    handleChange={handleChange}
                />

                <Label text='UserName'  style={{textAlign:'center'}}></Label>
                <Input
                    attribute={{
                        id: 'UserName',
                        name: 'UserName',
                        type: 'text',
                        placeholder: "Please enter UserName"
                    }}
                    handleChange={handleChange}
                    param={userNameError}
                />
                {userNameError &&
                    <label className="label-error" style={{textAlign:'center'}}>
                        {userNameError}
                    </label>
                }


                <Label text='Password'></Label>
                <Input className='regular-style'
                    attribute={{
                        id: 'Password',
                        name: 'Password',
                        type: 'password',
                        placeholder: "enter your password"
                    }}

                    handleChange={handleChange}
                    param={passwordError}
                />
                {passwordError &&
                    <label className="label-error"  style={{textAlign:'center'}}>
                        {passwordError}
                    </label>
                }

                <Label text='Repeat Password'></Label>
                <Input className='regular-style'
                    attribute={{
                        id: 'RepeatPassword',
                        name: 'RepeatPassword',
                        type: 'password',
                        placeholder: "enter your password again"
                    }}
                    handleChange={handleChange}
                    param={repeatPasswordError}
                />
                {repeatPasswordError &&
                    <label className="label-error">
                        {repeatPasswordError}
                    </label>
                }


                <div>Already registered? click <a href="/">here</a> to login </div>
                <div className="submit-button-container">
                    <nav>
                        <button onClick={handleSubmit} className='register-btn'>
                            REGISTER
                        </button>

                    </nav>
                </div>
            </div>


        </div>
        </div>

    )

};
export default Register_Page;
