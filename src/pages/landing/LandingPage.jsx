import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="landing-page">
            Esta é a landing page!
            <button onClick={()=>navigate("/home")}>Ir para a home</button>
        </div>
    );
}
