import React from 'react';

export default function SurveySuccess() {
  return (
    <div className="survey-container state-completed">
      <div className="loading-icon-wrapper" style={{ backgroundColor: '#ebfbee', color: '#2b8a3e', boxShadow: '0 8px 20px rgba(43, 138, 62, 0.1)' }}>
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <h2 className="loading-title">Pesquisa Concluída!</h2>
      <p className="loading-subtitle">Sua resposta foi registrada com sucesso.<br />Obrigado por nos ajudar a melhorar nosso serviço.</p>
    </div>
  );
}