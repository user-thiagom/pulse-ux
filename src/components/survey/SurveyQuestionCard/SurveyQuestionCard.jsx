import React from 'react'
import './SurveyQuestionCard.css'
import QuestionConditionalSection from '../QuestionConditionalSection/QuestionConditionalSection'

const SurveyQuestionCard = ({ question, index, onUpdate, onDelete, onOpenTypeModal, surveyId }) => {
    return (
        <div className='question-card'>

            <div className="question-card-number">
                {index + 1}
            </div>

            <div className="question-card-body">
                <h2>
                    Pergunta {index + 1}
                </h2>

                <textarea
                    placeholder='Digite sua pergunta...'
                    value={question.text}
                    onChange={e => onUpdate(surveyId, question.id, { text: e.target.value })}
                ></textarea>

                <div className="question-card-select">
                    <button onClick={() => onOpenTypeModal(question.id)}>
                        Selecione o tipo
                    </button>
                    <span>
                        Tipo: {question.type}
                    </span>
                </div>

                <div className="question-card-conditional">
                    <span>
                        Pergunta condicional
                    </span>
                    <input
                        type="checkbox"
                        checked={question.conditional.enabled}
                        onChange={e => onUpdate(surveyId, question.id, {
                            conditional: { ...question.conditional, enabled: e.target.checked }
                        })}
                    />
                    {
                        question.conditional.enabled && (
                            <QuestionConditionalSection
                                question={question}
                                onUpdate={onUpdate}
                                surveyId={surveyId}
                            />
                        )
                    }
                </div>
            </div>

            <button onClick={() => onDelete(surveyId, question.id)}>
                🗑
            </button>

        </div>
    )
}

export default SurveyQuestionCard