import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants } from '../utils/animationConfig';
import LandingPage from '../pages/landing/LandingPage'
import HomePage from '../pages/home/HomePage'
import CreateSurveyPage from '../pages/createSurvey/CreateSurveyPage'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/register/RegisterPage'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <LandingPage />
                    </motion.div>
                } />
                <Route path="/home" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <HomePage />
                    </motion.div>
                } />
                <Route path="/create-survey/:id" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <CreateSurveyPage />
                    </motion.div>
                } />
                <Route path="/login" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <LoginPage />
                    </motion.div>
                } />
                <Route path="/register" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <RegisterPage />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    )
}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}
