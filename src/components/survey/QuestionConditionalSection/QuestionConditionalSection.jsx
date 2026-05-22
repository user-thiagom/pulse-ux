import React from 'react'
import './QuestionConditionalSection.css'
import { QUESTION_TYPE_CONFIG } from '../../../utils/questionTypeConfig'

const QuestionConditionalSection = ({ question, onUpdate, onOpenTypeModel, surveyId }) => {
    const config = QUESTION_TYPE_CONFIG[question.type]

    function handleConditionalValueChange(value) {
        const numericValue = Number(value)
        if (numericValue < config.condition.min || numericValue > config.condition.max) return
        onUpdate(surveyId, question.id, {
            conditional: {
                ...question.conditional,
                condition: {
                    ...question.conditional.condition,
                    value: numericValue
                }
            }
        })
    }

return (

    <div className="conditional-section">

        <div className="conditional-controls">

            <span>
                Se {question.type} for
            </span>

            <select
                onChange={e =>
                    onUpdate(surveyId, question.id, {
                        conditional: {
                            ...question.conditional,
                            condition: {
                                ...question.conditional.condition,
                                operator: e.target.value
                            }
                        }
                    })
                }
            >
                <option value="">Condição</option>

                <option value="==">
                    Igual a
                </option>

                <option value=">">
                    Maior que
                </option>

                <option value=">=">
                    Maior ou igual
                </option>

                <option value="<">
                    Menor que
                </option>

                <option value="<=">
                    Menor ou igual
                </option>

            </select>

            <input
                type="number"
                value={question.conditional.condition.value}
                min={config.condition.min}
                max={config.condition.max}
                step={config.condition.step}
                onChange={e =>
                    handleConditionalValueChange(e.target.value)
                }
            />

        </div>

        <div className="conditional-question">

            <h3>
                Pergunta condicional
            </h3>

            <textarea
                placeholder="Digite a pergunta condicional..."
                value={question.conditional.question.text}
                onChange={e =>
                    onUpdate(surveyId, question.id, {
                        conditional: {
                            ...question.conditional,
                            question: {
                                ...question.conditional.question,
                                text: e.target.value
                            }
                        }
                    })
                }
            />

        </div>

    </div>

)
}

export default QuestionConditionalSection