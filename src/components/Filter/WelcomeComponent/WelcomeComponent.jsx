import {
  WelcomeButton,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeText,
} from './WelcomeComponent.styled';

const WelcomeComponent = () => {
  return (
    <WelcomeContainer>
      <WelcomeHeader>Ласкаво просимо!</WelcomeHeader>
      <WelcomeText>
        Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.
      </WelcomeText>
      <WelcomeButton>Увійдіть в особистий кабінет</WelcomeButton>
    </WelcomeContainer>
  );
};

export default WelcomeComponent;
