import React from 'react'
function ContactInfoElement({url,text,icon}) {
  return (
    <div class='contact-link-element'>
      {icon}
      <a href={url}>{text}</a>
    </div>
  )
}

export default ContactInfoElement
