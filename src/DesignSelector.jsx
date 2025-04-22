import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faTelegram,
    faYoutube,
    faTwitter,
    faLinkedin,
    faSnapchat
} from '@fortawesome/free-brands-svg-icons';

import {
    faQrcode,
    faPalette,
    faTextHeight,
    faImage
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  instagram: faInstagram,
  telegram: faTelegram,
  youtube: faYoutube,
  twitter: faTwitter,
  linkedin: faLinkedin,
  snapchat: faSnapchat,
};

const DesignSelector = ({ 
  selectedDesign,
  onSelectDesign,
  logoSize,
  setLogoSize,
  qrColor,
  setQrColor,
  bgColor,
  setBgColor,
  textColor,
  setTextColor,
  textSize,
  setTextSize,
  scanText,
  setScanText,
  useCustomColors,
  setUseCustomColors
}) => {
  const socialMediaDesigns = Object.keys(iconMap).map(id => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1)
  }));

  const styles = {
    container: {
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      width: '400px',  // Fixed width
      height: '40%%', // Fixed height
      overflowY: 'auto', // Scroll only inside this container
    },
    sectionTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    designOptions: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px'
    },
    designButton: (active) => ({
      padding: '10px 14px',
      border: `1px solid ${active ? '#007bff' : '#ccc'}`,
      borderRadius: '8px',
      backgroundColor: active ? '#007bff' : '#fff',
      color: active ? '#fff' : '#000',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.2s ease-in-out'
    }),
    toggleGroup: {
      marginBottom: '20px'
    },
    toggleLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    picker: {
      marginBottom: '10px'
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: 'bold'
    },
    rangeInput: {
      width: '100%'
    },
    textInput: {
      width: '100%',
      padding: '6px 10px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.sectionTitle}>
        <FontAwesomeIcon icon={faImage} /> Logo Designs
      </h3>

      <div style={styles.designOptions}>
        <button
          style={styles.designButton(selectedDesign === 'default')}
          onClick={() => onSelectDesign('default')}
        >
          <FontAwesomeIcon icon={faQrcode} /> Default
        </button>
        {socialMediaDesigns.map(design => (
          <button
            key={design.id}
            style={styles.designButton(selectedDesign === design.id)}
            onClick={() => onSelectDesign(design.id)}
          >
            <FontAwesomeIcon icon={iconMap[design.id]} /> {design.name}
          </button>
        ))}
      </div>

      <div style={styles.toggleGroup}>
        <label style={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={useCustomColors}
            onChange={() => setUseCustomColors(!useCustomColors)}
          />
          <span><FontAwesomeIcon icon={faPalette} /> Custom Colors</span>
        </label>

        {useCustomColors && (
          <>
            <div style={styles.picker}>
              <label style={styles.label}>QR Color:</label>
              <input type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} />
            </div>
            <div style={styles.picker}>
              <label style={styles.label}>Background:</label>
              <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </div>
          </>
        )}
      </div>

      <div style={styles.picker}>
        <label style={styles.label}>Logo Size: {logoSize}px</label>
        <input
          style={styles.rangeInput}
          type="range"
          min="20"
          max="80"
          value={logoSize}
          onChange={(e) => setLogoSize(e.target.value)}
        />
      </div>

      <div style={styles.picker}>
        <label style={styles.label}>Scan Text:</label>
        <input
          style={styles.textInput}
          type="text"
          value={scanText}
          onChange={(e) => setScanText(e.target.value)}
          placeholder="Scan me"
        />
      </div>

      <div style={styles.picker}>
        <label style={styles.label}>Text Color:</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>

      <div style={styles.picker}>
        <label style={styles.label}>
          <FontAwesomeIcon icon={faTextHeight} /> Text Size: {textSize}px
        </label>
        <input
          style={styles.rangeInput}
          type="range"
          min="12"
          max="24"
          value={textSize}
          onChange={(e) => setTextSize(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DesignSelector;
