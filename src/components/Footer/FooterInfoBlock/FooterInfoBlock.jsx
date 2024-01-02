import React from 'react';
import {
  FooterInfoBlockWrapper,
  FooterInfoBlockTitle,
  FooterInfoBlockList,
  FooterInfoBlockListItem,
  FooterInfoBlockListLink,
} from './FooterInfoBlock.styled';

const FooterInfoBlock = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <FooterInfoBlockWrapper>
      <FooterInfoBlockTitle>Інформація</FooterInfoBlockTitle>
      <FooterInfoBlockList>
        <FooterInfoBlockListItem>
          <FooterInfoBlockListLink onClick={handleScrollToTop} to="/about">
            Про нас
          </FooterInfoBlockListLink>
        </FooterInfoBlockListItem>
        <FooterInfoBlockListItem>
          <FooterInfoBlockListLink onClick={handleScrollToTop} to="/ourteam">
            Наша команда
          </FooterInfoBlockListLink>
        </FooterInfoBlockListItem>
        <FooterInfoBlockListItem>
          <FooterInfoBlockListLink onClick={handleScrollToTop} to="/joboffers">
            Вакансії
          </FooterInfoBlockListLink>
        </FooterInfoBlockListItem>
        <FooterInfoBlockListItem>
          <FooterInfoBlockListLink onClick={handleScrollToTop} to="/reviews">
            Відгуки
          </FooterInfoBlockListLink>
        </FooterInfoBlockListItem>
      </FooterInfoBlockList>
    </FooterInfoBlockWrapper>
  );
};

export default FooterInfoBlock;
