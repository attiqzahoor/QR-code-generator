import React, { useState } from 'react';
import QRCodeDisplay from './components/QRCodeDisplay';
import DesignSelector from './components/DesignSelector';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import QRIntroAnimation from './components/QRIntroAnimation';

const App = () => {
  const [url, setUrl] = useState('');
  const [design, setDesign] = useState('default');
  const [logoSize, setLogoSize] = useState(40);
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(16);
  const [scanText, setScanText] = useState('Scan Me');
  const [useCustomColors, setUseCustomColors] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState('none');
  const [showMain, setShowMain] = useState(false);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)',
        color: '#fff',
        minHeight: '100vh',
        paddingBottom: '40px',
        transition: 'background 0.5s ease-in-out',
        overflowX: 'hidden',
      }}
    >
      {!showMain && <QRIntroAnimation onFinish={() => setShowMain(true)} />}
      {showMain && (
        <>
          <HeroSection url={url} setUrl={setUrl} />

          <div
            style={{
              display: 'grid',
              gap: '20px',
              padding: '30px 20px',
              maxWidth: '1200px',
              width: '100%',
              margin: 'auto',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #1f1c2c, #3a1c71, #928dab)',
              transition: 'all 0.3s ease-in-out',
              boxSizing: 'border-box',
            }}
            className="qr-layout"
          >
            <QRCodeDisplay
              url={url}
              design={design}
              logoSize={logoSize}
              qrColor={qrColor}
              bgColor={bgColor}
            />
            <DesignSelector
              selectedDesign={design}
              onSelectDesign={setDesign}
              logoSize={logoSize}
              setLogoSize={setLogoSize}
              qrColor={qrColor}
              setQrColor={setQrColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
              textColor={textColor}
              setTextColor={setTextColor}
              textSize={textSize}
              setTextSize={setTextSize}
              scanText={scanText}
              setScanText={setScanText}
              useCustomColors={useCustomColors}
              setUseCustomColors={setUseCustomColors}
            />
          </div>

          <AboutSection />
          <ContactSection />

          <div
            style={{
              textAlign: 'center',
              padding: '20px',
              background: 'rgba(15, 32, 39, 0.9)',
              marginTop: '30px',
              fontSize: '14px',
              color: '#bbb',
              boxShadow: 'inset 0 1px 5px rgba(255,255,255,0.1)',
            }}
          >
            <p>&copy; 2025 All Rights Reserved</p>
          </div>

          {/* Responsive Grid Media Query */}
          <style>{`
            @media (max-width: 768px) {
              .qr-layout {
                grid-template-columns: 1fr !important;
              }
            }

            @media (min-width: 769px) {
              .qr-layout {
                grid-template-columns: 1fr 1fr;
              }
            }
          `}</style>
        </>
      )}
    </div>
  );
};

export default App;
