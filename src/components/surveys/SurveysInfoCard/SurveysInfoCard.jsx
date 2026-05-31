import React from 'react'
import './SurveysInfoCard.css'
import { WechatFilled } from '@ant-design/icons'

const SurveysInfoCard = ({ responsesTotal, publishedSurveys, draftSurveys, insightSurveys }) => {
    return (
        <div className='surveys-info-card'>
            <div className='surveys-info-header'>
                <WechatFilled className='surveys-info-card-icon' />
                <div className="surveys-info-header-text">
                    <h2>Total de respostas</h2>
                    <span>{responsesTotal || "1023"}</span>
                </div>
            </div>
            <div className='surveys-info-content'>
                <div className="surveys-info-infos">
                    <span>{publishedSurveys || "16"}</span>
                    <h3>Publicadas</h3>
                </div>
                <div className="surveys-info-infos">
                    <span>{draftSurveys || "8"}</span>
                    <h3>Rascunhos</h3>
                </div>
                <div className="surveys-info-infos">
                    <span>{insightSurveys || "10"}</span>
                    <h3>Insights</h3>
                </div>
                <div className="surveys-info-infos">
                    <span>{publishedSurveys || "24"}</span>
                    <h3>Total</h3>
                </div>
            </div>
        </div>
    )
}

export default SurveysInfoCard