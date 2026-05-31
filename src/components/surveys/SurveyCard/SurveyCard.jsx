import React from 'react'
import './SurveyCard.css'
import { span } from 'framer-motion/client'
import { RightOutlined } from '@ant-design/icons'

const SurveyCard = ({ survey, onClick }) => {

    return (
        <div className={`survey-card-container ${survey.status === "published" ? "card-published" : 'card-draft'}`}>
            <div className={`survey-card-header ${survey.status === "published" ? "header-published" : "header-draft"}`}>
                {survey.status === "published" ? "Publicada" : "Rascunho"}
            </div>
            <div className="survey-card-content" onClick={() => onClick(survey.status, survey.id)}>
                <img src={survey.icon} alt="icon" />
                <div className="content-text">
                    <h1>{survey.title}</h1>
                    {
                        survey.status === "published" ? (
                            <p>{survey.responses.length} respostas</p>
                        ) : (
                            <span className='tag'>Continue a criação da pesquisa</span>
                        )
                    }
                    {
                        survey.status === "published" ? (
                            <span className={`tag ${survey.insights.length > 0 ? 'tag-insights' : ''}`}>
                                {survey.insights.length > 0 ? "Insights disponíveis" : "Sem insights"}
                            </span>
                        ) : ""
                    }

                </div>
                <div className="arrow-icon-card">
                    <RightOutlined />
                </div>
            </div>
        </div>
    )
}

export default SurveyCard