import React from 'react';
import { ReactComponent as AiIcon } from '../images/stem.svg';

const AboutPage = () => {
  return (
    <div>
      <p style={{ color: 'var(--text-color-primary-black)' }}>Про нас</p>
      <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <AiIcon
          fontSize={32}
          fill="var(--bg-secondary)"
          fontFamily="var(--font-bold)"
        />
      </div>
    </div>
  );
};

export default AboutPage;
