import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RocketOutlined, BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { getLoggedUser } from '../../services/authService';
import LogoHorizontal from '../../assets/logo/logo-horizontal.svg'

export default function LandingPage() {
    const navigate = useNavigate();

    function handleStartNow() {
        const loggedUser = getLoggedUser();

        if (loggedUser) {
            navigate("/home");
            return;
        }

        navigate("/login");
    }

    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="landing-logo">
                    <img src={LogoHorizontal} className="landing-logo-icon" />
                    {/* <span>Pulse<strong>UX</strong></span> */}
                </div>
                <nav className="landing-nav">
                    <Button type="text" onClick={() => navigate('/login')} className="nav-login-btn">
                        Login
                    </Button>
                    <Button type="primary" onClick={() => navigate('/register')} className="nav-signup-btn">
                        Cadastre-se
                    </Button>
                </nav>
            </header>

            <main className="landing-main">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Entenda seus usuários com <span className="highlight">precisão</span>
                        </h1>
                        <p className="hero-subtitle">
                            A plataforma definitiva para criar, gerenciar e analisar pesquisas de UX, focada em transformar dados em experiências incríveis.
                        </p>
                        <div className="hero-actions">
                            <Button type="primary" size="large" onClick={handleStartNow} className="hero-btn-primary">
                                Começar Agora <RocketOutlined />
                            </Button>
                            <Button size="large" onClick={() => navigate('/home')} className="hero-btn-secondary">
                                Ver Demonstração
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <h2 className="section-title">Por que escolher o PulseUX?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <RocketOutlined className="feature-icon" />
                            </div>
                            <h3>Rápido e Intuitivo</h3>
                            <p>Crie pesquisas em minutos com uma interface amigável e direta ao ponto.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <UserOutlined className="feature-icon" />
                            </div>
                            <h3>Foco no Usuário</h3>
                            <p>Colete feedbacks valiosos diretamente do seu público-alvo com facilidade.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <BarChartOutlined className="feature-icon" />
                            </div>
                            <h3>Análises Precisas</h3>
                            <p>Transforme dados em insights visuais claros que ajudam na tomada de decisão.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="landing-footer">
                <p>&copy; {new Date().getFullYear()} PulseUX. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
