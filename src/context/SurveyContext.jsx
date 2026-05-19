import { createContext, useContext, useEffect, useState } from "react";
import initialSurveys from '../data/initialSurveys.js'

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
    const [surveys, setSurveys] = useState([]);

    
    useEffect(() => {
        try {
            const stored = localStorage.getItem("pulseux_surveys")
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setSurveys(parsed);
                    return
                }
            }

            setSurveys(initialSurveys);
            
            localStorage.setItem(
                "pulseux_surveys",
                JSON.stringify(initialSurveys)
            );

        } catch {
            setSurveys(initialSurveys)
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem("pulseux_surveys", JSON.stringify(surveys));
    }, [surveys]);

    
    function generateId() {
        return crypto.randomUUID();
    }

    
    
    

    
    function createSurvey() {
        const newSurvey = {
            id: generateId(),
            title: "Nova pesquisa",
            description: "",
            status: "draft",
            createdAt: new Date().toISOString(),
            updatedAt: null,
            publishedAt: null,
            questions: [],
            responses: []
        };

        setSurveys(prev => [newSurvey, ...prev]);

        return newSurvey.id;
    }

    
    function updateSurvey(id, data) {
        setSurveys(prev =>
            prev.map(s => (s.id === id ? { ...s, ...data, updatedAt: new Date().toISOString() } : s))
        );
    }

    
    function publishSurvey(id) {
        setSurveys(prev =>
            prev.map(s => {
                if (s.id !== id) return s;

                if (!s.questions.length) {
                    console.warn("Não é possível publicar sem perguntas");
                    return s;
                }

                return { ...s, status: "published", updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString() };
            })
        );
    }

    
    function getSurveyById(id) {
        return surveys.find(s => s.id === id) || null;
    }

    
    
    

    
    function addQuestion(surveyId) {
        
        const questionId = generateId()
        const newQuestion = {
            id: questionId,
            text: "",
            type: "csat", 
            options: [],
            conditional: {
                enabled: false,
                condition: {
                    operator: "<=",
                    value: 6
                },
                question: {
                    id: generateId(),
                    parentId: questionId,
                    text: "O que podemos melhorar?",
                    type: "text"
                }
            }
        };

        setSurveys(prev =>
            prev.map(s =>
                s.id === surveyId
                    ? { ...s, questions: [...s.questions, newQuestion], updatedAt: new Date().toISOString() }
                    : s
            )
        );
    }

    
    function updateQuestion(surveyId, questionId, data) {
        setSurveys(prev =>
            prev.map(s =>
                s.id === surveyId
                    ? {
                        ...s,
                        questions: s.questions.map(q =>
                            q.id === questionId ? { ...q, ...data } : q
                        ),
                        updatedAt: new Date().toISOString()
                    }
                    : s
            )
        );
    }

    
    function removeQuestion(surveyId, questionId) {
        setSurveys(prev =>
            prev.map(s =>
                s.id === surveyId
                    ? {
                        ...s,
                        questions: s.questions.filter(q => q.id !== questionId),
                        updatedAt: new Date().toISOString()
                    }
                    : s
            )
        );
    }

    
    
    

    
    function addResponse(surveyId, response) {
        if (!response || !response.answers) {
            console.warn("Resposta inválida");
            return;
        }

        setSurveys(prev =>
            prev.map(s =>
                s.id === surveyId
                    ? {
                        ...s,
                        responses: [...(s.responses || []), response]
                    }
                    : s
            )
        );
    }

    
    
    

    return (
        <SurveyContext.Provider
            value={{
                surveys,

                createSurvey,
                updateSurvey,
                publishSurvey,
                getSurveyById,

                addQuestion,
                updateQuestion,
                removeQuestion,

                addResponse
            }}
        >
            {children}
        </SurveyContext.Provider>
    );
}

export function useSurvey() {
    return useContext(SurveyContext);
}



