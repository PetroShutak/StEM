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
import { Link, useNavigate } from 'react-router-dom';
import { notifyLogoutSuccess } from 'utils/toasts';

const UserBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser)?.name;
  const avatarURL = useSelector(selectUser)?.avatarURL;
  const verified = useSelector(selectVerification);
  const [showSelect, setShowSelect] = useState(false);
  const selectRef = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigateToLogin = () => {
    if (!isLogin) {
      navigate('/login');
    }
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

  const handleLogout = async () => {
    try {
      if (verified === null) {
        await dispatch(logOut());
      }
      notifyLogoutSuccess();
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
        {isLogin && (
          <img
            src={avatarURL}
            alt="user avatar"
            width="30"
            height="30"
            style={{ borderRadius: '50%' }}
          />
        )}
        {!isLogin && (
          <PiUserCircleDuotone
            size={32}
            // color="gray"
            onClick={navigateToLogin}
          />
        )}
        {isLogin && (
          <UserMenuWrapper>
            <p>{userName}</p>
            <RiArrowDropDownLine size={32} color="gray" />
          </UserMenuWrapper>
        )}
        {isLogin && showSelect && (
          <SelectWrapper ref={selectRef}>
            <div>
              <span>
                <Link to="/profile">
                <IoSettingsOutline size={20} color="gray" />
                  Налаштування</Link>
              </span>
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
