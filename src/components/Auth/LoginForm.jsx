import React from 'react';
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
} from './Auth.styled';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError);

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
            } else if (values.password.length < 8) {
              errors.password = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Пароль повинен містити не менше 8 символів
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
              }
              //  else {
              //   console.log('Помилка входу');
              //  }
            } catch (error) {
              console.error('Помилка входу:', error);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <AuthForm>
              <CloseButton type="button" onClick={onClose}>
                &times;
              </CloseButton>
              <FormTitle>Вхід в особистий кабінет</FormTitle>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <AuthInput type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <AuthInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
              <AuthButton type="submit" disabled={isSubmitting}>
                Увійти
              </AuthButton>
              <AuthLink onClick={forgotPassword}>Забули пароль?</AuthLink>
              <OtherAuth>
                <FcGoogle />
                <AuthLink onClick={clickMessage}>
                  Увійти за допомогою Google-акаунту
                </AuthLink>
              </OtherAuth>
              <AuthLink onClick={clickMessage}>
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
