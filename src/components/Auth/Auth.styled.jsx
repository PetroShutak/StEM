import styled from 'styled-components';

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

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  width: 400px;
`;

export const AuthInput = styled.input`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
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

export const AuthLink = styled.a`
  font-size: 14px;
  cursor: pointer;
  color: var(--text-color-secondary);
  text-align: center;
`;
