import React from 'react';

export default function NpsInput({ value, onChange }) {
  const scores = Array.from({ length: 11 }, (_, i) => i); // 0 a 10
  return (
    <div className="nps-input-container">
      <div className="nps-grid">
        {scores.map((score) => (
          <button
            key={score}
            type="button"
            className={`nps-btn ${value === score ? 'active' : ''}`}
            onClick={() => onChange(score)}
          >
            {score}
          </button>
        ))}
      </div>
      <div className="nps-labels">
        <span>Pouco provável</span>
        <span>Muito provável</span>
      </div>
    </div>
  );
}