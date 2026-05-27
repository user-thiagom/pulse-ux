import React from 'react'
import './HomePage.css'
import HeroSection from '../../components/home/HeroSection/HeroSection'
import RecentSurveySection from '../../components/home/RecentSurveySection/RecentSurveySection'
import StatsCard from '../../components/home/StatsCard/StatsCard'
import CreateSurveyCard from '../../components/home/CreateSurveyCard/CreateSurveyCard'
import TemplateCard from '../../components/home/TemplateCard/TemplateCard'
import { useNavigate } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import BottomNavigation from '../../components/navigation/BottomNavigation/BottomNavigation'


const HomePage = () => {
  const navigate = useNavigate();
  const { createSurvey } = useSurvey()

  function handleClickSurvey() {
    const id = createSurvey()
    navigate(`/create-survey/${id}`)
  }

  return (
    <main className="home-page">
      <HeroSection userName={"Thiago"}/>
      <RecentSurveySection />
      <StatsCard totalResponses={58} growth={11} />
      <div className="line-horizontal"></div>
      <CreateSurveyCard onClick={handleClickSurvey}/>
      <p>ou</p>
      <TemplateCard />
      <BottomNavigation/>
    </main>
  )
}

export default HomePage
