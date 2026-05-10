import React, { useState } from 'react'
import './CreateSurveyPage.css'
import { useParams } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import SurveyEditorHeader from '../../components/survey/SurveyEditorHeader/SurveyEditorHeader'

const CreateSurveyPage = () => {
    //Optei por usar o estado global para utilizá-los nos componentes controlados - Thiago
    const { getSurveyById, updateSurvey } = useSurvey();
    const { id } = useParams()
    const survey = getSurveyById(id)
    console.log(survey)

    //Condicional para caso a pesquisa não seja encontrada no contexto - Thiago
    if (!survey) {
        return <p>Pesquisa não encontrada</p>;
    }

    function handleTitleChange(value) {
        updateSurvey(id, {
            title: value
        })
    }

    function handleDescriptionChange(value) {
        updateSurvey(id, {
            description: value
        })
    }

    //Estutura básica da página de criação de pesquisas (vai passar por bastante alteração ainda) - Thiago
    return (
        <main className='create-survey-page'>
            <header className='create-survey-header'>
                <SurveyEditorHeader 
                    title={survey.title} 
                    description={survey.description}
                    onTitleChange={handleTitleChange}
                    onDescriptionChange={handleDescriptionChange}
                />
            </header>

            <section className='create-survey-content'>

            </section>
        </main>
    )
}

export default CreateSurveyPage