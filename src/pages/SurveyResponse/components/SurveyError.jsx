import React from 'react';

//Receber a função de retry por propriedade
export default function SurveyError({ onRetry }) {
    return (
        <div className="survey-error-container">
            <div className="error-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </div>


            <h2 className="error-title">Ops! Algo deu errado</h2>
            <p className="error-subtitle">Não conseguimos carregar a pesquisa solicitada. Verifique sua conexão ou tente novamente.</p>


            <button className="btn-primary btn-retry" onClick={onRetry}>
                Tentar novamente
            </button>
        </div>
    );
}