import React, { useState } from 'react'
import './FilterSurveysTab.css'

const FilterSurveysTab = ({onClick}) => {
    const categories = ['Todas pesquisas', 'Publicadas', 'Rascunhos', 'Com insigths'];
    const [activeTab, setActiveTab] = useState('Todas pesquisas');

    function handleClick(category) {
        setActiveTab(category)
        onClick(category)
    }

    return (
        <>
            <div className="tabs-container">
                <div className="tabs-wrapper">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleClick(category)}
                            className={`tab-button ${activeTab === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FilterSurveysTab