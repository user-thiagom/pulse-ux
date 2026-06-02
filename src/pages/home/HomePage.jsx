import React from 'react'
import './HomePage.css'
import HeroSection from '../../components/home/HeroSection/HeroSection'
import RecentSurveySection from '../../components/home/RecentSurveySection/RecentSurveySection'
import StatsCard from '../../components/home/StatsCard/StatsCard'
import CreateSurveyCard from '../../components/home/CreateSurveyCard/CreateSurveyCard'
import TemplateCard from '../../components/home/TemplateCard/TemplateCard'
import { useNavigate } from 'react-router-dom'
import { useSurvey } from '../../context/SurveyContext'
import { getLoggedUser, logoutUser } from '../../services/authService'

const HomePage = () => {
  const navigate = useNavigate();
  const user = getLoggedUser()
  const { createSurvey, getRecentSurveys } = useSurvey()
  const recentSurveys = getRecentSurveys()

  function handleClickCreateSurvey() {
    const id = createSurvey()
    navigate(`/create-survey/${id}`)
  }

  function handleClickDraft(id) {
    navigate(`/create-survey/${id}`)
  }

  function handleClickPublished(id) {
    navigate(`/published-survey/${id}`)
  }

  function handleClickListAllSurveys() {
    navigate("/surveys")
  }

  function handleClickLogout() {
    if (logoutUser()) {
      navigate("/")
    } else{
      alert("Erro ao sair da aplicação")
    }
  }

  return (
    <main className="home-page">
      <HeroSection userName={user.name || "Thiago Fernandes"} onLogout={handleClickLogout}/>
      <div className="home-content">
        <div className="home-summary">
          <StatsCard totalResponses={58} growth={11} />
          <RecentSurveySection
            surveyList={recentSurveys}
            onClickDraft={handleClickDraft}
            onClickPublished={handleClickPublished}
            onClickListAllSurveys={handleClickListAllSurveys}
          />
        </div>

        <div className="home-cta-row">
          <CreateSurveyCard onClick={handleClickCreateSurvey} />
          <p className='home-or'>ou</p>
          <TemplateCard onClick={() => navigate("/home")} />
        </div>
      </div>
    </main>
  )
}

export default HomePage
