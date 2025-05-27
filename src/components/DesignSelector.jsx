import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faWhatsapp, faTelegram, faYoutube,
  faTwitter, faLinkedin, faSnapchat
} from '@fortawesome/free-brands-svg-icons';
import { faQrcode, faPalette, faTextHeight, faImage } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  instagram: faInstagram,
  telegram: faTelegram,
  youtube: faYoutube,
  twitter: faTwitter,
  linkedin: faLinkedin,
  snapchat: faSnapchat
};

const DesignSelector = ({
  selectedDesign, onSelectDesign,
  logoSize, setLogoSize,
  qrColor, setQrColor,
  bgColor, setBgColor,
  textColor, setTextColor,
  textSize, setTextSize,
  scanText, setScanText,
  useCustomColors, setUseCustomColors
}) => {
  const socialMediaDesigns = Object.keys(iconMap).map(id => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1)
  }));

  // Button base style
  const buttonBase = {
    padding: '12px 15px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    perspective: '600px',
    backgroundColor: '#3a1c71',
    color: '#e0e0ff',
    fontWeight: '600',
    fontSize: '16px',
    boxShadow: '0 5px 12px rgba(58, 28, 113, 0.6)',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    userSelect: 'none',
    position: 'relative',
    transformStyle: 'preserve-3d',
  };

  // Inner front & back faces for flip effect
  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  };

  return (
    <div
      style={{
        padding: '30px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)',
        color: '#e0e0ff',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
        maxWidth: '900px',
        margin: '30px auto',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 10px 30px rgba(58, 28, 113, 0.6)',
      }}
    >
      <h3 style={{ fontSize: '24px', marginBottom: '25px', fontWeight: '700', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
        <FontAwesomeIcon icon={faImage} /> Logo Designs
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '15px',
          marginBottom: '30px',
        }}
      >
        {/* Default button with flip */}
        <button
          onClick={() => onSelectDesign('default')}
          style={{
            ...buttonBase,
            backgroundColor: selectedDesign === 'default' ? '#6e57e0' : '#3a1c71',
            color: selectedDesign === 'default' ? '#fff' : '#dcdcff',
            perspective: '600px',
          }}
          className="flip-button"
        >
          <div
            style={{
              ...faceStyle,
              transform: 'rotateY(0deg)',
              zIndex: 2,
            }}
            className="front-face"
          >
            <FontAwesomeIcon icon={faQrcode} /> Default
          </div>
          <div
            style={{
              ...faceStyle,
              backgroundColor: '#6e57e0',
              color: '#fff',
              transform: 'rotateY(180deg)',
              zIndex: 1,
              fontWeight: '700',
              fontSize: '18px',
            }}
            className="back-face"
          >
            Select
          </div>
        </button>

        {/* Social media buttons with flip */}
        {socialMediaDesigns.map(design => (
          <button
            key={design.id}
            onClick={() => onSelectDesign(design.id)}
            style={{
              ...buttonBase,
              backgroundColor: selectedDesign === design.id ? '#6e57e0' : '#3a1c71',
              color: selectedDesign === design.id ? '#fff' : '#dcdcff',
              perspective: '600px',
            }}
            className="flip-button"
          >
            <div
              style={{
                ...faceStyle,
                transform: 'rotateY(0deg)',
                zIndex: 2,
              }}
              className="front-face"
            >
              <FontAwesomeIcon icon={iconMap[design.id]} /> {design.name}
            </div>
            <div
              style={{
                ...faceStyle,
                backgroundColor: '#6e57e0',
                color: '#fff',
                transform: 'rotateY(180deg)',
                zIndex: 1,
                fontWeight: '700',
                fontSize: '18px',
              }}
              className="back-face"
            >
              Select
            </div>
          </button>
        ))}
      </div>

      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          fontWeight: '600',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <input
          type="checkbox"
          checked={useCustomColors}
          onChange={() => setUseCustomColors(!useCustomColors)}
          style={{
            width: '18px',
            height: '18px',
            cursor: 'pointer',
          }}
        />
        <FontAwesomeIcon icon={faPalette} /> Use Custom Colors
      </label>

      {useCustomColors && (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '25px',
          }}
        >
          <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>QR Color:</label>
            <input
              type="color"
              value={qrColor}
              onChange={e => setQrColor(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          </div>
          <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Background:</label>
            <input
              type="color"
              value={bgColor}
              onChange={e => setBgColor(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: '600' }}>Logo Size: {logoSize}px</label>
        <input
          type="range"
          min="20"
          max="80"
          value={logoSize}
          onChange={e => setLogoSize(e.target.value)}
          style={{ width: '100%', cursor: 'pointer' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: '600' }}>Scan Text:</label>
        <input
          type="text"
          value={scanText}
          onChange={e => setScanText(e.target.value)}
          placeholder="Scan me"
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            boxShadow: '0 0 10px rgba(145, 100, 255, 0.7)',
            backgroundColor: '#2e2a4d',
            color: '#e0e0ff',
            outline: 'none',
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FontAwesomeIcon icon={faTextHeight} /> Text Size: {textSize}px
        </label>
        <input
          type="range"
          min="12"
          max="24"
          value={textSize}
          onChange={e => setTextSize(e.target.value)}
          style={{ width: '100%', cursor: 'pointer' }}
        />
      </div>

      {/* Styles for flip animation */}
      <style>{`
        .flip-button:hover {
          transform: rotateY(180deg);
          box-shadow: 0 15px 25px rgba(110, 87, 224, 0.8);
          color: #fff !important;
          background-color: #6e57e0 !important;
        }
        .flip-button {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default DesignSelector;
