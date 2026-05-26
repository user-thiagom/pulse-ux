const pageVariants = {
    initial: {
        opacity: 0,
        y: 15 // Começa um pouco mais abaixo
    },
    animate: {
        opacity: 1,
        y: 0, // Sobe para a posição original
        transition: {
            duration: 0.3, // Rápido e responsivo
            ease: [0.25, 1, 0.5, 1], // Cubic-bezier personalizado para um desacelerar suave (Out-Quart)
        }
    },
    exit: {
        opacity: 0,
        y: -15, // Desaparece subindo levemente
        transition: {
            duration: 0.2, // A saída é ligeiramente mais rápida para não atrasar a próxima tela
            ease: [0.7, 0, 0.84, 0], // Acelera ao sair (In-Quad)
        }
    },
};

const pageTransition = {
    duration: 0.4, // Tempo da transição em segundos
    ease: 'easeInOut',
};

export { pageVariants, pageTransition }