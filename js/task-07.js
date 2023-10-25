const fontSizeController = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

fontSizeController.addEventListener('input', () => {
    output.style.fontSize = `${fontSizeController.value}px`;
    output.style.color = getRandomHexColor();
    output.style.transition = `all 300ms cubic-bezier(0.4, 0, 0.2, 0.4)`;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

