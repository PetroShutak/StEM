import React, { useState, useEffect, useRef } from 'react';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { UserBarWrapper, SelectWrapper } from './UserBar.styled';
// import { IoSettingsOutline } from 'react-icons/io5';
// import { IoIosLogOut } from 'react-icons/io';

const UserBar = () => {
  const [showSelect, setShowSelect] = useState(false);
  const selectRef = useRef(null);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };
  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <UserBarWrapper onClick={toggleSelect}>
      <PiUserCircleDuotone size={30} />
      <p>User Name</p>
      <RiArrowDropDownLine size={32} color="gray" />
      {showSelect && (
        <SelectWrapper ref={selectRef}>
          {/* <IoSettingsOutline size={20} /> */}
          <option>Налаштування</option>
          {/* <IoIosLogOut size={20} /> */}
          <option>Вийти</option>
        </SelectWrapper>
      )}
    </UserBarWrapper>
  );
};

export default UserBar;
