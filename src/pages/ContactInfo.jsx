import React from 'react'
import ContactInfoElement from '../components/ContactInfoElement'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Feel Free to reach out anytime</p>

      <div class='contact-info'>
        <a>daniel.boyce35@gmail.com</a>
        <ContactInfoElement href="https://github.com/Boyce007"
        text="Github"
        icon={<FaGithub size={20} />}
        />
        <ContactInfoElement 
        href="https://www.linkedin.com/in/daniel-i-boyce-b6395a241" 
        text="LinkedIn"
        icon={<FaLinkedin size={20} />}
        />
      </div>
    </div>
  )
}

export default ContactInfo
