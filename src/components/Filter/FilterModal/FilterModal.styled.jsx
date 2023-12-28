import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: var(--text-color-primary-white);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  color: var(--text-color-primary-black);
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
`;
