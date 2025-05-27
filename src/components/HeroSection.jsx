import React from 'react';

const HeroSection = ({ url, setUrl }) => (
  <div
    style={{
      textAlign: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)', // same gradient as About & Contact
      color: '#e0e0ff', // lighter purplish-white text
      transition: 'all 0.3s ease-in-out',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Arial', sans-serif",
      boxShadow: '0 8px 24px rgba(58, 28, 113, 0.5)', // subtle shadow for depth
      borderRadius: '15px',
      width:'100%',
      margin: '50px auto',
    }}
  >
    <h1
      style={{
        fontSize: '42px',
        marginBottom: '20px',
        fontWeight: '700',
        textShadow: '0 3px 8px rgba(0,0,0,0.6)',
        animation: 'fadeInDown 1s ease-in-out',
      }}
    >
      QR Code Generator
    </h1>
    <p
      style={{
        fontSize: '18px',
        maxWidth: '600px',
        margin: '0 0 30px 0',
        color: '#dcdcff',
        textShadow: '0 1px 4px rgba(0,0,0,0.4)',
        animation: 'fadeInUp 1.2s ease-in-out',
      }}
    >
      Paste your link below and get a stylish, customized QR Code instantly.
    </p>
    <input
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="Enter your link here..."
      style={{
        width: '100%',
        maxWidth: '420px',
        padding: '14px 18px',
        fontSize: '18px',
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        boxShadow: '0 0 12px #928dab',
        transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease',
        backgroundColor: '#2e2a4d', // darker purplish background for input
        color: '#e0e0ff',
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: "'Arial', sans-serif",
        letterSpacing: '0.03em',
      }}
      onFocus={(e) => (e.target.style.boxShadow = '0 0 18px #6e57e0')}
      onBlur={(e) => (e.target.style.boxShadow = '0 0 12px #928dab')}
    />
  </div>
);

export default HeroSection;
