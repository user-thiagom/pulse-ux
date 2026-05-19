import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SurveyHeader from './components/SurveyHeader';
import QuestionCard from './components/QuestionCard';
import SurveyLoading from './components/SurveyLoading'; // Importado para atender ao Critério 1 (RSP-02)
import SurveyError from './components/SurveyError';     // Importado para atender ao Critério 2 (RSP-02)
import './styles.css';

// Critério 2 (RSP-01): Buscar pesquisa via getSurveyById (Simulado)
const getSurveyById = async (id) => {
  // Simulando delay para podermos apreciar o componente de animação visual
  await new Promise((resolve) => setTimeout(resolve, 1200)); 
  
  if (id === "error") {
    throw new Error("Pesquisa não encontrada");
  }

  return {
    id,
    title: "Pesquisa de Satisfação",
    questions: [
      { id: 1, type: "rating", text: "Qual é o seu nível de satisfação com nosso serviço?" },
      { id: 2, type: "text", text: "O que podemos melhorar no nosso produto?" }
    ]
  };
};

// Critério 1 (RSP-01): Criar componente RespondSurveyPage
export default function RespondSurveyPage() {
  // Critério 2 (RSP-01): Receber surveyId pela rota
  const { surveyId } = useParams();
  const navigate = useNavigate();

  // Critério 3 (RSP-01): Estados principais requeridos
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Estado para armazenar os dados da pesquisa carregada
  const [survey, setSurvey] = useState(null);

  // Estado para controlar o Modo Escuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Critério 2 (RSP-02): Função de carregamento isolada para permitir o botão "Tentar novamente"
  const loadSurvey = async () => {
    try {
      setIsLoading(true);
      setHasError(false); // Reseta o estado de erro antes de tentar re-carregar
      
      const data = await getSurveyById(surveyId || "survey-123");
      
      if (!data || !data.questions || data.questions.length === 0) {
        setHasError(true);
      } else {
        setSurvey(data);
      }
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSurvey();
  }, [surveyId]);

  const totalQuestions = survey?.questions.length || 0;
  const currentQuestion = survey?.questions[currentQuestionIndex];

  const progressPercent = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const nextQuestion = () => {
    const currentAnswer = answers[currentQuestion.id];
    if (!currentAnswer || currentAnswer.toString().trim() === "") {
      alert("Por favor, responda à pergunta antes de continuar.");
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      console.log("Respostas finais coletadas:", answers);
      setIsCompleted(true);
    }
  };

  /* ==========================================================================
    CONTROLE DE ESTADOS COM OS NOVOS COMPONENTES VISUAIS
     ========================================================================== */

  if (isLoading) {
    return (
      <div className={`survey-container ${isDarkMode ? 'dark' : ''}`}>
        <SurveyLoading />
      </div>
    );
  }

  if (hasError || !survey) {
    return (
      <div className={`survey-container ${isDarkMode ? 'dark' : ''}`}>
        <SurveyError onRetry={loadSurvey} />
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className={`survey-container state-completed ${isDarkMode ? 'dark' : ''}`}>
        <h2>Obrigado por responder!</h2>
        <p>Suas respostas ajudam a melhorar nosso serviço.</p>
      </div>
    );
  }

  return (

    <div className={`survey-container ${isDarkMode ? 'dark' : ''}`}>
      
      
      <SurveyHeader 
        title={survey.title} 
        onBack={() => navigate(-1)} 
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      
      <div className="survey-progress-wrapper">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="progress-text">{currentQuestionIndex + 1}/{totalQuestions}</p>
      </div>

      {/* Área: CONTEÚDO DA PERGUNTA (Centralizado pelo Critério 5 - RSP-01) */}
      <main className="survey-card">
        <QuestionCard 
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id]}
          onAnswerChange={(value) => setAnswers({ ...answers, [currentQuestion.id]: value })}
        />
      </main>

      
      <footer className="survey-actions">
        <button onClick={nextQuestion} className="btn-primary">
          {currentQuestionIndex === totalQuestions - 1 ? "Finalizar" : "Continuar"}
        </button>
      </footer>

    </div>
  );
}