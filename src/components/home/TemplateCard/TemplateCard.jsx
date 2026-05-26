import React from 'react'
import './TemplateCard.css'
import TemplateIcons from "../../../assets/icons/template-icons.svg";

const TemplateCard = ({ onClick }) => {
    return (
        <section
            className="template-card"
            onClick={onClick}
        >
            <div className="template-card-icons">
                <img
                    src={TemplateIcons}
                    alt="Templates"
                />
            </div>

            <div className="template-card-content">

                <h2>
                    Use um template de pesquisa
                </h2>

                <p>
                    Comece rápido com modelos prontos
                </p>

            </div>

        </section>
    )
}

export default TemplateCard