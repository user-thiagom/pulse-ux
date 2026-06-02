import React from 'react'
import './StatsCard.css'
import growthIcon from '../../../assets/icons/growth.svg'

const StatsCard = ({ totalResponses, growth }) => {
    return (
        <section className="stats-card">
            <div className="stats-card-content">
                <h2>
                    {totalResponses} respostas coletadas hoje
                </h2>

                <p>
                    <span>+ {growth}%</span> desde ontem
                </p>
            </div>

            <div className="stats-card-image">
                <img
                    src={growthIcon}
                    alt="Estatísticas"
                />
            </div>
        </section>
    )
}

export default StatsCard