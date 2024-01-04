import {
  WelcomeButton,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeText,
} from './WelcomeComponent.styled';

const WelcomeComponent = () => {
  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  }
  return (
    <WelcomeContainer>
      <WelcomeHeader>Ласкаво просимо!</WelcomeHeader>
      <WelcomeText>
        Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.
      </WelcomeText>
      <WelcomeButton onClick={clickMessage} >Увійдіть в особистий кабінет</WelcomeButton>
    </WelcomeContainer>
  );
};

export default WelcomeComponent;
