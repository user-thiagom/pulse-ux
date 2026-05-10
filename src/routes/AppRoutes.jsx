import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landing/LandingPage'
import HomePage from '../pages/home/HomePage'
import CreateSurveyPage from '../pages/createSurvey/CreateSurveyPage'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/create-survey/:id" element={<CreateSurveyPage />} />
            </Routes>
        </BrowserRouter>
    )
}