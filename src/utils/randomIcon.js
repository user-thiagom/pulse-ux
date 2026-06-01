function getRandomIcon() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return `src/assets/icons/icon${randomNumber}.svg`
}

export default getRandomIcon