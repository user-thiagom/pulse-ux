import React from 'react'
import './ProfilePage.css'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser, logoutUser } from '../../services/authService'
import { useSurvey } from '../../context/SurveyContext'
import ProfileHeader from '../../components/profile/ProfileHeader/ProfileHeader'
import ProfileOverview from '../../components/profile/ProfileOverview/ProfileOverview'

const ProfilePage = () => {
  const navigate = useNavigate()
  const user = getLoggedUser()
  const { getSurveys } = useSurvey()
  const surveys = getSurveys()

  const publishedCount = surveys.filter((survey) => survey.status === 'published').length
  const draftCount = surveys.filter((survey) => survey.status === 'draft').length

  function handleLogout() {
    logoutUser()
    navigate('/login')
  }

  function handleLogin() {
    navigate('/login')
  }

  return (
    <main className="profile-page">
      <div className="profile-page-content">
        {user ? (
          <>
            <ProfileHeader name={user.name} email={user.email} onLogout={handleLogout} />
            <ProfileOverview
              surveysCount={surveys.length}
              publishedCount={publishedCount}
              draftCount={draftCount}
            />
            <section className="profile-actions">
              <h2>Configurações</h2>
              <p>Gerencie informações da sua conta e acesse opções rápidas.</p>
              <div className="profile-actions-grid">
                <button type="button" className="profile-action-button" onClick={() => navigate('/home')}>
                  Ver pesquisas
                </button>
                <button type="button" className="profile-action-button secondary" onClick={handleLogout}>
                  Sair da conta
                </button>
              </div>
            </section>
          </>
        ) : (
          <section className="profile-empty-state">
            <h1>Bem-vindo ao perfil</h1>
            <p>Faça login para acessar suas informações e gerenciar sua conta.</p>
            <button type="button" className="profile-action-button" onClick={handleLogin}>
              Entrar
            </button>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProfilePage