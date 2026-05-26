import React from 'react'
import './CreateSurveyCard.css'
import { PlusOutlined } from "@ant-design/icons";

const CreateSurveyCard = ({ onClick }) => {
    return (
        <section
            className="create-survey-card"
            onClick={onClick}
        >
            <div className="create-survey-icon">
                <PlusOutlined />
            </div>

            <div className="create-survey-content">
                <h2>
                    Crie sua pesquisa personalizada
                </h2>
                <p>
                    Monte sua pesquisa do jeito que quiser
                </p>
            </div>
        </section>
    )
}

export default CreateSurveyCard