import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SurveyHeader from './components/SurveyHeader';
import QuestionCard from './components/QuestionCard';
import SurveyLoading from './components/SurveyLoading';
import SurveyError from './components/SurveyError';
import SurveySuccess from './components/SurveySuccess';
import './styles.css';
import { useSurvey } from '../../context/SurveyContext';
import generateId from '../../utils/generateId';

// const getSurveyById = async (id) => {
//   await new Promise((resolve) => setTimeout(resolve, 1200)); 
  
//   if (id === "error") {
//     throw new Error("Pesquisa não encontrada");
//   }

//   return {
//     id,
//     title: "Pesquisa de Satisfação",
//     questions: [
//       { 
//         id: 1, 
//         type: "slider", 
//         text: "Quão fácil foi usar nosso produto?", 
//         minLabel: "Difícil", 
//         maxLabel: "Muito fácil",
//         conditional: {
//           value: 50,
//           text: "O que podemos melhorar?",
//         }
//       },
//       { id: 2, type: "rating", text: "Qual é o seu nível de satisfação com nosso serviço?" },
//       { id: 3, type: "nps", text: "Em uma escala de 0 a 10, o quanto você recomendaria nossa empresa para um amigo?" },
//       { id: 4, type: "multiple_choice", text: "Qual recurso você mais utiliza?", options: ["Dashboard", "Relatórios", "Criador de Pesquisas", "Configurações"] },
//       { id: 5, type: "text", text: "Deixe seus comentários finais:" }
//     ]
//   };
// };

export default function RespondSurveyPage() {
  const { getSurveyById, addResponse } = useSurvey();
  const { id } = useParams();
  const navigate = useNavigate();
  const currentSurveyId = id || "s1";

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [surveyResponses, setSurveyResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [survey, setSurvey] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const loadSurvey = async () => {
    const startTime = Date.now();
    const minLoadingMs = 2000;

    try {
      setIsLoading(true);
      setHasError(false);

      if (localStorage.getItem(`survey_completed_${currentSurveyId}`)) {
        setIsCompleted(true);
        return;
      }
      
      const data = getSurveyById(currentSurveyId);
      
      if (!data || !data.questions || data.questions.length === 0) {
        setHasError(true);
      } else {
        setSurvey(data);
      }
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      const elapsed = Date.now() - startTime;
      const remaining = minLoadingMs - elapsed;
      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSurvey();
  }, [id]);

  const totalQuestions = survey?.questions.length || 0;
  const currentQuestion = survey?.questions[currentQuestionIndex];
  const progressPercent = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const currentResponse = surveyResponses.find(r => r.questionId === currentQuestion?.id) || {
    questionId: currentQuestion?.id,
    answer: undefined,
    conditionalAnswer: undefined
  };

  const handleAnswerChange = (value) => {
    setSurveyResponses(prev => {
      const filtered = prev.filter(r => r.questionId !== currentQuestion.id);
      return [...filtered, { ...currentResponse, answer: value }];
    });
  };

  const handleConditionalAnswerChange = (value) => {
    setSurveyResponses(prev => {
      const filtered = prev.filter(r => r.questionId !== currentQuestion.id);
      return [...filtered, { ...currentResponse, conditionalAnswer: value }];
    });
  };

  function isConditionalActive(currentResponse, currentQuestion) {
    if (currentQuestion.conditional.condition.operator == "<=")
      return currentResponse <= currentQuestion.conditional.condition.value

    if (currentQuestion.conditional.condition.operator == "<")
      return currentResponse < currentQuestion.conditional.condition.value

    if (currentQuestion.conditional.condition.operator == "==")
      return currentResponse == currentQuestion.conditional.condition.value
    
    if (currentQuestion.conditional.condition.operator == ">")
      return currentResponse > currentQuestion.conditional.condition.value
    
    if (currentQuestion.conditional.condition.operator == ">=")
      return currentResponse >= currentQuestion.conditional.condition.value

    return false
  }

  const nextQuestion = () => {
    if (currentResponse.answer === undefined || currentResponse.answer === null || currentResponse.answer.toString().trim() === "") {
      alert("Por favor, responda à pergunta antes de continuar.");
      return;
    }

    const hasActiveConditional = currentQuestion.conditional.enabled && isConditionalActive(currentResponse.answer, currentQuestion)
    if (hasActiveConditional) {
      if (!currentResponse.conditionalAnswer || currentResponse.conditionalAnswer.toString().trim() === "") {
        alert("Por favor, preencha o campo de opinião complementar.");
        return;
      }
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      localStorage.setItem(`survey_completed_${currentSurveyId}`, "true");

      const response = {
        id: generateId(),
        createdAt: new Date().toISOString(),
        answers: surveyResponses
      }
  
      addResponse(id, surveyResponses)
      setIsCompleted(true);
    }
  };

  if (isLoading) {
    return (
      <div className={`survey-container-respond ${isDarkMode ? 'dark' : ''}`}>
        <SurveyLoading />
      </div>
    );
  }

  if (hasError || !survey) {
    return (
      <div className={`survey-container-respond ${isDarkMode ? 'dark' : ''}`}>
        <SurveyError onRetry={loadSurvey} />
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className={`survey-container-respond ${isDarkMode ? 'dark' : ''}`}>
        <SurveySuccess />
      </div>
    );
  }

  return (
    <div className={`survey-container-respond ${isDarkMode ? 'dark' : ''}`}>
      
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

      <main className="survey-card-respond">
        <QuestionCard 
          question={currentQuestion}
          currentAnswer={currentResponse.answer}
          onAnswerChange={handleAnswerChange}
          conditionalAnswer={currentResponse.conditionalAnswer}
          onConditionalAnswerChange={handleConditionalAnswerChange}
          isConditionalActive={isConditionalActive}
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