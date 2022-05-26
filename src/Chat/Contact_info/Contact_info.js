import React from 'react'
import './Contact_info.css'

function Contact_info({chat}) {

    return (
      <table className='contact-info'>
        <th className='contact-image'style={{Width:"20%"}}>{<img className='contact-image' src={chat.image}></img>}</th>
        <th className='contact-name'style={{Width:"80%",fontSize:"30px",textUnderlinePosition:"auto"}} > {chat.name}</th>
      </table>  )
  
}

export default Contact_info;