import React from 'react'
import './HomePage.css'

const recentSearches = [
  {
    id: 1,
    title: 'Pesquisa de Serviço de Atendimento',
    status: 'Publicada',
    subtitle: '123 respostas',
    emoji: '🧑‍💼',
  },
  {
    id: 2,
    title: 'Pesquisa de Qualidade de Produtos',
    status: 'Rascunho',
    subtitle: 'Continue a criação da pesquisa',
    emoji: '⭐',
  },
  {
    id: 3,
    title: 'Pesquisa de Catálogo da plataforma de streaming',
    status: 'Publicada',
    subtitle: '87 respostas',
    emoji: '🎬',
  },
]

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="hero-card">
        <div>
          <span className="hero-badge">Bem-vindo ao PulseUX</span>
          <h1>Suas pesquisas. Seus insights.</h1>
          <p>
            Crie, acompanhe e entenda os resultados das suas pesquisas de forma
            rápida e simples.
          </p>
        </div>
      </section>

      <section className="recent-section">
        <div className="recent-header">
          <div>
            <p className="section-label">Minhas pesquisas recentes</p>
          </div>
          <button className="link-button" type="button">
            Ver todas
          </button>
        </div>

        <div className="recent-list">
          {recentSearches.map((item) => (
            <article key={item.id} className="recent-card">
              <div className="recent-card__icon">{item.emoji}</div>
              <div className="recent-card__content">
                <div className="card-head">
                  <h2>{item.title}</h2>
                  <span
                    className={
                      item.status === 'Publicada'
                        ? 'status-badge status-badge--success'
                        : 'status-badge'
                    }
                  >
                    {item.status}
                  </span>
                </div>
                <p>{item.subtitle}</p>
              </div>
              <span className="card-arrow">›</span>
            </article>
          ))}
        </div>
      </section>

      <section className="metric-card">
        <div>
          <p className="metric-label">87 respostas coletadas hoje</p>
          <p className="metric-subtitle">+12% desde ontem</p>
        </div>
        <div className="metric-icon">📊</div>
      </section>

      <section className="actions-section">
        <button className="primary-action" type="button">
          Crie sua pesquisa personalizada
        </button>
        <p className="actions-text">Monte sua pesquisa do jeito que quiser</p>
        <button className="secondary-action" type="button">
          Use um template de pesquisa
        </button>
      </section>
    </main>
  )
}

export default HomePage
