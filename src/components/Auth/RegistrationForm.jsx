import React, { useEffect, useState } from 'react';
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
import { signUp } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const RegistrationForm = ({ onToggleLoginForm, onClose }) => {
  const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = e => {
      const { name, value } = e.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
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
  
  const clickMessage = () => {
    alert('Ця функція поки не реалізована');
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    // clickMessage();
    if (!email || !password || !name) {
      setError('Please fill in all fields');
      return;
    }

    try {
     dispatch(signUp({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Invalid email or password');
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

  return (
    <>
      <Overlay onClick={handleClickBackdrop}>
        <AuthContainer>
          <AuthForm onSubmit={handleSubmit}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <FormTitle>Реєстрація</FormTitle>
            {error && <p>{error}</p>}
            <AuthInput
              type="text"
              placeholder="
                Призвіще та ім'я"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <AuthInput type="email" placeholder="Електронна пошта" 
            name="email"
            value={email}
            onChange={handleChange}
            required
            />
            <AuthInput type="password" placeholder="Пароль"
            name="password"
            value={password}
            onChange={handleChange}
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
