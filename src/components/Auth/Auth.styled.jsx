import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-backdrop);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;
export const AuthContainer = styled.div`
  //   border: 1px solid red;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  width: 400px;
`;

export const AuthInput = styled(Field)`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
`;

export const AuthButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;

export const CloseButton = styled.button`
  color: var(--text-color-primary-black);
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 36px;
  font-weight: bold;
`;

export const AuthLink = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color: var(--text-color-secondary);
  text-align: center;
  & :hover {
    text-decoration: underline;
  }
`;

export const OtherAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ShowOrHidePasswordContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: var(--text-color-primary-black);
  svg {
    cursor: pointer;
    transition: scale 250ms ease-in-out;
    &:hover {
        scale: 1.08;
  }
`;

export const InputWithIconContainer = styled.div`
  position: relative;
`;
