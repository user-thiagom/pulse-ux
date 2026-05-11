import React, { useState } from 'react'
import './CreateSurveyPage.css'
import { useParams } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import SurveyEditorHeader from '../../components/survey/SurveyEditorHeader/SurveyEditorHeader'
import SurveyQuestionCard from '../../components/survey/SurveyQuestionCard/SurveyQuestionCard'

const CreateSurveyPage = () => {
    //Optei por usar o estado global para utilizá-los nos componentes controlados - Thiago
    const { getSurveyById, updateSurvey, deleteSurvey, addQuestion } = useSurvey();
    const { id } = useParams()
    const survey = getSurveyById(id)

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

    function handleDeleteSurvey() {

        const confirmDelete =
            window.confirm(
                "Deseja realmente deletar esta pesquisa?"
            )

        if (!confirmDelete) return

        deleteSurvey(id)

        //navigate("/my-surveys") - Mais pra frente
    }

    function handleAddQuestion() {
        addQuestion(id)
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
                    onDelete={handleDeleteSurvey}
                />
            </header>

            <section className='create-survey-content'>

                {survey.questions.map(question => (
                    <SurveyQuestionCard
                        key={question.id}
                        question={question}
                    />

                ))}

                <button onClick={handleAddQuestion}>
                    Adicionar pergunta
                </button>
            </section>
        </main>
    )
}

export default CreateSurveyPage