import React from 'react';
import {
  FooterContent,
  FooterWrapper,
  SocialSubscribeWrapper,
} from './Footer.styled';
import FooterFirstCopmonent from './FooterFirstCopmonent/FooterFirstCopmonent';
import FooterInfoBlock from './FooterInfoBlock/FooterInfoBlock';
import FooterContact from './FooterContact/FooterContact';
import FooterSubscribe from './FooterSubscribe/FooterSubscribe';
import FooterSocialBlock from './FooterSocialBlock/FooterSocialBlock';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterFirstCopmonent />
        <FooterInfoBlock />
        <FooterContact />
        <SocialSubscribeWrapper>
          <FooterSocialBlock />
          <FooterSubscribe />
        </SocialSubscribeWrapper>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
