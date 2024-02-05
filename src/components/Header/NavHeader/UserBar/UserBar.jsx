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
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectVerification,
} from 'redux/auth/selectors';
import { getProfile, logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const UserBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser).name;
  const verified = useSelector(selectVerification);
  const [showSelect, setShowSelect] = useState(false);
  const selectRef = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLogin) {
        try {
          const result = await dispatch(getProfile());
          // Вивести дані профілю у консоль
          console.log('Profile data after login:', result.payload);
        } catch (error) {
          console.error('Error during fetching profile:', error);
        }
      }
    };

    fetchData();
  }, [dispatch, isLogin]);

  const handleLogout = () => {
    try {
      if (verified === null) {
        dispatch(logOut());
      } else {
        alert('Ви не підтвердили свою пошту');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <UserBarWrapper onClick={toggleSelect}>
        <PiUserCircleDuotone
          size={30}
          style={{ padding: '0' }}
          onClick={navigateToLogin}
        />
        {isLogin && (
          <UserMenuWrapper>
            <p>{userName}</p>
            <RiArrowDropDownLine size={32} color="gray" />
          </UserMenuWrapper>
        )}
        {isLogin && showSelect && (
          <SelectWrapper ref={selectRef}>
            <div>
              <IoSettingsOutline size={20} color="gray" />
              <span>Налаштування</span>
            </div>
            <div onClick={handleLogout}>
              <IoIosLogOut size={20} color="gray" />
              <span>Вийти</span>
            </div>
          </SelectWrapper>
        )}
      </UserBarWrapper>
    </>
  );
};

export default UserBar;
