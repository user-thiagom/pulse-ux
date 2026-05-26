import React from 'react'
import './StatsCard.css'

const StatsCard = ({ totalResponses, growth }) => {
    return (
        <section className="stats-card">
            <div className="stats-card-content">
                <h2>
                    {totalResponses} respostas coletadas hoje
                </h2>

                <p>
                    + {growth}% desde ontem
                </p>
            </div>

            <div className="stats-card-image">
                <img
                    src="src\assets\icons\growth.svg"
                    alt="Estatísticas"
                />
            </div>
        </section>
    )
}

export default StatsCard