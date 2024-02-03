import React from 'react';
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
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import RegistrationForm from './RegistrationForm';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const modalRoot = document.getElementById('modal-root');

const LoginForm = ({ onClose }) => {
  const [isRegistrationFormVisible, setIsRegistrationFormVisible] =
    useState(false);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = e => {
      const { name, value } = e.target;
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          console.warn('Тип поля не обробляється');
      }
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

  const handleToggleRegistrationForm = () => {
    setIsRegistrationFormVisible(prev => {
      return !prev;
    });
  };

  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    // clickMessage();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
     dispatch(logIn({ email, password }));

      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const forgotPassword = () => {
    alert('Ця функція поки не реалізована');
  };

  return createPortal(
    <>
      <Overlay onClick={handleClickBackdrop}>
        <AuthContainer>
          <AuthForm onSubmit={handleSubmit}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <FormTitle>Вхід в особистий кабінет</FormTitle>
            {error && <p>{error}</p>}
            <AuthInput type="email" placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            />
            <AuthInput type="password" placeholder="Password" 
            name="password"
            value={password}
            onChange={handleChange}
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
            <AuthLink onClick={handleToggleRegistrationForm}>
              Немає акаунту? Зареєструватися
            </AuthLink>
          </AuthForm>
          {isRegistrationFormVisible && (
            <RegistrationForm
              onToggleLoginForm={handleToggleRegistrationForm}
              onClose={onClose}
            />
          )}
        </AuthContainer>
      </Overlay>
    </>,
    modalRoot
  );
};

export default LoginForm;