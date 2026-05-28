import React from 'react'
import './TemplateCard.css'
import TemplateIcons from "../../../assets/icons/template-icons.svg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const TemplateCard = ({ onClick }) => {
    return (
        <section
            className="template-card"
            onClick={onClick}
        >
            <DotLottieReact
                src="https://lottie.host/8fcc6fbf-8d04-4262-abb5-a70ba75a42ef/oLFV7npecG.lottie"
                loop
                autoplay
                className='template-card-animation'
            />

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