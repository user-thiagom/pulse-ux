import React from 'react'
import './BottomNavigation.css'
import { HomeOutlined, FileTextOutlined, PlusCircleOutlined, AppstoreOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSurvey } from '../../../context/SurveyContext';

const BottomNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createSurvey } = useSurvey()

    function handleCreateSurvey() {
        const id = createSurvey()
        navigate(`/create-survey/${id}`)
    }

    return (
        <nav className="bottom-navigation">
            <button className={location.pathname == "/home" ? "active" : ""} onClick={() => navigate('/home')}>
                <HomeOutlined />
                <span>
                    Home
                </span>
            </button>

            <button className={location.pathname == "/surveys" ? "active" : ""} onClick={() => navigate('/surveys')}>
                <FileTextOutlined />
                <span>
                    Pesquisas
                </span>
            </button>

            <button className="create-button" onClick={() => handleCreateSurvey()}>
                <PlusOutlined style={{fontSize: "30px"}}/>
            </button>

            <button className={location.pathname == "/templates" ? "active" : ""} onClick={() => navigate('/templates')}>
                <AppstoreOutlined />
                <span>
                    Templates
                </span>
            </button>

            <button className={location.pathname == "/profile" ? "active" : ""} onClick={() => navigate('/profile')}>
                <UserOutlined />
                <span>
                    Perfil
                </span>
            </button>
        </nav>
    )
}

export default BottomNavigation