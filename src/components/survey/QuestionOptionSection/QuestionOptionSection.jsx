import React from 'react'
import './QuestionOptionSection.css'
import generateId from '../../../utils/generateId'

const QuestionOptionSection = ({
    question,
    onUpdate,
    surveyId
}) => {

    function handleAddOption() {

        const newOption = {
            id: generateId(),
            label: ""
        }

        onUpdate(surveyId, question.id, {
            options: [
                ...question.options,
                newOption
            ]
        })
    }

    function handleRemoveOption(optionId) {

        const updatedOptions =
            question.options.filter(
                option => option.id !== optionId
            )

        onUpdate(surveyId, question.id, {
            options: updatedOptions
        })
    }

    return (

        <div className="option-section">

            <h3>
                Opções
            </h3>

            <div className="option-list">

                {
                    question.options.map(option => (

                        <div
                            className="option-item"
                            key={option.id}
                        >

                            <input
                                className="option-input"

                                value={option.label}

                                placeholder="Nome da tag"

                                onChange={(e) => {

                                    const updatedOptions =
                                        question.options.map(o => {

                                            if (o.id !== option.id) {
                                                return o;
                                            }

                                            return {
                                                ...o,
                                                label: e.target.value
                                            };
                                        });

                                    onUpdate(surveyId, question.id, {
                                        options: updatedOptions
                                    });
                                }}
                            />

                            <button
                                className="remove-option-button"

                                onClick={() =>
                                    handleRemoveOption(option.id)
                                }
                            >
                                ✕
                            </button>

                        </div>
                    ))
                }

            </div>

            <button
                className="add-option-button"
                onClick={handleAddOption}
            >
                + Adicionar tag
            </button>

        </div>
    )
}

export default QuestionOptionSection