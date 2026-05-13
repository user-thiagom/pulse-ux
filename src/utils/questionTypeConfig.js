export const QUESTION_TYPE_CONFIG = {
    csat: {
        label: "Estrelas (CSAT)",
        description: "Escala visual de 1 a 5 estrelas onde o usuário clica para avaliar a qualidade de um atendimento ou produto, ideal para medir a satisfação imediata de forma intuitiva e universal.",
        animationSrc: "https://lottie.host/embed/6ed864e5-b911-4e91-880a-e0c15910ecc4/gmqzk6EiCc.lottie",
        condition: {
            min: 1,
            max: 5,
            step: 1
        }
    },

    slider: {
        label: "Slider",
        description: "Barra deslizante onde o usuário arrasta um indicador para definir uma nota ou valor (de 0 a 100), ideal para avaliar o nível de satisfação de forma rápida e visual.",
        animationSrc: "https://lottie.host/embed/0177f123-ae92-45f1-987e-369c0b80bf95/gfjxvzE6rL.lottie",
        condition: {
            min: 0,
            max: 100,
            step: 1
        }
    },

    nps: {
        label: "NPS (Radio's)",
        description: "Linha de botões numerais de 0 a 10, onde o usuário clica em uma única opção para indicar a probabilidade de recomendar sua empresa. É o formato padrão e mais reconhecido para calcular a lealdade do cliente.",
        animationSrc: "https://lottie.host/embed/95420949-f3fb-4b98-8b9a-5afcbc5d28b5/rj6ZkbAHRc.lottie",
        condition: {
            min: 0,
            max: 10,
            step: 1
        }
    },

    text: {
        label: "Caixa de texto",
        description: "Resposta aberta",
        animationSrc: "https://lottie.host/embed/77b894c9-a4cc-4b7a-a7dd-27816961d9ee/Fx2Yxjws8e.lottie",
        condition: null
    },

    badge: {
        label: "Badges/Chips",
        description: "Etiquetas clicáveis que funcionam como caixas de seleção, permitindo ao usuário marcar um ou mais motivos ou sentimentos simultaneamente para detalhar o porquê da sua nota.",
        animationSrc: "https://lottie.host/embed/81aaedbf-02fa-46f4-81ec-5e2d0ae2259f/5vCK0M90q2.lottie",
        condition: null
    }
};