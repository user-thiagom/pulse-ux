import React, { useState } from 'react'
import './SurveysPage.css'
import NavigationHeader from '../../components/layout/NavigationHeader/NavigationHeader'
import SurveysInfoCard from '../../components/surveys/SurveysInfoCard/SurveysInfoCard'
import FilterSurveysTab from '../../components/surveys/FilterSurveysTab/FilterSurveysTab'
import { useNavigate } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import SurveyCard from '../../components/surveys/SurveyCard/SurveyCard'

const SurveysPage = () => {
    const [surveyFilter, setSurveyFilter] = useState("Todas pesquisas")
    const navigate = useNavigate()
    const { getSurveys } = useSurvey()
    const surveys = getSurveys()

    function handleClickFilter(category) {
        setSurveyFilter(category)
    }

    function handleClickCard(surveyStatus, surveyId) {
        if (surveyStatus === "published") {
            navigate(`/published-survey/${surveyId}`)
        } else{
            navigate(`/create-survey/${surveyId}`)
        }
    }

    function handleAllSurveys() {
        return surveys.map(survey => (
            <SurveyCard survey={survey} onClick={handleClickCard} key={survey.id}/>
        ))
    }

    function handlePublishedSurveys() {
        const publisheds = surveys.filter(survey => survey.status === "published")
        return publisheds.map(survey => (
            <SurveyCard survey={survey} onClick={handleClickCard} key={survey.id}/>
        ))
    }
    
    function handleDraftSurveys() {
        const drafts = surveys.filter(survey => survey.status === "draft")
        return drafts.map(survey => (
            <SurveyCard survey={survey} onClick={handleClickCard} key={survey.id}/>
        ))
    }

    function handleInsigthSurveys() {
        const insights = surveys.filter(survey => survey.insights.length > 0)
        return insights.map(survey => (
            <SurveyCard survey={survey} onClick={handleClickCard} key={survey.id}/>
        ))
    }

    return (
        <main className="surveys-page">
            <NavigationHeader title={"Minhas Pesquisas"} />
            <div className="surveys-page-content">
                <SurveysInfoCard />
                <FilterSurveysTab onClick={handleClickFilter} />
                <div className="surveys-list">
                    {
                        surveyFilter === "Todas pesquisas" && handleAllSurveys()
                    }
                    {
                        surveyFilter === "Publicadas" && handlePublishedSurveys()
                    }
                    {
                        surveyFilter === "Rascunhos" && handleDraftSurveys()
                    }
                    {
                        surveyFilter === "Com insigths" && handleInsigthSurveys()
                    }
                </div>
            </div>
        </main>
    )
}

export default SurveysPage