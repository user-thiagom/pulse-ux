import React from 'react'
import './ProfileHeader.css'

const ProfileHeader = ({ name, email, onLogout }) => {
  const initials = name
    ? name
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'PU'

  return (
    <section className="profile-header">
      <div className="profile-header-avatar">{initials}</div>
      <div className="profile-header-content">
        <p className="profile-header-small">Meu Perfil</p>
        <h1>{name || 'Usuário PulseUX'}</h1>
        <p className="profile-header-email">{email || 'Nenhum usuário logado'}</p>
      </div>
      <button className="profile-logout-button" type="button" onClick={onLogout}>
        Sair
      </button>
    </section>
  )
}

export default ProfileHeader;
