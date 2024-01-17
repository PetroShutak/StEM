import styled from 'styled-components';

export const ModalQuantity = styled.div`
  font-family: var(--font-family-secondary);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 20px;
  border: 1px solid var(--bg-secondary);
  border-radius: 4px;
  transform: translate(-50%, -50%);
  color: #000000;
  z-index: 1100;
  background-color: #ffffff;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--bg-secondary);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--bg-secondary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;

export const QuantityInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const TotalPrice = styled.span`
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-weight: 700;
  color: var(--bg-secondary);
  margin-top: 10px;
  font-size: 18px;
`;

export const QuantityControl = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
`;

export const QuantityButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: var(--bg-secondary);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;
