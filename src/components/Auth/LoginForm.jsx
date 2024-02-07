import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  Overlay,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthLink,
  CloseButton,
  FormTitle,
  OtherAuth,
  ShowOrHidePasswordContainer,
  InputWithIconContainer,
} from './Auth.styled';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import { notifyLoginSuccess } from 'utils/toasts';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { clearError } from 'redux/auth/slice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState('password');

  const toggleIsOpenPassword = () => {
    showPassword === 'password'
      ? setShowPassword('text')
      : setShowPassword('password');
  };

  const onClose = () => {
    dispatch(clearError());
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
  return (
    <Overlay onClick={handleBackdropClick}>
      <AuthContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Поле обов'язкове
                </p>
              );
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Невірний формат email
                </p>
              );
            }
            if (!values.password) {
              errors.password = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Поле обов'язкове
                </p>
              );
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await dispatch(logIn(values));
              if (
                response.payload.token !== null &&
                response.payload.token !== undefined
              ) {
                console.log('Успішний вхід');
                onClose();
                notifyLoginSuccess();
              }
            } catch (error) {
              console.error('Помилка входу:', error);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <AuthForm>
              <CloseButton type="button" onClick={onClose}>
                &times;
              </CloseButton>
              <FormTitle>Вхід в особистий кабінет</FormTitle>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <AuthInput type="email" name="email" placeholder="Пошта" />
              <ErrorMessage name="email" component="div" />
              <InputWithIconContainer>
                <AuthInput
                  type={showPassword}
                  name="password"
                  placeholder="Пароль"
                />
                {values.password && (
                  <ShowOrHidePasswordContainer
                    onClick={toggleIsOpenPassword}
                    alt="Show or hide password"
                  >
                    {showPassword === 'password' ? (
                      <FaEyeSlash size={18} color="var(--bg-secondary)" />
                    ) : (
                      <FaEye size={18} color="var(--bg-secondary)" />
                    )}
                  </ShowOrHidePasswordContainer>
                )}
              </InputWithIconContainer>
              <ErrorMessage name="password" component="div" />
              <AuthButton type="submit" disabled={isSubmitting}>
                Увійти
              </AuthButton>
              <AuthLink to='/forgot-password'>Забули пароль?</AuthLink>
              <OtherAuth>
                <FcGoogle />
                <AuthLink onClick={clickMessage}>
                  Увійти за допомогою Google-акаунту
                </AuthLink>
              </OtherAuth>
              <AuthLink to={'/registration'}>
                Немає акаунту? Зареєструватися
              </AuthLink>
            </AuthForm>
          )}
        </Formik>
      </AuthContainer>
    </Overlay>
  );
};

export default LoginForm;
