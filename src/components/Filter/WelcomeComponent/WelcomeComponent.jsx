import {
  WelcomeButton,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeText,
} from './WelcomeComponent.styled';
import { useNavigate } from 'react-router-dom';

const WelcomeComponent = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

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
        <WelcomeButton onClick={navigateToLogin}>
          Увійдіть в особистий кабінет
        </WelcomeButton>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeComponent;
