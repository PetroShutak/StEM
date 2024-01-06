import React from 'react';
import { useEffect } from 'react';
import { startTextEffect } from 'utils/textEffectUtils';

const WaitCreate = () => {
  useEffect(() => {
    return startTextEffect();
  }, []);
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          fontWeight: 700,
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
        }}
      >
        Creating
        <span className="continue">.</span>
        <span className="continue">.</span>
        <span className="continue">.</span>
      </div>
    </div>
  );
};

export default WaitCreate;
