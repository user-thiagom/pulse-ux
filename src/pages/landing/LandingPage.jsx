import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="bg-red-500 text-white p-10">
            Esta é a landing page!
            <button onClick={()=>navigate("/home")}>Ir para a home</button>
        </div>
    );
}
