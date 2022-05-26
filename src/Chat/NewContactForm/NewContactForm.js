import React, { useState } from 'react';



function NewContactForm({ userName, contacts, alertFunction }) {
    const [contactUserName, setContactUserName] = useState('');
    const [nickName, setNickName] = useState('');
    const [server, setServer] = useState('');


    function handleChangeUserName(event) {
        setContactUserName(event.target.value);
    }
    function handleChangeNickName(event) {
        setNickName(event.target.value);
    }
    function handleChangeServer(event) {
        setServer(event.target.value);
    }

    function handleSubmit(event) {

        event.preventDefault();
        // Check that user exists
        const myUser = contacts.find((contact) => {
            return contact.userName == userName;
        });

        if (userName == contactUserName) {
            alert("You can't add yourself");
            return;
        }
        // const search = this.props.contacts.find((contact) => {
        //   return contact.name == this.state.value;
        // });

        const search = { id: contactUserName, name: nickName, server: server };
        if (search != null) {
            const x = myUser.myContacts;
            var friendsName = Object.keys(x);
            for (let i = 0; i < friendsName.length; i++) {
                if (x[i].id == contactUserName) {
                    alert('This contact already exists');
                    return;
                }
            }

            const item = { id: search.id, name: search.name, server: search.server, messages: [] };
            alertFunction(item)
            x.push(item)
        } else {
            alert("User does not exist")
        }

    }

    return (
        <form id="create-contact-form" onSubmit={handleSubmit}>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="contact-name" class="col-form-label"> Contact's Identifier</label>
                    <input type="text" class="form-control" id="contact-name" value={contactUserName} onChange={handleChangeUserName}></input>
                </div>
                <div class="mb-3">
                    <label for="contact-nickname" class="col-form-label"> Contact's Nickname</label>
                    <input type="text" class="form-control" id="contact-nickname" value={nickName} onChange={handleChangeNickName}></input>
                </div>
                <div class="mb-3">
                    <label for="contact-server" class="col-form-label"> Contact's Server</label>
                    <input type="text" class="form-control" id="contact-server" value={server} onChange={handleChangeServer}></input>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-dark">Add</button>
            </div>
        </form>
    );

}
export default NewContactForm;
