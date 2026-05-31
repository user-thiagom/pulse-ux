import React from 'react'
import './RecentSurveySection.css'
import SurveyPreviewCard from '../SurveyPreviewCard/SurveyPreviewCard'

const RecentSurveySection = ({ surveyList = [], onClickDraft, onClickPublished, onClickListAllSurveys }) => {
    return (
        <section className="recent-surveys-section">
            <div className="recent-surveys-header">
                <h2>
                    Minhas pesquisas recentes
                </h2>

                <button onClick={()=>onClickListAllSurveys()}>
                    Ver todas
                </button>
            </div>

            <div className="recent-surveys-list">
                {surveyList.map((survey, index) => (
                    <SurveyPreviewCard
                        key={index}
                        status={survey.status}
                        title={survey.title}
                        responsesQuantity={survey.responses.length}
                        iconPath={survey.icon}
                        surveyId={survey.id}
                        onClick={survey.status === "published" ? onClickPublished : onClickDraft}
                    />
                ))}

            </div>

        </section>
    )
}

export default RecentSurveySection