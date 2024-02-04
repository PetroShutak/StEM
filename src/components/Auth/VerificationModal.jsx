import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const VerificationModal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <h2>
            Реєстрація успішна
        </h2>
        <p>
          Будь ласка, підтвердіть свою електронну адресу, перейшовши за посиланням у листі, яке ми відправили на вашу пошту.
        </p>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VerificationModal;
