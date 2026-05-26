import React from 'react';

export default function SliderInput({ value, onChange, minLabel = "Difícil", maxLabel = "Muito fácil" }) {

  const currentValue = value !== undefined ? value : 50;

  return (
    <div className="slider-input-container">
      <div className="slider-wrapper">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={currentValue}
          onChange={(e) => onChange(Number(e.target.value))}
          className="custom-slider"
        />
        {/* Linha vertical centralizadora do mockup */}
        <div className="slider-center-line"></div>
      </div>
      <div className="slider-labels">
        <span className="slider-label-min">{minLabel}</span>
        <span className="slider-label-max">{maxLabel}</span>
      </div>
    </div>
  );
}