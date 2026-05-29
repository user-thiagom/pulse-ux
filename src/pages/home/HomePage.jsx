import React from 'react'
import './HomePage.css'
import HeroSection from '../../components/home/HeroSection/HeroSection'
import RecentSurveySection from '../../components/home/RecentSurveySection/RecentSurveySection'
import StatsCard from '../../components/home/StatsCard/StatsCard'
import CreateSurveyCard from '../../components/home/CreateSurveyCard/CreateSurveyCard'
import TemplateCard from '../../components/home/TemplateCard/TemplateCard'
import { useNavigate } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'

const HomePage = () => {
  const navigate = useNavigate();
  const { createSurvey } = useSurvey()

  function handleClickSurvey() {
    const id = createSurvey()
    navigate(`/create-survey/${id}`)
  }

  return (
    <main className="home-page">
      <HeroSection userName={"Thiago Fernandes"} />
      <div className="home-content">
        <div className="home-summary">
          <StatsCard totalResponses={58} growth={11} />
          <RecentSurveySection />
        </div>

        <div className="home-cta-row">
          <CreateSurveyCard onClick={handleClickSurvey} />
          <p className='home-or'>ou</p>
          <TemplateCard onClick={()=>navigate("/home")}/>
        </div>
      </div>
    </main>
  )
}

export default HomePage
