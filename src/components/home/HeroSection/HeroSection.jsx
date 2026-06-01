import React from 'react'
import './HeroSection.css'
import { LogOut } from 'lucide-react'

const HeroSection = ({ userName }) => {
    return (
        <section className="hero-section-home">
            <div className="hero-top-home">
                <div className="hero-user-info-home">
                    <span>
                        Olá, <em>{userName}</em>
                    </span>

                    <p>
                        Bem-vindo de volta ao PulseUX
                    </p>

                </div>
                <div className="logout-icon">
                    <LogOut size={"32"}/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection