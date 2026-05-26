import React from 'react';

export default function TextInput({ value, onChange }) {
  return (
    <div className="text-input-container">
      <textarea
        className="custom-textarea"
        placeholder="Digite sua resposta aqui..."
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        maxLength={500}
      />
    </div>
  );
}