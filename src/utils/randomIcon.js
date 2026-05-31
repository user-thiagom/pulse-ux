function getRandomIcon() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return `src/assets/icons/icon${randomNumber}.svg`
}

export default getRandomIcon