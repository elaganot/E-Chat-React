import React from 'react';
import NewContactForm from '../NewContactForm/NewContactForm'



function AddContact({userName, contacts, alertFunction}) {

    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add new contact</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <NewContactForm userName={userName} contacts={contacts} alertFunction = {alertFunction}/>
            </div>
        </div>
        </div>
    );

}

export default AddContact;