import React from 'react'
import './CreateSurveyCard.css'
import { PlusOutlined } from "@ant-design/icons";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CreateSurveyCard = ({ onClick }) => {
    return (
        <section
            className="create-survey-card"
            onClick={onClick}
        >
            <DotLottieReact
                src="https://lottie.host/07fa3373-0ae7-4485-b606-72b6c9d6c4d7/ZMe5lABJn8.lottie"
                loop
                autoplay
                className='create-survey-card-animation'
            />
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