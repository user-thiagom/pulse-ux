import { BrowserRouter, Routes, Route, useLocation, HashRouter } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, pageVariants } from '../utils/animationConfig';
import LandingPage from '../pages/landing/LandingPage'
import HomePage from '../pages/home/HomePage'
import CreateSurveyPage from '../pages/createSurvey/CreateSurveyPage'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/register/RegisterPage'
import MainLayout from '../components/layout/MainLayout/MainLayout';
import SurveysPage from '../pages/surveys/SurveysPage';
import TemplatesPage from '../pages/templates/TemplatesPage'
import ProfilePage from '../pages/profile/ProfilePage'
import SurveyPage from '../pages/survey/SurveyPage';
import PublishedSurveyPage from '../pages/publishedSurvey/PublishedSurveyPage';
import SurveyResponse from "../pages/SurveyResponse";

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

                <Route element={<MainLayout />}>
                    <Route path="/home" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <HomePage />
                        </motion.div>
                    } />

                    <Route path="/surveys" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <SurveysPage />
                        </motion.div>
                    } />

                    <Route path="/templates" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <TemplatesPage />
                        </motion.div>
                    } />

                    <Route path="/profile" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <ProfilePage />
                        </motion.div>
                    } />

                    <Route path="/published-survey/:id" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <PublishedSurveyPage />
                        </motion.div>
                    } />

                    <Route path="/survey/:id" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <SurveyPage />
                        </motion.div>
                    } />

                    <Route path="/create-survey/:id" element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                            <CreateSurveyPage />
                        </motion.div>
                    } />

                </Route>

                <Route path="/respond/:id" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
                        <SurveyResponse />
                    </motion.div>
                } />

            </Routes>
        </AnimatePresence>
    )
}

export default function AppRoutes() {
    return (
        <HashRouter>
            <AnimatedRoutes />
        </HashRouter>
    )
}
