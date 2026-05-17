import React, { useState } from 'react'
import './SurveyEditorHeader.css'

const SurveyEditorHeader = ({ title, description, onTitleChange, onDescriptionChange, onSave, onPublish, onDelete }) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);

    return (
        <section className="survey-editor-header">

            <div className="survey-editor-info">

                <div className="survey-title-container">
                    {isEditingTitle ? (

                        <input
                            className="survey-title-input"
                            autoFocus
                            value={title}
                            onChange={(e) =>
                                onTitleChange(e.target.value)
                            }
                            onBlur={() =>
                                setIsEditingTitle(false)
                            }
                        />

                    ) : (

                        <div className="survey-title-display">

                            <h1>
                                {title || "Nova pesquisa"}
                            </h1>

                            <button
                                onClick={() =>
                                    setIsEditingTitle(true)
                                }
                            >
                                ✏️
                            </button>

                        </div>
                    )}
                </div>

                <div className="survey-description-container">
                    {isEditingDescription ? (

                        <textarea
                            className="survey-description-input"
                            autoFocus
                            value={description}
                            onChange={(e) =>
                                onDescriptionChange(e.target.value)
                            }
                            onBlur={() =>
                                setIsEditingDescription(false)
                            }
                        />

                    ) : (

                        <div className="survey-description-display">

                            <p>
                                {description || "Adicione uma descrição"}
                            </p>

                            <button
                                onClick={() =>
                                    setIsEditingDescription(true)
                                }
                            >
                                ✏️
                            </button>

                        </div>
                    )}
                </div>

            </div>

            <div className="survey-editor-actions">

                <div className="survey-editor-primary-actions">
                    <button className="save-button" onClick={onSave}>
                        Salvar e sair
                    </button>

                    <button className="publish-button" onClick={onPublish}>
                        Publicar pesquisa
                    </button>
                </div>

                <button className="delete-button" onClick={onDelete}>
                    Deletar
                </button>

            </div>

        </section>
    )
}

export default SurveyEditorHeader