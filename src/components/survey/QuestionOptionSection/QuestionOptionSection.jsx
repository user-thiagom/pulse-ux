import React from 'react'

const QuestionOptionSection = ({ question, onUpdate, surveyId }) => {
    function handleAddOption() {
        const newOption = {
            id: crypto.randomUUID(),
            label: ""
        }

        onUpdate(surveyId, question.id, {
            options: [
                ...question.options,
                newOption
            ]
        })
    }

    return (
        <div>
            <h3>
                Opções
            </h3>

            {
                question.options.map(option => (
                    <input
                        key={option.id}
                        value={option.label}
                        placeholder="Nome da tag"
                        onChange={(e) => {
                            const updatedOptions = question.options.map(o => {
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
                ))
            }

            <button onClick={handleAddOption}>
                Adicionar tag
            </button>

        </div>
    )
}

export default QuestionOptionSection