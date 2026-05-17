import React, { useState } from 'react'
import './CreateSurveyPage.css'
import { useParams } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import SurveyEditorHeader from '../../components/survey/SurveyEditorHeader/SurveyEditorHeader'
import SurveyQuestionCard from '../../components/survey/SurveyQuestionCard/SurveyQuestionCard'
import QuestionTypeModal from '../../components/survey/QuestionTypeModal/QuestionTypeModal'
import NavigationHeader from '../../components/layout/NavigationHeader/NavigationHeader'

const CreateSurveyPage = () => {
    const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    //Optei por usar o estado global para utilizá-los nos componentes controlados - Thiago
    const { getSurveyById, updateSurvey, deleteSurvey, addQuestion, updateQuestion, removeQuestion } = useSurvey();
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

    function handlePublishSurvey() {
        const success = publishSurvey(id);

        if (!success) {
            return;
        }

        setIsPublishing(true);

        setTimeout(() => {

            //IMPLEMENTAR MAIS PRA FRENTE
            //navigate(`/survey/${id}`);

        }, 2000);
    }

    function handleOpenTypeModal(questionId) {
        setSelectedQuestionId(questionId)
        setIsTypeModalOpen(true)
    }

    function handleSelectedQuestionType(type) {
        updateQuestion(id, selectedQuestionId, { type })
        setIsTypeModalOpen(false)
    }

    //Estutura básica da página de criação de pesquisas (vai passar por bastante alteração ainda) - Thiago
    return (
        <main className='create-survey-page'>
            <NavigationHeader subtitle={"Pesquisa personalizada"}>
                <SurveyEditorHeader
                    title={survey.title}
                    description={survey.description}
                    onTitleChange={handleTitleChange}
                    onDescriptionChange={handleDescriptionChange}
                    onDelete={handleDeleteSurvey}
                    onPublish={handlePublishSurvey}
                />
            </NavigationHeader>

            <section className='create-survey-content'>

                {survey.questions.map((question, index) => (
                    <SurveyQuestionCard
                        key={question.id}
                        question={question}
                        index={index}
                        onUpdate={updateQuestion}
                        surveyId={id}
                        onDelete={removeQuestion}
                        onOpenTypeModal={handleOpenTypeModal}
                    />

                ))}

                {isTypeModalOpen && (
                    <QuestionTypeModal
                        isOpen={isTypeModalOpen}
                        onClose={() => setIsTypeModalOpen(false)}
                        onSelectType={handleSelectedQuestionType}
                    />
                )}

                <button
                    className="add-question-button"
                    onClick={handleAddQuestion}
                >
                    <span>➕</span>
                    <span>Adicionar nova pergunta</span>
                </button>
            </section>
        </main>
    )
}

export default CreateSurveyPage