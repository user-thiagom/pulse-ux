import React from 'react';

export default function RatingInput({ value, onChange }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating-input-container">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className={`star-btn ${value >= star ? 'active' : ''}`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}