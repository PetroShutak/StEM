import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  Overlay,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthButton,
  CloseButton,
  FormTitle,
} from './Auth.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearError } from 'redux/auth/slice';
import { forgotPassword } from 'redux/auth/operations';
import { notifyGetNewPassword, notifyGetNewPasswordError } from 'utils/toasts';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => {
    dispatch(clearError());
    navigate(-1);
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
          initialValues={{
            email: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  для відновлення паролю введіть пошту
                </p>
              );
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = (
                <p style={{ color: 'red', fontSize: '12px' }}>
                  Невірний формат
                </p>
              );
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await dispatch(forgotPassword(values));
              if (res.payload === 'User not found (email not registered)') {
                notifyGetNewPasswordError();
              } else {
                onClose();
                notifyGetNewPassword();
              }
            } catch (error) {
              console.error('Error:', error);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <AuthForm>
              <CloseButton onClick={onClose}>&times;</CloseButton>
              <FormTitle>Оновлення паролю</FormTitle>
              <ErrorMessage name="email" component="div" />
              <AuthInput type="email" name="email" placeholder="Email" />
              <AuthButton type="submit" disabled={isSubmitting}>
                Отримати новий пароль
              </AuthButton>
            </AuthForm>
          )}
        </Formik>
      </AuthContainer>
    </Overlay>
  );
};

export default ForgotPassword;
