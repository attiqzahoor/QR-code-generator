import React from 'react';

const FrameSelector = ({ selectedFrame, setSelectedFrame }) => {
  const frames = [
    { id: 'none', name: 'No Frame' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'shop', name: 'Retail Shop' },
    { id: 'cup', name: 'Coffee Cup' },
    { id: 'business', name: 'Business Card' },
    { id: 'company', name: 'Corporate' }
  ];

  return (
    <div style={{
      padding: '20px',
      background: 'linear-gradient(to right, #232526, #414345)',
      color: '#fff',
      borderRadius: '12px',
      margin: '20px 0',
      transition: '0.3s ease-in-out'
    }}>
      <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Select Frame</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '10px'
      }}>
        {frames.map(frame => (
          <button
            key={frame.id}
            onClick={() => setSelectedFrame(frame.id)}
            style={{
              padding: '10px',
              backgroundColor: selectedFrame === frame.id ? '#4ca1af' : '#ccc',
              color: selectedFrame === frame.id ? '#fff' : '#000',
              border: 'none',
              borderRadius: '6px',
              transition: '0.3s ease-in-out',
              cursor: 'pointer'
            }}
          >
            {frame.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;
