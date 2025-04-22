import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

// Import social media logos
import whatsappLogo from '../logos/whatapp.jpg';
import facebookLogo from '../logos/facebook.png';
import instagramLogo from '../logos/instagram.jpeg';
import telegramLogo from '../logos/telegram.jpeg';
import youtubeLogo from '../logos/youtube.png';
import twitterLogo from '../logos/twitter.png';
import linkedinLogo from '../logos/linkedin.png';
import snapchatLogo from '../logos/snapchat.jpeg';

const QRCodeDisplay = ({ url, design, logoSize, qrColor, bgColor }) => {
  const [qrCode, setQrCode] = useState('');

  const getLogo = () => {
    switch (design) {
      case 'whatsapp': return whatsappLogo;
      case 'facebook': return facebookLogo;
      case 'instagram': return instagramLogo;
      case 'telegram': return telegramLogo;
      case 'youtube': return youtubeLogo;
      case 'twitter': return twitterLogo;
      case 'linkedin': return linkedinLogo;
      case 'snapchat': return snapchatLogo;
      default: return null;
    }
  };

  useEffect(() => {
    if (url) {
      const options = {
        width: 300,
        margin: 1,
        color: {
          dark: qrColor,
          light: bgColor
        }
      };

      const logo = getLogo();

      QRCode.toDataURL(url, options, (err, qrUrl) => {
        if (err) {
          console.error(err);
          return;
        }

        if (logo) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          const qrImg = new Image();

          qrImg.onload = () => {
            canvas.width = qrImg.width;
            canvas.height = qrImg.height;
            ctx.drawImage(qrImg, 0, 0);

            img.onload = () => {
              const center = canvas.width / 2 - logoSize / 2;
              ctx.drawImage(img, center, center, logoSize, logoSize);
              setQrCode(canvas.toDataURL());
            };
            img.src = logo;
          };
          qrImg.src = qrUrl;
        } else {
          setQrCode(qrUrl);
        }
      });
    }
  }, [url, design, logoSize, qrColor, bgColor]);

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '350px',
        margin: 'auto',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#333' }}>Your Custom QR Code</h3>
      {qrCode ? (
        <img
          src={qrCode}
          alt="QR Code"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
          }}
        />
      ) : (
        <p style={{ color: '#777' }}>Generating QR code...</p>
      )}
    </div>
  );
};

export default QRCodeDisplay;
