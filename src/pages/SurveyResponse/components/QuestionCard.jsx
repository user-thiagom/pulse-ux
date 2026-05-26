import React from 'react';

export default function QuestionCard({ question, currentAnswer, onAnswerChange }) {
  if (!question) return null;

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
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

  const renderSlider = () => {
    const minLabel = question.minLabel || "Difícil";
    const maxLabel = question.maxLabel || "Muito fácil";
    const sliderValue = currentAnswer !== undefined ? currentAnswer : 50;

    return (
      <div className="slider-input-container">
        <div className="slider-wrapper">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={(e) => onAnswerChange(Number(e.target.value))}
            className="custom-slider"
          />
          <div className="slider-center-line"></div>
        </div>
        <div className="slider-labels">
          <span className="slider-label-min">{minLabel}</span>
          <span className="slider-label-max">{maxLabel}</span>
        </div>
      </div>
    );
  };

  const renderNps = () => {
    const scores = Array.from({ length: 11 }, (_, i) => i);

    return (
      <div className="nps-input-container">
        <div className="nps-grid">
          {scores.map((score) => {
            const isSelected = currentAnswer === score;
            return (
              <button
                key={score}
                type="button"
                className={`nps-btn ${isSelected ? 'active' : ''}`}
                onClick={() => onAnswerChange(score)}
              >
                {score}
              </button>
            );
          })}
        </div>
        <div className="nps-labels">
          <span>Pouco provável</span>
          <span>Muito provável</span>
        </div>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    const options = question.options || ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];

    return (
      <div className="multiple-choice-container">
        {options.map((option, index) => {
          const isSelected = currentAnswer === option;
          return (
            <button
              key={index}
              type="button"
              className={`choice-chip ${isSelected ? 'active' : ''}`}
              onClick={() => onAnswerChange(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };

  const renderTextarea = () => {
    return (
      <textarea 
        className="survey-textarea" 
        placeholder="Digite sua resposta aqui..."
        value={currentAnswer || ''}
        onChange={(e) => onAnswerChange(e.target.value)}
        maxLength={600}
      />
    );
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'rating':
        return renderStars();
      case 'slider':
        return renderSlider();
      case 'nps':
        return renderNps();
      case 'multiple_choice':
        return renderMultipleChoice();
      case 'text':
        return renderTextarea();
      default:
        return (
          <div className="unsupported-type-alert">
            Tipo de pergunta "{question.type}" ainda não é suportado pelo criador de pesquisas.
          </div>
        );
    }
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{question.text}</h2>
      <div className="question-content-renderer">
        {renderQuestionInput()}
      </div>
    </div>
  );
}