import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SocialBlockWrapper } from './SocialBlock.styled';

const SocialBlock = () => {
  return (
    <SocialBlockWrapper>
      <Link>
        <FaFacebook size={24} />
      </Link>
      <Link>
        <FaInstagram size={24} />
      </Link>
      <Link>
        <FaTelegram size={24} />
      </Link>
    </SocialBlockWrapper>
  );
};

export default SocialBlock;
