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
    <div className="frame-selector">
      <h3 className="section-title">Select Frame</h3>
      <div className="frame-options">
        {frames.map(frame => (
          <button
            key={frame.id}
            className={`frame-option ${selectedFrame === frame.id ? 'active' : ''}`}
            onClick={() => setSelectedFrame(frame.id)}
          >
            {frame.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;