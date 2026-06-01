import React from 'react'
import './NavigationHeader.css'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logo from '../../../assets/logo/logo-horizontal.svg'

const NavigationHeader = ({ title, subtitle, children }) => {
    const navigate = useNavigate()

    return (
        <header className="navigation-header">
            <div className="nav-btn-logo">
                <button
                    className="navigation-header-back-button"
                    onClick={() => navigate(-1)}
                >

                    <ArrowLeft size={18} />

                    <span>
                        Voltar
                    </span>

                </button>
                <img src={logo} alt="logo-pulseux" className='logo'/>
            </div>


            {
                (title || subtitle) && (
                    <div className="navigation-header-content">
                        <h1>
                            {title}
                        </h1>

                        {

                            subtitle && (
                                <p>
                                    {subtitle}
                                </p>
                            )
                        }

                    </div>
                )
            }



            {

                children && (

                    <div className="navigation-header-children">

                        {children}

                    </div>
                )
            }

        </header>
    )
}

export default NavigationHeader