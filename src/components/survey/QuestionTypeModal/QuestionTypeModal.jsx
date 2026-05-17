import React from 'react'
import './QuestionTypeModal.css'
import { QUESTION_TYPE_CONFIG } from '../../../utils/questionTypeConfig';
import './QuestionTypeModal.css'

const QuestionTypeModal = ({ isOpen, onClose, onSelectType }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="question-type-modal">
                <header className="question-type-modal-header">
                    <button onClick={onClose}>
                        X
                    </button>
                    <h2>
                        Selecione o tipo
                    </h2>
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
                                    📋
                                </span>

                                <div className="question-type-option-content">
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