import React from 'react';

export default function SurveyHeader({ title, onBack, onToggleTheme }) {
  return (
    <header className="survey-header-container">
      
      <button className="survey-header-btn" onClick={onBack} aria-label="Voltar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      
      <h1 className="survey-header-title">{title || "Pesquisa"}</h1>

      
      <button className="survey-header-btn" onClick={onToggleTheme} aria-label="Alternar tema">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </header>
  );
}