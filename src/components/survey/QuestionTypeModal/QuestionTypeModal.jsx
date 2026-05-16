import React from 'react'
import { QUESTION_TYPE_CONFIG } from '../../../utils/questionTypeConfig';

const QuestionTypeModal = ({ isOpen, onClose, onSelectType }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="question-type-modal">
                <header>
                    <h2>
                        Selecione o tipo
                    </h2>
                    <button onClick={onClose}>
                        X
                    </button>
                </header>

                <div className="question-type-list">
                    {
                        Object.entries(QUESTION_TYPE_CONFIG).map(([type, config]) => (
                            <button

                                key={type}

                                className="question-type-option"

                                onClick={() =>
                                    onSelectType(type)
                                }
                            >

                                <span>
                                    {}
                                </span>

                                <div>
                                    <strong>
                                        {config.label}
                                    </strong>
                                    <p>
                                        {
                                            config.description
                                        }
                                    </p>
                                </div>
                            </button>
                        )
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default QuestionTypeModal