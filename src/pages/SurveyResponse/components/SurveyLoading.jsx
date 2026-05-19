import React from 'react';

export default function SurveyLoading() {
  return (
    <div className="survey-loading-container">
      
      <div className="loading-icon-wrapper">
        <svg className="sparkle-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
        </svg>
      </div>

      
      <h2 className="loading-title">Carregando sua pesquisa...</h2>
      <p className="loading-subtitle">Estamos preparando tudo para você.<br />isso pode levar alguns segundos.</p>

      
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}