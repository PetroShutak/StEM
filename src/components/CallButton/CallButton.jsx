import React from 'react';
import { ImPhone } from "react-icons/im"
import { Button, StyledCallButton } from './CallButton.styled';


const CallButton = () => {
  return (
    <StyledCallButton>
       <Button href="tel:+380993617383">
        <ImPhone />
       </Button>
    </StyledCallButton>
  );
};

export default CallButton;
