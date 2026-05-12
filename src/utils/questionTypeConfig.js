export const QUESTION_TYPE_CONFIG = {

    csat: {

        label: "Estrelas (CSAT)",

        condition: {

            min: 0,
            max: 5,
            step: 1
        }
    },

    slider: {

        label: "Slider",

        condition: {

            min: 0,
            max: 100,
            step: 1
        }
    },

    nps: {

        label: "NPS (Radio's)",

        condition: {

            min: 0,
            max: 10,
            step: 1
        }
    },

    text: {

        label: "Caixa de texto",

        condition: null
    }
};