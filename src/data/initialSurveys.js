import generateId from "../utils/generateId";
import getRandomIcon from "../utils/randomIcon";
import icon1 from "https://ibb.co/HL4wpLxk";
import icon2 from "https://ibb.co/ccTzPNMc";
import icon3 from "https://ibb.co/twM4FxJ4";
import icon4 from "https://ibb.co/pjw2k1Kz";

const initialSurveys = [
    {
        id: "s1",
        title: "Pesquisa de Satisfação - App Mobile",
        description: "Avalie sua experiência no app",
        icon: icon1,
        status: "published",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: new Date().toISOString(),
        questions: [
            {
                id: "q1",
                text: "Como você avalia o app?",
                type: "csat",
                options: [],
                conditional: {
                    enabled: true,
                    condition: { operator: "<=", value: 3 },
                    question: {
                        id: "q1c",
                        parentId: "q1",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            },
            {
                id: "q1_nps",
                text: "Qual a probabilidade de você recomendar o app (0-10)?",
                type: "nps",
                options: [],
                conditional: {
                    enabled: true,
                    condition: { operator: "<=", value: 6 },
                    question: {
                        id: "q1_nps_c",
                        parentId: "q1_nps",
                        text: "O que poderíamos fazer para melhorar a recomendação?",
                        type: "text"
                    }
                }
            },
            {
                id: "q1_slider",
                text: "Em uma escala de 0 a 100, quão satisfeito você está com a performance do app?",
                type: "slider",
                options: ["Muito difícil", "Muito fácil"],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "<=",
                        value: 30
                    },
                    question: {
                        id: generateId(),
                        parentId: "q1_slider",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            },
            {
                id: "q1_badge",
                text: "Quais áreas influenciaram sua avaliação? (marque todas)",
                type: "badge",
                options: ["Interface", "Performance", "Funcionalidades", "Atendimento", "Estabilidade"],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "<=",
                        value: 0
                    },
                    question: {
                        id: generateId(),
                        parentId: "q1_badge",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            },
            {
                id: "q1_feedback",
                text: "Comentário aberto",
                type: "text",
                options: [],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "==",
                        value: 0
                    },
                    question: {
                        id: generateId(),
                        parentId: "q1_feedback",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            }
        ],
        responses: [
            {
                id: "r1_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", answer: 4, conditionalAnswer: undefined },
                    { questionId: "q1_nps", answer: 8, conditionalAnswer: undefined },
                    { questionId: "q1_slider", answer: 75, conditionalAnswer: undefined },
                    { questionId: "q1_badge", answer: ["Interface", "Funcionalidades"], conditionalAnswer: undefined },
                    { questionId: "q1_feedback", answer: "Gostei da interface, poderia melhorar a performance em telas com muitos itens.", conditionalAnswer: undefined }
                ]
            },
            {
                id: "r2_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", answer: 2, conditionalAnswer: "App consome muita bateria" },
                    { questionId: "q1_nps", answer: 4, conditionalAnswer: undefined },
                    { questionId: "q1_slider", answer: 30, conditionalAnswer: undefined },
                    { questionId: "q1_badge", answer: ["Performance", "Estabilidade"], conditionalAnswer: undefined },
                    { questionId: "q1_feedback", answer: "Travou durante o upload de imagens.", conditionalAnswer: undefined }
                ]
            },
            {
                id: "r3_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", answer: 5, conditionalAnswer: undefined },
                    { questionId: "q1_nps", answer: 10, conditionalAnswer: undefined },
                    { questionId: "q1_slider", answer: 95, conditionalAnswer: undefined },
                    { questionId: "q1_badge", answer: ["Interface", "Estabilidade"], conditionalAnswer: undefined },
                    { questionId: "q1_feedback", answer: "Excelente experiência, principalmente após a última atualização.", conditionalAnswer: undefined }
                ]
            }
        ],
        insights: [
            {
                title: "Média das avaliações",
                description: "A pesquisa mostrou CSAT médio de 3,7, NPS médio de 7,3 e satisfação de performance média de 66,7%.",
                metrics: {
                    csatAvg: 3.67,
                    npsAvg: 7.33,
                    sliderAvg: 66.67
                }
            },
            {
                title: "Interface bem avaliada",
                description: "A interface foi destaque positivo em 2 de 3 respostas e aparece como ponto forte do app.",
                evidence: ["Badge 'Interface' selecionado em 2 respostas", "comentário positivo na experiência após atualização"]
            },
            {
                title: "Performance e estabilidade são prioridades",
                description: "Feedbacks apontam lentidão em telas com muitos itens, consumo de bateria e travamento no upload de imagens.",
                evidence: ["Badge 'Performance'", "Badge 'Estabilidade'", "comentários negativos sobre bateria e upload"]
            },
            {
                title: "Há espaço para reduzir insatisfações",
                description: "Uma resposta com CSAT 2 e NPS 4 trouxe reclamações fortes; isso indica que ajustes em performance/estabilidade podem elevar a satisfação geral.",
                evidence: ["CSAT 2", "NPS 4", "comentário condicional sobre bateria"]
            },
            {
                title: "Oportunidade de melhoria",
                description: "Focar em performance de telas complexas e estabilidade do fluxo de upload deve ajudar a aumentar tanto CSAT quanto NPS.",
                action: "Revisar desempenho em telas com muitos itens e qualidade do upload de mídia"
            }
        ]
    },

    {
        id: "s2",
        title: "Pesquisa - Atendimento",
        description: "Avalie nosso suporte",
        icon: icon2,
        status: "published",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: new Date().toISOString(),
        questions: [
            {
                id: "q2",
                text: "Nota para o atendimento (0-10)",
                type: "nps",
                options: [],
                conditional: {
                    enabled: true,
                    condition: { operator: "<=", value: 6 },
                    question: {
                        id: "q2c",
                        parentId: "q2",
                        text: "O que não foi bom?",
                        type: "text"
                    }
                }
            },
            {
                id: "q2_csat",
                text: "Como você avalia a cordialidade do atendente? (1-5)",
                type: "csat",
                options: [],
                conditional: {
                    enabled: true,
                    condition: { operator: "<=", value: 2 },
                    question: {
                        id: "q2c",
                        parentId: "q2_csat",
                        text: "O que não foi bom?",
                        type: "text"
                    }
                }
            },
            {
                id: "q2_slider",
                text: "Quanto tempo de espera você considerou aceitável (0-100 onde 0=imediato,100=muito longo)?",
                type: "slider",
                options: ["Muito difícil", "Muito fácil"],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "<=",
                        value: 30
                    },
                    question: {
                        id: generateId(),
                        parentId: "q2_slider",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            },
            {
                id: "q2_badge",
                text: "Quais motivos levaram à sua nota? (marque todos)",
                type: "badge",
                options: ["Demora", "Resolução", "Cordialidade", "Conhecimento", "Follow-up"],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "==",
                        value: 0
                    },
                    question: {
                        id: generateId(),
                        parentId: "q2_badge",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            },
            {
                id: "q2_comment",
                text: "Comentário adicional",
                type: "text",
                options: [],
                conditional: {
                    enabled: false,
                    condition: {
                        operator: "==",
                        value: 0
                    },
                    question: {
                        id: generateId(),
                        parentId: "q2_comment",
                        text: "O que podemos melhorar?",
                        type: "text"
                    }
                }
            }
        ],
        responses: [
            {
                id: "r1_s2",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q2", answer: 7, conditionalAnswer: undefined },
                    { questionId: "q2_csat", answer: 4, conditionalAnswer: undefined },
                    { questionId: "q2_slider", answer: 40, conditionalAnswer: undefined },
                    { questionId: "q2_badge", answer: ["Resolução", "Cordialidade"], conditionalAnswer: undefined },
                    { questionId: "q2_comment", answer: "Atendente resolveu meu problema rapidamente.", conditionalAnswer: undefined }
                ]
            },
            {
                id: "r2_s2",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q2", answer: 5, conditionalAnswer: "Não obtive resposta clara" },
                    { questionId: "q2_csat", answer: 3, conditionalAnswer: undefined },
                    { questionId: "q2_slider", answer: 70, conditionalAnswer: undefined },
                    { questionId: "q2_badge", answer: ["Demora", "Follow-up"], conditionalAnswer: undefined },
                    { questionId: "q2_comment", answer: "Precisei ligar novamente no dia seguinte.", conditionalAnswer: undefined }
                ]
            }
        ],
        insights: []
    },

    {
        id: "s3",
        title: "Pesquisa - Nova Funcionalidade",
        description: "Em desenvolvimento",
        icon: icon3,
        status: "draft",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: null,
        questions: [],
        responses: [],
        insights: []
    },

    {
        id: "s4",
        title: "Pesquisa - UX Dashboard",
        description: "Avaliação interna",
        icon: icon4,
        status: "draft",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: null,
        questions: [],
        responses: [],
        insights: []
    }
];

export default initialSurveys;
