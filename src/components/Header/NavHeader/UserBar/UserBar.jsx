import React, { useState } from 'react';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { UserBarWrapper, SelectWrapper } from './UserBar.styled';

const UserBar = () => {
  const [showSelect, setShowSelect] = useState(false);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };
  return (
    <UserBarWrapper onClick={toggleSelect}>
      <PiUserCircleDuotone size={30} />
      <p>User Name</p>
      <RiArrowDropDownLine size={32} color="gray" />
      {showSelect && (
        <SelectWrapper onClick={toggleSelect}>
          <option>Settings</option>
          <option>Log Out</option>
        </SelectWrapper>
      )}
    </UserBarWrapper>
  );
};

export default UserBar;
