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
import { signUp } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import {
  notifyConfirmRegistration,
  notifyRegistrationSuccess,
} from 'utils/toasts';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { clearError } from 'redux/auth/slice';

const RegistrationForm = () => {
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
          initialValues={{ name: '', email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  поле обов'язкове
                </p>
              );
            }
            if (!values.email) {
              errors.email = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  поле обов'язкове
                </p>
              );
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
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
                  поле обов'язкове
                </p>
              );
            } else if (values.password.length < 8) {
              errors.password = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  пароль має бути не менше 8 символів
                </p>
              );
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await dispatch(signUp(values));
              if (!response.error) {
                onClose();
                notifyRegistrationSuccess();
                setTimeout(() => {
                  notifyConfirmRegistration();
                }, 2000);
              } else {
                console.log(response.error.message);
              }
            } catch (error) {
              console.log(error.message);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <AuthForm>
              <CloseButton type="button" onClick={onClose}>
                &times;
              </CloseButton>
              <FormTitle>Реєстрація</FormTitle>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <AuthInput type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
              <AuthInput type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <InputWithIconContainer>
                <AuthInput
                  type={showPassword}
                  name="password"
                  placeholder="Password"
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
                Зареєструватися
              </AuthButton>
              <AuthLink to="/login">Вже зареєстровані? Увійти</AuthLink>
              <OtherAuth>
                <FcGoogle />
                <AuthLink onClick={clickMessage}>
                  Увійти за допомогою Google-акаунту
                </AuthLink>
              </OtherAuth>
            </AuthForm>
          )}
        </Formik>
      </AuthContainer>
    </Overlay>
  );
};

export default RegistrationForm;
