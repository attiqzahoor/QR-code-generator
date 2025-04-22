import React, { useState } from 'react';
import QRCodeDisplay from './QRCodeDisplay';
import DesignSelector from './DesignSelector';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {
  const [url, setUrl] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('default');
  const [logoSize, setLogoSize] = useState(40);
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(16);
  const [scanText, setScanText] = useState('Scan me');
  const [useCustomColors, setUseCustomColors] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDownload = () => {
    const qrCodeElement = document.querySelector('#qrcode');
    if (qrCodeElement) {
      const doc = new jsPDF();
      html2canvas(qrCodeElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 150, 150);
        doc.save('qrcode.pdf');
      });
    }
  };

  return (
    <div style={{
      fontFamily: '"Inter", sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <header style={{
        background: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>QR Code Generator</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Create beautiful QR codes in seconds</p>
      </header>

      <main style={{
        flex: 1,
        padding: '2rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Change to top-align on small screens
        flexDirection: 'row', // Horizontal layout by default
        gap: '2rem',
        overflow: 'hidden', // Prevent scrolling on large screens
        flexWrap: 'wrap', // Allow wrapping on small screens
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          height: 'fit-content',
          maxWidth: '450px',
          width: '100%',
          flex: 1, // Allow it to take up available space
          marginBottom: '1.5rem', // Spacing for small screens
        }}>
          {/* URL Input */}
          <div style={{
            marginBottom: '1.5rem',
            width: '100%',
          }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#212529',
            }}>Website URL</label>
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: '0.3s ease',
              }}
            />
          </div>

          {/* QR Code Display */}
          <div id="qrcode" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem', // Space between QR and Scan Text
          }}>
            <QRCodeDisplay 
              url={url} 
              design={selectedDesign} 
              logoSize={logoSize}
              qrColor={useCustomColors ? qrColor : '#000000'}
              bgColor={useCustomColors ? bgColor : '#ffffff'}
            />
            {url && (
              <p style={{
                color: textColor,
                fontSize: `${textSize}px`,
                fontWeight: '600',
                textAlign: 'center',
              }}>
                {scanText}
              </p>
            )}
          </div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          maxWidth: '450px',
          width: '100%',
          flex: 1, // Allow this div to take up space too
          marginBottom: '1.5rem', // Add margin at the bottom for small screens
        }}>
          <DesignSelector 
            onSelectDesign={setSelectedDesign}
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

          {url && (
            <button 
              onClick={handleDownload} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: '#4361ee',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
                marginTop: '1.5rem',
              }}
            >
              <i className="icon-download" style={{
                display: 'inline-block',
                width: '1em',
                height: '1em',
                backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\'/%3E%3C/svg%3E')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}></i> Download QR Code
            </button>
          )}
        </div>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        backgroundColor: '#212529',
        color: '#fff',
        marginTop: 'auto',
      }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          © {new Date().getFullYear()} QR Code Generator. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
