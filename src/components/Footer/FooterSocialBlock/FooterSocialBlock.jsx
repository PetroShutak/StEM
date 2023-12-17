import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { FooterSocialBlockWrapper } from './FooterSocialBlock.styled';
import { Link } from 'react-router-dom';

const FooterSocialBlock = () => {
  return (
    <FooterSocialBlockWrapper>
      <h3>Ми в соціальних мережах</h3>
      <div>
        <Link>
          <FaFacebook size={24} />
        </Link>
        <Link>
          <FaInstagram size={24} />
        </Link>
        <Link>
          <FaTelegram size={24} />
        </Link>
      </div>
    </FooterSocialBlockWrapper>
  );
};

export default FooterSocialBlock;
