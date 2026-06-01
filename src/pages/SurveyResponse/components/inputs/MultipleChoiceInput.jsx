import React from 'react';

export default function MultipleChoiceInput({ question, value, onChange }) {
  
  const options = question.options || ["Opção A", "Opção B", "Opção C", "Opção D"];

  return (
    <div className="multiple-choice-container">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`choice-chip ${value === option ? 'active' : ''}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}