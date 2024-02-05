import React, {
  useState,
  //  useEffect
} from 'react';
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
import ErrorText from './ErrorText';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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

  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const isLoggingIn = useSelector(state => state.auth.isRefreshing);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   // Очищення форми при зміні статусу isLoggingIn
  //   if (!isLoggingIn) {
  //     setCredentials({
  //       email: '',
  //       password: '',
  //     });
  //   }
  // }, [isLoggingIn]);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Заблокувати форму під час входу
      if (isLoggingIn) {
        return;
      }

      await dispatch(logIn(credentials));

      // Якщо все пройшло успішно, очистити форму або викликати інші дії

      setCredentials({
        email: '',
        password: '',
      });
      if (!error) {
        onClose();
      }
    } catch (error) {
      // Обробка помилок
      console.error('Помилка входу:', error);
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick}>
        <AuthContainer>
          <AuthForm onSubmit={handleSubmit}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <FormTitle>Вхід в особистий кабінет</FormTitle>
            {error && <ErrorText message={error} />}
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              disabled={isLoggingIn} // Заблокувати поле під час входу
            />
            <AuthInput
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              disabled={isLoggingIn} // Заблокувати поле під час входу
            />
            <AuthButton type="submit" disabled={isLoggingIn}>
              {isLoggingIn ? 'Вхід...' : 'Увійти'}
            </AuthButton>
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
