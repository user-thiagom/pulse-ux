import React from 'react'
import './RecentSurveySection.css'
import SurveyPreviewCard from '../SurveyPreviewCard/SurveyPreviewCard'

const RecentSurveySection = ({surveyList = []}) => {
    return (
        <section className="recent-surveys-section">
            <div className="recent-surveys-header">
                <h2>
                    Minhas pesquisas recentes
                </h2>

                <button>
                    Ver todas
                </button>
            </div>

            <div className="recent-surveys-list">
                <SurveyPreviewCard status={"published"} title={"Pesquisa interna dos atendentes"} responsesQuantity={25} iconPath={"src/assets/icons/icon1.svg"}/>
                <SurveyPreviewCard status={"draft"} title={"Pesquisa para a qualidade das entregas"} responsesQuantity={10} iconPath={"src/assets/icons/icon2.svg"}/>
                <SurveyPreviewCard status={"published"} title={"Pesquisa para a qualidade do catálogo"} responsesQuantity={156} iconPath={"src/assets/icons/icon3.svg"}/>
                {/* cards aqui */}

            </div>

        </section>
    )
}

export default RecentSurveySection