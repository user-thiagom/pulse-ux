import React from 'react'
import './PublishedSurveyPage.css'
import NavigationHeader from '../../components/layout/NavigationHeader/NavigationHeader'
import { useParams } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import { CopyOutlined, DownloadOutlined, RocketOutlined } from '@ant-design/icons'

//TODO: Definir as props e deixar os botões funcionais
const PublishedSurveyPage = () => {
    const { getSurveyById } = useSurvey();
    const { id } = useParams()
    const survey = getSurveyById(id)

    if (!survey) {
        return <p>Pesquisa não encontrada</p>;
    }

    return (
        <div className='published-survey-page'>
            <NavigationHeader subtitle={"Pesquisa publicada"} title={survey.title} />
            <div className="published-survey-content">
                <div className="published-survey-icon">
                    <RocketOutlined />
                </div>
                <h2 className="published-survey-title">
                    Pesquisa publicada com sucesso!
                </h2>
                <p className="published-survey-text">
                    Sua pesquisa está pronta para receber respostas. Compartilhe o link abaixo com seus clientes.
                </p>
                <div className="published-survey-card">
                    <h3 className="card-title">Link da pesquisa</h3>
                    <div className="copy-link-container">
                        <span className="survey-link">
                            {`https://pulseux.app/s/${survey.id}`}
                        </span>
                        <button className="copy-link-btn">
                            <CopyOutlined className='icons'/>
                            Copiar
                        </button>
                    </div>
                </div>
                <div className="published-survey-card">
                    <h3 className="card-title">QR Code da pesquisa</h3>

                    <p>
                        Baixe o QR Code para imprimir ou compartilhar em materiais físicos
                    </p>

                    <button className="download-btn">
                        <DownloadOutlined className='icons'/>
                        Baixar QR Code
                    </button>
                </div>
                <button className="survey-results-btn">
                    Ver resultados
                </button>
            </div>
        </div>
    )
}

export default PublishedSurveyPage