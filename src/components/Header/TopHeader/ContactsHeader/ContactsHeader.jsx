import React from 'react'
import { Link } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import { ContactsWrappper } from './ContactsHeader.styled';

const ContactsHeader = () => {
  return (
    <ContactsWrappper>
        <FiPhone size={20} />
        <p>+380 99 361 73 83 ,</p>
        <p>+380 66 569 17 40</p>
        <Link href="tel:+380993617383">Передзвонити вам?</Link>
    </ContactsWrappper>
  )
}

export default ContactsHeader