export function validateSurvey(survey) {
    const errors = []

    // título obrigatório
    if (!survey.title.trim()) {
        errors.push({
            field: "title",
            message: "A pesquisa precisa ter um título."
        })
    }

    // pelo menos uma pergunta
    if (survey.questions.length === 0) {
        errors.push({
            field: "questions",
            message: "A pesquisa precisa ter ao menos uma pergunta."
        })
    }

    survey.questions.forEach((question, index) => {
        // texto da pergunta principal
        if (!question.text.trim()) {
            errors.push({
                field: `question-${question.id}`,
                message: `A pergunta ${index + 1} está vazia.`
            })
        }

        if (question.conditional.enabled) {
            // texto obrigatório
            if (!question.conditional.question.text.trim()) {
                errors.push({
                    field: `conditional-${question.id}`,
                    message: `A pergunta condicional da pergunta ${index + 1} está vazia.`
                })
            }

            // operador obrigatório
            const validOperators = ["<", "<=", ">", ">=", "=="]

            if (!validOperators.includes(question.conditional.condition.operator)) {
                errors.push({
                    field: `conditional-operator-${question.id}`,
                    message: `Operador inválido na pergunta ${index + 1}.`
                })
            }

            // valor numérico
            const conditionValue = question.conditional.condition.value

            if (typeof conditionValue !== "number" || Number.isNaN(conditionValue)) {
                errors.push({
                    field: `conditional-value-${question.id}`,
                    message: `Valor inválido na condição da pergunta ${index + 1}.`
                });
            }
        }
    });

    return { isValid: errors.length === 0, errors }
}