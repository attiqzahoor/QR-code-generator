import React, { useEffect } from 'react';

const QRIntroAnimation = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3-second animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to right, #1f1c2c, #928dab)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      animation: 'fadeIn 1s ease-in-out'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        animation: 'bounce 1.2s infinite',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
      }} />
      <h2 style={{ color: '#fff', marginTop: '20px', fontSize: '24px', animation: 'fadeIn 1s ease-in-out' }}>Loading QR Generator...</h2>
    </div>
  );
};

export default QRIntroAnimation;
