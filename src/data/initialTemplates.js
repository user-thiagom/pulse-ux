const initialTemplates = [
  {
    id: 't1',
    title: 'CSAT - Satisfação do Cliente',
    description: 'Meça a satisfação geral do cliente após uma compra ou interação. Perguntas diretas e eficazes.',
    category: 'CSAT',
    status: 'free',
    responseRate: 82,
    popularityRate: 82,
    popularity: 'Extremamente popular',
    validation: {
      rate: 82,
      label: 'Excelente'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't1-q1',
        text: 'Como você avalia sua experiência geral com nosso atendimento?',
        type: 'csat',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '<=', value: 3 },
          question: {
            id: 't1-q1c',
            parentId: 't1-q1',
            text: 'O que podemos melhorar?',
            type: 'text'
          }
        }
      },
      {
        id: 't1-q2',
        text: 'Qual foi o motivo principal da sua avaliação?',
        type: 'badge',
        options: ['Produto', 'Atendimento', 'Entrega', 'Preço', 'Funcionalidade'],
        conditional: {
          enabled: false,
          condition: { operator: '==', value: 0 },
          question: {
            id: 't1-q2c',
            parentId: 't1-q2',
            text: 'Conte mais sobre sua experiência',
            type: 'text'
          }
        }
      }
    ]
  },
  {
    id: 't2',
    title: 'NPS - Net Promoter Score',
    description: 'Descubra a probabilidade de seus clientes recomendarem sua marca. Template validado por milhares de empresas.',
    category: 'NPS',
    status: 'free',
    responseRate: 78,
    popularityRate: 78,
    popularity: 'Extremamente popular',
    validation: {
      rate: 78,
      label: 'Excelente'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't2-q1',
        text: 'Em uma escala de 0 a 10, qual a probabilidade de você recomendar nossa marca?',
        type: 'nps',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '<=', value: 6 },
          question: {
            id: 't2-q1c',
            parentId: 't2-q1',
            text: 'O que podemos fazer para melhorar sua experiência?',
            type: 'text'
          }
        }
      },
      {
        id: 't2-q2',
        text: 'O que você mais gostou em nosso produto ou serviço?',
        type: 'text',
        options: [],
        conditional: {
          enabled: false,
          condition: { operator: '==', value: 0 },
          question: {
            id: 't2-q2c',
            parentId: 't2-q2',
            text: 'Como podemos deixá-lo ainda melhor?',
            type: 'text'
          }
        }
      }
    ]
  },
  {
    id: 't3',
    title: 'CES - Customer Effort Score',
    description: 'Avalie o esforço necessário para resolver um problema. Ideal para times de suporte e atendimento.',
    category: 'CES',
    status: 'pro',
    responseRate: 75,
    popularityRate: 68,
    popularity: 'Popular',
    validation: {
      rate: 75,
      label: 'Excelente'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't3-q1',
        text: 'Quanto esforço você precisou para resolver seu último problema?',
        type: 'ces',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '>=', value: 4 },
          question: {
            id: 't3-q1c',
            parentId: 't3-q1',
            text: 'O que tornou essa experiência mais difícil do que deveria?',
            type: 'text'
          }
        }
      }
    ]
  },
  {
    id: 't4',
    title: 'Pós-Compra E-commerce',
    description: 'Pesquisa completa para entender a experiência de compra online. Inclui entrega, produto e atendimento.',
    category: 'E-commerce',
    status: 'free',
    responseRate: 73,
    popularityRate: 73,
    popularity: 'Bom',
    validation: {
      rate: 73,
      label: 'Bom'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't4-q1',
        text: 'Como você avalia o processo de compra em nosso site?',
        type: 'csat',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '<=', value: 3 },
          question: {
            id: 't4-q1c',
            parentId: 't4-q1',
            text: 'Quais partes do processo precisam ser melhoradas?',
            type: 'text'
          }
        }
      },
      {
        id: 't4-q2',
        text: 'O produto atendeu às suas expectativas?',
        type: 'badge',
        options: ['Sim', 'Parcialmente', 'Não'],
        conditional: {
          enabled: false,
          condition: { operator: '==', value: 0 },
          question: {
            id: 't4-q2c',
            parentId: 't4-q2',
            text: 'Conte mais sobre o motivo da sua escolha',
            type: 'text'
          }
        }
      }
    ]
  },
  {
    id: 't5',
    title: 'Pesquisa de Suporte ao Cliente',
    description: 'Entenda a qualidade do atendimento e identifique oportunidades de melhoria no suporte.',
    category: 'Atendimento',
    status: 'free',
    responseRate: 79,
    popularityRate: 79,
    popularity: 'Muito popular',
    validation: {
      rate: 79,
      label: 'Excelente'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't5-q1',
        text: 'Como você avalia o tempo de resposta do nosso suporte?',
        type: 'csat',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '<=', value: 3 },
          question: {
            id: 't5-q1c',
            parentId: 't5-q1',
            text: 'O que podemos fazer para responder mais rápido?',
            type: 'text'
          }
        }
      },
      {
        id: 't5-q2',
        text: 'O atendimento resolveu seu problema com clareza?',
        type: 'badge',
        options: ['Sim', 'Parcialmente', 'Não'],
        conditional: {
          enabled: false,
          condition: { operator: '==', value: 0 },
          question: {
            id: 't5-q2c',
            parentId: 't5-q2',
            text: 'O que não ficou claro em nosso atendimento?',
            type: 'text'
          }
        }
      }
    ]
  },
  {
    id: 't6',
    title: 'Feedback de Produto',
    description: 'Avalie a aceitação de novas funcionalidades, usabilidade e qualidade do produto.',
    category: 'Produto',
    status: 'free',
    responseRate: 69,
    popularityRate: 70,
    popularity: 'Popular',
    validation: {
      rate: 69,
      label: 'Bom'
    },
    createdAt: new Date().toISOString(),
    updatedAt: null,
    publishedAt: new Date().toISOString(),
    questions: [
      {
        id: 't6-q1',
        text: 'Como você avalia a facilidade de uso do produto?',
        type: 'slider',
        options: ['Muito difícil', 'Muito fácil'],
        conditional: {
          enabled: false,
          condition: { operator: '<=', value: 30 },
          question: {
            id: 't6-q1c',
            parentId: 't6-q1',
            text: 'O que você mudaria na interface?',
            type: 'text'
          }
        }
      },
      {
        id: 't6-q2',
        text: 'Quão satisfeito você está com as funcionalidades atuais?',
        type: 'csat',
        options: [],
        conditional: {
          enabled: true,
          condition: { operator: '<=', value: 3 },
          question: {
            id: 't6-q2c',
            parentId: 't6-q2',
            text: 'O que poderia melhorar nas funcionalidades?',
            type: 'text'
          }
        }
      }
    ]
  }
];

export default initialTemplates;
