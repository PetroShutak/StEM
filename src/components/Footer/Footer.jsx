import React from 'react';
import { FooterContent, FooterWrapper } from './Footer.styled';
import Logo from 'components/Logo/Logo';
import {
  FcCalculator,
  FcOnlineSupport,
  FcServices,
  FcSupport,
} from 'react-icons/fc';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {/* <h2
          style={{
            visibility: 'hidden',
          }}
        >
          Footer
        </h2> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <Logo />
          <span>&copy; {new Date().getFullYear()} Всі права захищенні</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <FcCalculator size={32} />
            <FcOnlineSupport size={32} />
            <FcServices size={32} />
            <FcSupport size={32} />
          </div>
        </div>
        <div>
          <h3>Інформація</h3>
          <ul>
            <li>
              <a href="1">Про нас</a>
            </li>
            <li>
              <a href="2">Наша команда</a>
            </li>
            <li>
              <a href="4">Вакансії</a>
            </li>
            <li>
              <a href="4">Відгуки</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Контакти</h3>
          <ul>
            <li>
              <a href="1">+380 99 361 73 83</a>
            </li>
            <li>
              <a href="2">+380 66 569 17 40</a>
            </li>
            <li>
              <a href="mail:to">stemmagazin@gmail.com</a>
            </li>
            <li>
              <p>м. Тлумач, вул. Винниченка 12</p>
            </li>
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1688.4976018892587!2d25.00135126425209!3d48.86562697231111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730df6d188c6947%3A0x5c20d834e604214e!2z0JzQsNCz0LDQt9C40L0gItCh0YLQldCcIg!5e0!3m2!1suk!2sua!4v1702746834466!5m2!1suk!2sua"
                width="320"
                height="280"
                style={{ border: 0, margin: '10px 0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Map"
              ></iframe>
            </li>
          </ul>
        </div>
        <div>
          <h3>Підписатися</h3>
          <p>Підписуйтесь на наші новини</p>
          <input type="text" placeholder="Ваш Email" />
          <button>Підписатися</button>
        </div>
        <div>
          <h3>Ми в соціальних мережах</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '150px',
              gap: '10px',
            }}
          >
            <a href="1">
              <FaFacebook size={24} />
            </a>
            <a href="2">
              <FaInstagram size={24} />
            </a>
            <a href="3">
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
