import React from 'react'
import './SurveyPreviewCard.css'
import { Card, Tag } from "antd";
import { RightOutlined } from "@ant-design/icons";

const SurveyPreviewCard = ({ title, status, responsesQuantity = 0, iconPath, onClick, surveyId }) => {

    return (
        <div className="survey-card">
            <img src={iconPath} alt="Icone" className="survey-avatar" />
            <div className={`badge ${status === "published" ? "published" : "draft"}`}>{status == "published" ? "Publicada" : "Rascunho"}</div>
            <h3 className='survey-card-title'>{title}</h3>

            {
                status === "published" ? (<p>{responsesQuantity} respostas</p>) : (<p>Continue a criação...</p>)
            }

            {
                status === "published" ? (
                    <button className="btn-acao-primario" onClick={()=>onClick(surveyId)}>Ver resultados</button>
                ) : (
                    <button className="btn-acao-secundario" onClick={()=>onClick(surveyId)}>Continuar rascunho</button>
                )
            }

        </div>
    )
}

export default SurveyPreviewCard