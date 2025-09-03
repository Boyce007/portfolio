import React from 'react'
function ContactInfoElement({url,text,icon}) {
  return (
    <div>
      {icon}
      <a href={url}>{text}</a>
    </div>
  )
}

export default ContactInfoElement
