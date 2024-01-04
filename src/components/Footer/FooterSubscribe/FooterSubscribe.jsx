import React from 'react';
import {
  FooterSubscribeWrapper,
  FooterSubscribeTitle,
  FooterSubscribeText,
  FooterSubscribeInput,
  FooterSubscribeButton,
} from './FooterSubscribe.styled';

const FooterSubscribe = () => {
  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  }
  return (
    <FooterSubscribeWrapper>
      <FooterSubscribeTitle>Підписатися</FooterSubscribeTitle>
      <FooterSubscribeText>Підписуйтесь на наші новини</FooterSubscribeText>
      <FooterSubscribeInput type="text" placeholder="Ваш Email" />
      <FooterSubscribeButton onClick={clickMessage} >Підписатися</FooterSubscribeButton>
    </FooterSubscribeWrapper>
  );
};

export default FooterSubscribe;
