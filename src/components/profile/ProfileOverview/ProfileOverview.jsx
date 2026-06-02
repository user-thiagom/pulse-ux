import React from 'react'
import './ProfileOverview.css'

const ProfileOverview = ({ surveysCount, publishedCount, draftCount }) => {
  return (
    <section className="profile-overview">
      <div className="profile-overview-title">
        <h2>Visão geral da conta</h2>
        <p>Veja um resumo rápido das suas pesquisas e atividades.</p>
      </div>

      <div className="profile-overview-cards">
        <div className="profile-overview-card">
          <span>Total de pesquisas</span>
          <strong>{surveysCount}</strong>
        </div>
        <div className="profile-overview-card">
          <span>Pesquisas publicadas</span>
          <strong>{publishedCount}</strong>
        </div>
        <div className="profile-overview-card">
          <span>Rascunhos</span>
          <strong>{draftCount}</strong>
        </div>
      </div>
    </section>
  )
}

export default ProfileOverview;
