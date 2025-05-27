import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
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
        if (err) return;

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
      className="qr-container"
      style={{
        perspective: '1000px',
        maxWidth: '320px',
        margin: '40px auto',
      }}
    >
      <div
        className="qr-inner"
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)',
          boxShadow: '0 15px 40px rgba(110, 87, 224, 0.6)',
          color: '#e0e0ff',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          transition: 'transform 0.8s ease',
          transformStyle: 'preserve-3d',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Front face: QR code */}
        <div
          className="qr-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ marginBottom: '15px', fontSize: '20px', textShadow: '0 0 8px rgba(110, 87, 224, 0.8)' }}>
            Your Custom QR Code
          </h3>
          {qrCode ? (
            <img
              src={qrCode}
              alt="QR Code"
              style={{
                width: '260px',
                height: '260px',
                borderRadius: '12px',
                border: '3px solid #6e57e0',
                boxShadow: '0 0 15px 4px rgba(110, 87, 224, 0.8)',
                transition: 'all 0.3s ease-in-out',
                userSelect: 'none',
              }}
            />
          ) : (
            <p style={{ color: '#bbb' }}>Generating QR code...</p>
          )}
        </div>

        {/* Back face: flipped content */}
        <div
          className="qr-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #3a1c71, #928dab)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: '700',
            userSelect: 'none',
            backfaceVisibility: 'hidden',
            transform: 'rotateX(180deg)',
            boxShadow: '0 15px 40px rgba(146, 128, 255, 0.7)',
          }}
        >
          Scan Me!
        </div>

      </div>

      <style>{`
        .qr-container:hover .qr-inner {
          transform: rotateX(180deg);
        }
      `}</style>
    </div>
  );
};

export default QRCodeDisplay;
