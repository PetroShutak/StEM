import React, { useEffect } from 'react';
import {
  Overlay,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthButton,
  CloseButton,
  AuthLink,
  FormTitle,
} from './Auth.styled';
import { FcGoogle } from 'react-icons/fc';

const RegistrationForm = ({ onToggleLoginForm, onClose }) => {
  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    clickMessage();
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <Overlay onClick={handleClickBackdrop}>
        <AuthContainer>
          <AuthForm onSubmit={handleSubmit}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <FormTitle>Реєстрація</FormTitle>
            <AuthInput
              type="text"
              placeholder="
                Призвіще та ім'я"
            />
            <AuthInput type="email" placeholder="Електронна пошта" />
            <AuthInput type="password" placeholder="Пароль" />
            <AuthButton type="submit">Реєстрація</AuthButton>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <FcGoogle />
              <AuthLink onClick={clickMessage}>
                Зареєструватися через Google
              </AuthLink>
            </div>
            <AuthLink onClick={onToggleLoginForm}>
              Вже зареєстровані? Увійти
            </AuthLink>
          </AuthForm>
        </AuthContainer>
      </Overlay>
    </>
  );
};

export default RegistrationForm;
