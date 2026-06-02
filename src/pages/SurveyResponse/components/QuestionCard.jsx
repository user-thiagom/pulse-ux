import React from 'react';
import { playClickSound, playSelectSound, playSliderSound, playSuccessSound } from '../../../utils/sounds';

export default function QuestionCard({ question, currentAnswer, onAnswerChange, conditionalAnswer, onConditionalAnswerChange, isConditionalActive }) {
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
          onClick={() => {
            onAnswerChange(i)
            playSuccessSound()
          }}
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
    const minLabel = question.options[0] || "Difícil";
    const maxLabel = question.options[1] || "Muito fácil";
    const sliderValue = currentAnswer !== undefined ? currentAnswer : 50;

    return (
      <div className="slider-input-container">
        <div className="slider-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => {
              onAnswerChange(Number(e.target.value))
              playSliderSound()
            }}
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
                onClick={() => {
                  onAnswerChange(score)
                  playSelectSound()
                }}
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

    const toggleOption = (option) => {
      const prev = Array.isArray(currentAnswer) ? currentAnswer : (currentAnswer !== undefined && currentAnswer !== null ? [currentAnswer] : []);
      let next;

      if (prev.includes(option)) {
        next = prev.filter((a) => a !== option);
      } else {
        next = [...prev, option];
      }

      onAnswerChange(next);
    };

    return (
      <div className="multiple-choice-container">
        {options.map((option, index) => {
          const isSelected = Array.isArray(currentAnswer) ? currentAnswer.includes(option) : currentAnswer === option;
          return (
            <button
              key={index}
              type="button"
              className={`choice-chip ${isSelected ? 'active' : ''}`}
              onClick={() => {
                toggleOption(option)
                playSelectSound()
              }}
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
      case 'csat':
        return renderStars();
      case 'slider':
        return renderSlider();
      case 'nps':
        return renderNps();
      case 'badge':
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

  const shouldShowConditional = question.conditional.enabled &&
    currentAnswer !== undefined &&
    currentAnswer !== null &&
    isConditionalActive(currentAnswer, question)

  return (
    <div className="question-card-respond">
      <h2 className="question-text">{question.text}</h2>

      <div className="question-content-renderer">
        {renderQuestionInput()}
      </div>

      {shouldShowConditional && (
        <div className="conditional-input-wrapper" style={{ marginTop: '30px', width: '100%' }}>
          <hr style={{ border: '0', height: '1px', background: '#e2e8f0', margin: '25px 0' }} />
          <h2 className="question-conditional-text">{question.conditional.question.text}</h2>
          <textarea
            className="survey-textarea"
            placeholder="Digite aqui sua opinião..."
            value={conditionalAnswer || ''}
            onChange={(e) => onConditionalAnswerChange(e.target.value)}
            maxLength={600}
          />
        </div>
      )}
    </div>
  );
}