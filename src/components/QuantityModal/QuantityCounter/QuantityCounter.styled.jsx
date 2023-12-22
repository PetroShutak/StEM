import styled from 'styled-components';

export const Counter = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-family-secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CounterButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
