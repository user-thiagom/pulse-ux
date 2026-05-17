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
        <div>
            <label>
                Se {question.type} for
                <select onChange={e => onUpdate(surveyId, question.id, {
                    conditional: {
                        ...question.conditional,
                        condition: {
                            ...question.conditional.condition,
                            operator: e.target.value
                        }
                    }
                })}>
                    <option value="" disabled selected>Selecione uma condição</option>
                    <option value="==">Igual a</option>
                    <option value=">">Maior que</option>
                    <option value=">=">Maior ou igual a</option>
                    <option value="<">Menor que</option>
                    <option value="<=">Menor ou igual a</option>
                </select>
            </label>
            <input
                type="number"
                value={question.conditional.condition.value}
                min={config.condition.min}
                max={config.condition.max}
                step={config.condition.step}
                onChange={e => handleConditionalValueChange(e.target.value)}
            />
            <hr />
            <h3>Pergunta condicional</h3>
            <textarea
                value={question.conditional.question.text}
                onChange={e => onUpdate(surveyId, question.id, {
                    conditional: {
                        ...question.conditional,
                        question: {
                            ...question.conditional.question,
                            text: e.target.value
                        }
                    }
                })}
            />
        </div>
    )
}

export default QuestionConditionalSection