import React, { useState } from 'react'
import './CreateSurveyPage.css'
import { useParams } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'

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

    //Estutura básica da página de criação de pesquisas (vai passar por bastante alteração ainda) - Thiago
    return (
        <main className='create-survey-page'>
            <header className='create-survey-header'>
                <h1>{survey.title}</h1>
            </header>

            <section className='create-survey-content'>

            </section>
        </main>
    )
}

export default CreateSurveyPage