import React, { useState } from 'react'
import './SurveyEditorHeader.css'
import { PencilLine, Trash2, SquarePen } from "lucide-react";

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
                                className="edit-button"
                                onClick={() => setIsEditingTitle(true)}
                            >
                                <PencilLine size={18} />
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
                                className="edit-button"
                                onClick={() => setIsEditingDescription(true)}
                            >
                                <PencilLine size={18} />
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
                    <Trash2 size={16} />
                    Excluir pesquisa
                </button>

            </div>

        </section>
    )
}

export default SurveyEditorHeader