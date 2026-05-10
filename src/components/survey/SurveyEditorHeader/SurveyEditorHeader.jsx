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

                        <div>

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

                <button onClick={onSave}>
                    Salvar e sair
                </button>

                <button onClick={onPublish}>
                    Publicar pesquisa
                </button>

                <button onClick={onDelete}>
                    Deletar
                </button>

            </div>

        </section>
    )
}

export default SurveyEditorHeader