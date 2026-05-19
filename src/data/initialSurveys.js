
const initialSurveys = [
    {
        id: "s1",
        title: "Pesquisa de Satisfação - App Mobile",
        description: "Avalie sua experiência no app",
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
            }
        ],
        responses: [
            {
                id: "r1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", value: 2 },
                    { questionId: "q1c", value: "App lento" }
                ]
            }
        ]
    },

    {
        id: "s2",
        title: "Pesquisa - Atendimento",
        description: "Avalie nosso suporte",
        status: "published",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: new Date().toISOString(),
        questions: [
            {
                id: "q2",
                text: "Nota para o atendimento",
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
            }
        ],
        responses: [
            {
                id: "r2",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q2", value: 5 },
                    { questionId: "q2c", value: "Demora no atendimento" }
                ]
            }
        ]
    },

    {
        id: "s3",
        title: "Pesquisa - Nova Funcionalidade",
        description: "Em desenvolvimento",
        status: "draft",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: null,
        questions: [],
        responses: []
    },

    {
        id: "s4",
        title: "Pesquisa - UX Dashboard",
        description: "Avaliação interna",
        status: "draft",
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: null,
        questions: [],
        responses: []
    }
];

export default initialSurveys;
