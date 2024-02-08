import React from 'react';
import WaitCreate from './WaitCreate';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateAvatar } from 'redux/auth/operations';
// import AvatarUpload from 'components/Header/NavHeader/UserBar/AvatarUpload';
// import { selectError, selectUser } from 'redux/auth/selectors';

const ProfilePage = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const avatarURL = useSelector(selectUser)?.avatarURL;

  // const handleAvatarUpload = file => {
  //   const formData = new FormData();
  //   formData.append('avatar', file);
  //   try {
  //     console.log('Avatar uploading');
  //     dispatch(updateAvatar(formData));
  //     console.log('Avatar uploaded');
  //   } catch (error) {
  //     console.log('Avatar upload error:', error);
  //   } finally {
  //     console.log('Avatar upload finally');
  //   }
  // };

  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-family-secondary)',
          fontSize: '24px',
          color: 'var(--text-color-primary-black)',
        }}
      >
        Ваш профіль
      </h1>
      <WaitCreate />
      {/* <h2
        style={{
          fontFamily: 'var(--font-family-secondary)',
          fontSize: '16px',
          color: 'var(--text-color-primary-black)',
        }}
      >
        Change Avatar
      </h2>
      <AvatarUpload onUpload={handleAvatarUpload} />
      {error && <p>{error}</p>}
      {avatarURL && <img src={avatarURL} alt="avatar" width='100%'  />} */}
    </div>
  );
};

export default ProfilePage;
