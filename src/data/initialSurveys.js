const initialSurveys = [
    {
        id: "s1",
        title: "Pesquisa de Satisfação - App Mobile",
        description: "Avalie sua experiência no app",
        status: "published",
        insights: false,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: new Date().toISOString(),
        questions: [
            {
                id: "q1",
                text: "Como você avalia o app (1-5)?",
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
                options: [],
                conditional: null
            },
            {
                id: "q1_badge",
                text: "Quais áreas influenciaram sua avaliação? (marque todas)",
                type: "badge",
                options: ["Interface", "Performance", "Funcionalidades", "Atendimento", "Estabilidade"],
                conditional: null
            },
            {
                id: "q1_feedback",
                text: "Comentário aberto",
                type: "text",
                options: [],
                conditional: null
            }
        ],
        responses: [
            {
                id: "r1_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", value: 4 },
                    { questionId: "q1_nps", value: 8 },
                    { questionId: "q1_slider", value: 75 },
                    { questionId: "q1_badge", value: ["Interface", "Funcionalidades"] },
                    { questionId: "q1_feedback", value: "Gostei da interface, poderia melhorar a performance em telas com muitos itens." }
                ]
            },
            {
                id: "r2_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", value: 2 },
                    { questionId: "q1c", value: "App consome muita bateria" },
                    { questionId: "q1_nps", value: 4 },
                    { questionId: "q1_slider", value: 30 },
                    { questionId: "q1_badge", value: ["Performance", "Estabilidade"] },
                    { questionId: "q1_feedback", value: "Travou durante o upload de imagens." }
                ]
            },
            {
                id: "r3_s1",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q1", value: 5 },
                    { questionId: "q1_nps", value: 10 },
                    { questionId: "q1_slider", value: 95 },
                    { questionId: "q1_badge", value: ["Interface", "Estabilidade"] },
                    { questionId: "q1_feedback", value: "Excelente experiência, principalmente após a última atualização." }
                ]
            }
        ]
    },

    {
        id: "s2",
        title: "Pesquisa - Atendimento",
        description: "Avalie nosso suporte",
        status: "published",
        insights: false,
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
                conditional: null
            },
            {
                id: "q2_slider",
                text: "Quanto tempo de espera você considerou aceitável (0-100 onde 0=imediato,100=muito longo)?",
                type: "slider",
                options: [],
                conditional: null
            },
            {
                id: "q2_badge",
                text: "Quais motivos levaram à sua nota? (marque todos)",
                type: "badge",
                options: ["Demora", "Resolução", "Cordialidade", "Conhecimento", "Follow-up"],
                conditional: null
            },
            {
                id: "q2_comment",
                text: "Comentário adicional",
                type: "text",
                options: [],
                conditional: null
            }
        ],
        responses: [
            {
                id: "r1_s2",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q2", value: 7 },
                    { questionId: "q2_csat", value: 4 },
                    { questionId: "q2_slider", value: 40 },
                    { questionId: "q2_badge", value: ["Resolução", "Cordialidade"] },
                    { questionId: "q2_comment", value: "Atendente resolveu meu problema rapidamente." }
                ]
            },
            {
                id: "r2_s2",
                createdAt: new Date().toISOString(),
                answers: [
                    { questionId: "q2", value: 5 },
                    { questionId: "q2c", value: "Não obtive resposta clara" },
                    { questionId: "q2_csat", value: 3 },
                    { questionId: "q2_slider", value: 70 },
                    { questionId: "q2_badge", value: ["Demora", "Follow-up"] },
                    { questionId: "q2_comment", value: "Precisei ligar novamente no dia seguinte." }
                ]
            }
        ]
    },

    {
        id: "s3",
        title: "Pesquisa - Nova Funcionalidade",
        description: "Em desenvolvimento",
        status: "draft",
        insights: false,
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
        insights: false,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        publishedAt: null,
        questions: [],
        responses: []
    }
];

export default initialSurveys;
