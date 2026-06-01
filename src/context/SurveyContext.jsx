import { createContext, useContext, useEffect, useState } from "react";
import initialSurveys from '../data/initialSurveys.js'
import { validateSurvey } from "../utils/validateSurvey.js";
import getRandomIcon from "../utils/randomIcon.js";
import generateId from "../utils/generateId.js";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
    const [surveys, setSurveys] = useState([]);


    useEffect(() => {
        try {
            const stored = localStorage.getItem("pulseux_surveys")
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    console.log(parsed)
                    setSurveys(parsed);
                    return
                }
            } else {
                setSurveys(initialSurveys);
                localStorage.setItem(
                    "pulseux_surveys",
                    JSON.stringify(initialSurveys)
                );
            }

        } catch {
            setSurveys(initialSurveys)
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("pulseux_surveys", JSON.stringify(surveys));
    }, [surveys]);

    function createSurvey() {
        const newSurvey = {
            id: generateId(),
            title: "Nova pesquisa",
            description: "",
            icon: getRandomIcon(),
            status: "draft",
            createdAt: new Date().toISOString(),
            updatedAt: null,
            publishedAt: null,
            questions: [],
            responses: [],
            insights: [],
        };

        setSurveys(prev => [newSurvey, ...prev]);
        return newSurvey.id;
    }


    function updateSurvey(id, data) {
        setSurveys(prev =>
            prev.map(s => {
                return s.id === id ? { ...s, ...data, updatedAt: new Date().toISOString() } : s;
            })
        );
    }

    //Deletar uma pesquisa por id - Thiago
    function deleteSurvey(id) {
        setSurveys(prev =>
            prev.filter(s => s.id !== id)
        )
    }

    //Publicar pesquisa - Thiago
    function publishSurvey(id) {
        setSurveys(prev =>
            prev.map(s => {
                if (s.id !== id) {
                    return s
                }else {
                    if (s.questions.length == 0) {
                        console.warn("Não é possível publicar sem perguntas")
                        return s
                    }

                    console.log("cheguou aqui")
                    return { ...s, status: "published", updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString() }
                }
            })
        )
    }

    function getSurveyById(id) {
        return surveys.find(s => s.id === id) || null;
    }

    function getRecentSurveys() {
        const recentSurveys = surveys.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3)
        return recentSurveys
    }


    function getSurveys() {
        return surveys
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
                    value: 3
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
            prev.map(s => {
                if (s.id === surveyId && s.status === "published") {
                    console.warn("Pesquisa publicada não pode ser editada.");
                    return s;
                }

                return s.id === surveyId
                    ? { ...s, questions: [...(s.questions || []), newQuestion], updatedAt: new Date().toISOString() }
                    : s;
            })
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
                deleteSurvey,
                publishSurvey,
                getSurveyById,
                getRecentSurveys,
                getSurveys,

                addQuestion,
                updateQuestion,
                removeQuestion,

                addResponse,
                generateId
            }}
        >
            {children}
        </SurveyContext.Provider>
    );
}

export function useSurvey() {
    return useContext(SurveyContext);
}



