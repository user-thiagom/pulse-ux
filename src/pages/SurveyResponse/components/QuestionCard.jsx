import React from 'react';

export default function QuestionCard({ question, currentAnswer, onAnswerChange }) {
  if (!question) return null;

  // Renderização do sistema de 5 Estrelas
  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      // Verifica se a estrela atual é menor ou igual à nota selecionada
      const isSelected = i <= (currentAnswer || 0);

      stars.push(
        <button
          key={i}
          type="button"
          className={`star-button ${isSelected ? 'selected' : ''}`}
          onClick={() => onAnswerChange(i)}
        >
          <svg
            viewBox="0 0 24 24"
            width="42"
            height="42"
            fill={isSelected ? "#ffb400" : "none"}
            stroke="#ffb400"
            strokeWidth="1.5"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      );
    }

    return <div className="stars-rating-container">{stars}</div>;
  };

  return (
    <div className="question-card">
      
      <h2 className="question-text">{question.text}</h2>

      
      {question.type === 'rating' && renderStars()}

      
      {question.type === 'text' && (
        <textarea 
          className="survey-textarea" 
          placeholder="Digite sua resposta aqui..."
          value={currentAnswer || ''}
          onChange={(e) => onAnswerChange(e.target.value)}
        />
      )}
    </div>
  );
}