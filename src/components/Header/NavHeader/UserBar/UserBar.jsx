import React, { useState, useEffect, useRef } from 'react';
import { PiUserCircleDuotone } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  UserBarWrapper,
  SelectWrapper,
  UserMenuWrapper,
} from './UserBar.styled';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import LoginForm from 'components/Auth/LoginForm';

const UserBar = () => {
  const [isShowAuthModal, setIsShowAuthModal] = useState(false);
  const isLogin = false; // Змінити коли буде реалізована авторизація
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

  const toggleModal = () => setIsShowAuthModal(prev => !prev);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <UserBarWrapper onClick={toggleSelect}>
        <PiUserCircleDuotone
          size={30}
          style={{ padding: '0' }}
          onClick={toggleModal}
        />
        {isLogin && (
          <UserMenuWrapper>
            <p>User Name</p>
            <RiArrowDropDownLine size={32} color="gray" />
          </UserMenuWrapper>
        )}
        {isLogin && showSelect && (
          <SelectWrapper ref={selectRef}>
            <div>
              <IoSettingsOutline size={20} color="gray" />
              <span>Налаштування</span>
            </div>
            <div>
              <IoIosLogOut size={20} color="gray" />
              <span>Вийти</span>
            </div>
          </SelectWrapper>
        )}
      </UserBarWrapper>
      {isShowAuthModal && !isLogin && <LoginForm onClose={toggleModal} />}
    </>
  );
};

export default UserBar;
