import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount and on resize
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMouseEnter = () => {
    if (!flipped) setFlipped(true);
  };

  const handleMouseLeave = () => {
    if (flipped) setFlipped(false);
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '50px auto',
        background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)',
        borderRadius: '15px',
        boxShadow: '0 12px 36px rgba(58, 28, 113, 0.6)',
        color: '#e0e0ff',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        padding: '40px',
        boxSizing: 'border-box',
        fontFamily: "'Arial', sans-serif",
        minHeight: '320px',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          flex: 1,
          paddingRight: isMobile ? '0' : '40px',
          marginBottom: isMobile ? '30px' : '0',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            marginBottom: '20px',
            fontWeight: '700',
            textShadow: '0 3px 8px rgba(0,0,0,0.6)',
          }}
        >
          About This Project
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#dcdcff',
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            maxWidth: '650px',
            margin: '0 auto',
          }}
        >
          This QR Code generator app, developed by Muhammad Attiq, offers a modern, customizable
          experience with support for various stylish designs, logos, frames, and an animated user
          interface. The app is built entirely with ReactJS to ensure fast performance and
          responsiveness on all devices. Users can generate QR codes tailored to their branding
          needs, enhancing both functionality and aesthetics. The app continuously evolves with
          new features for better user engagement and ease of use.
        </p>
      </div>

      {/* Right Side - QR Code with glow and flip */}
      <div
        style={{
          flex: '0 0 auto',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Circular glow background */}
        <div
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at bottom, rgba(155, 89, 182, 0.6), transparent 70%)',
            boxShadow: '0 15px 20px rgba(155, 89, 182, 0.7)',
            zIndex: 1,
          }}
        />

        {/* QR Code */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://your-url.com"
          alt="QR Code"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '15px',
            boxShadow: flipped
              ? '0 30px 45px rgba(155, 89, 182, 0.9)'
              : '0 10px 20px rgba(0,0,0,0.4)',
            transition: 'box-shadow 0.3s ease, transform 0.8s ease',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            cursor: 'pointer',
            transform: flipped ? 'rotateY(180deg) scale(1.1)' : 'rotateY(0deg) scale(1)',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default AboutSection;
