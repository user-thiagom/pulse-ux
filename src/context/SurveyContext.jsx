import { createContext, useContext, useEffect, useState } from "react";
import initialSurveys from '../data/initialSurveys.js'
import { validateSurvey } from "../utils/validateSurvey.js";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
    const [surveys, setSurveys] = useState([]);

    //Carrega as informações armazenadas no localstate - Thiago
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

    //Salvar no localStorage - Thiago
    useEffect(() => {
        localStorage.setItem("pulseux_surveys", JSON.stringify(surveys));
    }, [surveys]);

    //Gerador de id - Thiago
    function generateId() {
        return crypto.randomUUID();
    }

    // ======================
    // Pesquisas
    // ======================

    //Criar pesquisas - Thiago
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

    //Atualizar pesquisas - Thiago
    function updateSurvey(id, data) {
        setSurveys(prev =>
            prev.map(s => {
                if (s.status === "published") {
                    console.warn("Pesquisa publicada não pode ser editada.");
                    return s;
                }

                (s.id === id ? { ...s, ...data, updatedAt: new Date().toISOString() } : s)
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
        let published = false;

        setSurveys(prev =>
            prev.map(s => {
                const validation = validateSurvey(s)

                if (!validation.isValid) {
                    console.warn(validation.errors)
                    return s
                }

                if (s.status === "published") {
                    console.warn("Esta pesquisa já está publicada");
                    return s;
                }

                if (s.id !== id) return s

                if (!s.questions.length) {
                    console.warn("Não é possível publicar sem perguntas")
                    return s
                }

                published = true

                return { ...s, status: "published", updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString() }
            })
        )

        return published
    }

    //Retornar pesquisa por id - Thiago
    function getSurveyById(id) {
        return surveys.find(s => s.id === id) || null;
    }

    // ======================
    // Perguntas da pesquisa
    // ======================

    //Adicionar pesquisa - Thiago
    function addQuestion(surveyId) {
        //por padrão, a pesquisa vai iniciar nesse formato, porém poderá ser alterada - Thiago
        const questionId = generateId()
        const newQuestion = {
            id: questionId,
            text: "",
            type: "csat", //ou csat, slider, radiogroup, text
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
                if (s.status === "published") {
                    console.warn("Pesquisa publicada não pode ser editada.");
                    return s;
                }

                s.id === surveyId
                    ? { ...s, questions: [...s.questions, newQuestion], updatedAt: new Date().toISOString() }
                    : s
            }
            )
        );
    }

    //Atualizar pergunta - Thiago
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

    //Remover pergunta - Thiago
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

    // ======================
    // Respostas
    // ======================

    //Adicionar resposta à pesquisa - Thiago
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

    // ======================
    // PROVIDER
    // ======================

    return (
        <SurveyContext.Provider
            value={{
                surveys,

                createSurvey,
                updateSurvey,
                deleteSurvey,
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

/* ESTRUTURA DE DADOS DA RESPOSTA

  {
    id: "resp1",
    createdAt: "2026-05-06T12:00:00Z",
    answers: [
      {
        questionId: "q1",
        value: 8
      },
      {
        questionId: "q2",
        value: "Muito bom, mas pode melhorar"
      }
    ]
  }
*/

/*  ESTRUTURA DE DADOS DE OPTIONS (ex)
    options: [
  {
    id: "opt1",
    label: "Dashboard",
    value: "dashboard"
  },
  {
    id: "opt2",
    label: "Relatórios",
    value: "relatorios"
  }
]
*/