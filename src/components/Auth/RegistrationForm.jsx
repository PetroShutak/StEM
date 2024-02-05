import React from // useState // useEffect,
'react';
import { createPortal } from 'react-dom';
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
import { useNavigate } from 'react-router-dom';


const modalRoot = document.getElementById('modal-root');

const RegistrationForm = () => {
  const navigate = useNavigate();
  const onClose = () => {
   navigate(-1);
 };
  
  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick} >
        <AuthContainer>
          <AuthForm>
            <CloseButton onClick={onClose} >&times;</CloseButton>
            <FormTitle>Реєстрація</FormTitle>
            <AuthInput
              type="text"
              placeholder="
                Призвіще та ім'я"
              name="name"
              required
            />
            <AuthInput
              type="email"
              placeholder="Електронна пошта"
              name="email"
              required
            />
            <AuthInput
              type="password"
              placeholder="Пароль"
              name="password"
              required
            />
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
            <AuthLink to='/login'>
              Вже зареєстровані? Увійти
            </AuthLink>
          </AuthForm>
        </AuthContainer>
      </Overlay>
    </>,
    modalRoot
  );
};

export default RegistrationForm;
