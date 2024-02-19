import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px var(--bg-secondary, rgba(0, 0, 0, 0.2));
  }
  100% {
    box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
  }
`;

export const StyledCallButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  box-shadow: 0 0 0 0px var(--bg-secondary, rgba(0, 0, 0, 0.2));
  animation: ${pulse} 1s infinite;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  svg {
    width: 28px;
    height: 28px;
    fill: white;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;