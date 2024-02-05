import React from 'react';

const ErrorText = ({ message }) => {
    // Extract relevant information from the message object
    const errorMessage = message ? message.message : '';
  
    return <div style={{ color: 'red', fontSize: '14px', marginTop: '8px' }}>{errorMessage}</div>;
  };

export default ErrorText;