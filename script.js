function openLetter() {
    const letter = document.querySelector('.letter-container');
    letter.classList.add('open');
    createHearts();
}

function createHearts() {
    const body = document.querySelector('body');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
