import React from 'react'
import './SurveyPreviewCard.css'
import { Card, Tag } from "antd";
import { RightOutlined } from "@ant-design/icons";

const SurveyPreviewCard = ({ title, status, responses = [], icon }) => {

    return (
        <section className="survey-preview-card">
            <div className="survey-preview-content">
                <div className="survey-preview-left">
                    <div className="survey-preview-image">
                        <img
                            src={icon}
                            alt={title}
                        />
                    </div>

                    <div className="survey-preview-info">
                        <h3>
                            {title}
                        </h3>
                        <div className="survey-preview-meta">
                            {
                                status === "published" ? (
                                    <Tag color="green" variant='solid' style={{borderRadius:"10px"}}>
                                        Publicada
                                    </Tag>
                                ) : (

                                    <Tag style={{color: "#fff", backgroundColor: "#757575", borderRadius:"10px"}} variant='solid'>
                                        Rascunho
                                    </Tag>
                                )
                            }

                            <span>
                                {
                                    status === "published" ? `${responses.length} respostas` : "Continue a criação da pesquisa"
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <button className="survey-preview-arrow">
                    <RightOutlined />
                </button>
            </div>
        </section>
    )
}

export default SurveyPreviewCard