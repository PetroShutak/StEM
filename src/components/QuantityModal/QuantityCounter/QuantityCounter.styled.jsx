import styled from 'styled-components';

export const Counter = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
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
