import React from 'react'
import './DesktopNavigation.css'
import { HomeOutlined, FileTextOutlined, AppstoreOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSurvey } from '../../../context/SurveyContext'

const DesktopNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { createSurvey } = useSurvey()

    function handleCreateSurvey() {
        const id = createSurvey()
        navigate(`/create-survey/${id}`)
    }

    const navItems = [
        { label: 'Home', path: '/home', Icon: HomeOutlined },
        { label: 'Pesquisas', path: '/surveys', Icon: FileTextOutlined },
        { label: 'Templates', path: '/templates', Icon: AppstoreOutlined },
        { label: 'Perfil', path: '/profile', Icon: UserOutlined }
    ]

    return (
        <header className="desktop-navigation">
            <div className="desktop-navigation-brand">
                <span className="desktop-navigation-logo">Pulse</span>
                <p>UX Research</p>
            </div>

            <nav className="desktop-navigation-links">
                {navItems.map(({ label, path, Icon }) => (
                    <button
                        key={path}
                        className={location.pathname === path ? 'desktop-navigation-link active' : 'desktop-navigation-link'}
                        onClick={() => navigate(path)}
                        type="button"
                    >
                        <Icon />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>

            <button className="desktop-navigation-create-button" onClick={handleCreateSurvey} type="button">
                <PlusOutlined />
                <span>Criar pesquisa</span>
            </button>
        </header>
    )
}

export default DesktopNavigation
