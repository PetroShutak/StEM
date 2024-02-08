import AvatarUpload from 'components/Header/NavHeader/UserBar/AvatarUpload';
import React from 'react';

const ProfilePage = () => {
  const handleAvatarUpload = file => {
   
    const formData = new FormData();
    formData.append('avatar', file);
    // axios.patch('/api/users/avatars', formData)
    //   .then(response => {
    //     // Обробка успішного завершення
    //   })
    //   .catch(error => {
    //     // Обробка помилки
    //   });
  };

  return (
    <div>
     
      <h2 style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: '16px',
        color: 'var(--text-color-primary-black)',
      }}>Change Avatar</h2>
      <AvatarUpload onUpload={handleAvatarUpload} />
    </div>
  );
};

export default ProfilePage;
