import { ProgressBar } from 'react-loader-spinner';

const LoaderRefresh = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/dk0rzgyzj/image/upload/v1700522103/brainstorming_ce2qc2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3px)',
        zIndex: 9999,
      }}
    >
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#e24617"
        barColor="#ff6b09"
      />
      <p style={{ color: '#ff6b09', fontSize: '14px' }}>Завантажується...</p>
    </div>
  );
};

export default LoaderRefresh;
