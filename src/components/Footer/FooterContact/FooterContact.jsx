import React from 'react';
import {
  FooterContactWrapper,
  FooterContactTitle,
  FooterContactList,
  FooterContactListItem,
  FooterContactMap,
  FooterContactMapFrame,
} from './FooterContact.styled';
import { FiPhone } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';

const FooterContact = () => {
  return (
    <FooterContactWrapper>
      <FooterContactTitle>Контакти</FooterContactTitle>
      <FooterContactList>
        <FooterContactListItem>
          <FiPhone size={20} />
          <a href="tel:+380993617383">+380 99 361 73 83</a>
        </FooterContactListItem>
        <FooterContactListItem>
          <FiPhone size={20} />
          <a href="tel:+380665691740">+380 66 569 17 40</a>
        </FooterContactListItem>
        <FooterContactListItem>
          <IoIosMail size={20} />
          <a href="mailto:stemmagazin@gmail.com">stemmagazin@gmail.com</a>
        </FooterContactListItem>
        <FooterContactListItem>
          <MdLocationPin size={20} />
          <p>м. Тлумач, вул. Винниченка 12</p>
        </FooterContactListItem>
        <FooterContactMap>
          <FooterContactMapFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1688.4976018892587!2d25.00135126425209!3d48.86562697231111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730df6d188c6947%3A0x5c20d834e604214e!2z0JzQsNCz0LDQt9C40L0gItCh0YLQldCcIg!5e0!3m2!1suk!2sua!4v1702746834466!5m2!1suk!2sua"
            width="320"
            height="280"
            style={{ border: 0, margin: '10px 0' }}
            allowFFooterContactListlScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Map"
          ></FooterContactMapFrame>
        </FooterContactMap>
      </FooterContactList>
    </FooterContactWrapper>
  );
};

export default FooterContact;
