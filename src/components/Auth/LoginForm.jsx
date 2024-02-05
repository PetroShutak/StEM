import React from 'react'; // useState, // useEffect,
import { createPortal } from 'react-dom';
import {
  Overlay,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthLink,
  CloseButton,
  FormTitle,
} from './Auth.styled';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.getElementById('modal-root');

const LoginForm = () => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };

  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  };

  const forgotPassword = () => {
    alert('Ця функція поки не реалізована');
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick}>
        <AuthContainer>
          <AuthForm>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <FormTitle>Вхід в особистий кабінет</FormTitle>
            <AuthInput type="email" placeholder="Email" name="email" required />
            <AuthInput
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <AuthButton type="submit">Увійти</AuthButton>
            <AuthLink onClick={forgotPassword}>Забули пароль?</AuthLink>
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
                Увійти за допомогою Google-акаунту
              </AuthLink>
            </div>
            <AuthLink to="/registration">
              Немає акаунту? Зареєструватися
            </AuthLink>
          </AuthForm>
        </AuthContainer>
      </Overlay>
    </>,
    modalRoot
  );
};

export default LoginForm;
