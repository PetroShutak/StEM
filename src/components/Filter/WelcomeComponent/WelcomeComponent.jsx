import LoginForm from 'components/Auth/LoginForm';
import {
  WelcomeButton,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeText,
} from './WelcomeComponent.styled';
import { useState } from 'react';

const WelcomeComponent = () => {
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);

  const toggleModal = () => setIsShowAuthModal(prev => !prev);

  // const clickMessage = () => {
  //   alert('Ця функція поки не реалізована');
  // };

  return (
    <>
      <WelcomeContainer>
        <WelcomeHeader>Ласкаво просимо!</WelcomeHeader>
        <WelcomeText>
          Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.
        </WelcomeText>
        <WelcomeButton onClick={toggleModal}>
          Увійдіть в особистий кабінет
        </WelcomeButton>
      </WelcomeContainer>
      {isShowAuthModal && <LoginForm onClose={toggleModal} />}
    </>
  );
};

export default WelcomeComponent;
