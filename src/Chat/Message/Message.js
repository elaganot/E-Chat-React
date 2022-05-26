import React from 'react';
import "./Message.css"



function Message({ content, created, sent }) {

    if (sent) {
        return (
            <div className="chat-message ">
                {content}
                <div className="chat-time">{created}</div>
            </div>


        )
    }
    else {
        return (
            <div className="friend-message">
                {content}
                <div className="chat-time">{created}</div>
            </div>
        )
    }

}

export default Message;