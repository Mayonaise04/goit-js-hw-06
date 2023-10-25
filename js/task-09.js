function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgChange = document.querySelector('.widget');
const bgBtn = document.querySelector('.change-color');

bgBtn.addEventListener('click', () => {
  const bgHex = document.querySelector('.color');
  const bgDoc = document.querySelector('body');
  const randomColor = getRandomHexColor();
  bgDoc.style.backgroundColor = randomColor;
  bgDoc.style.transition = 'background-color 300 ms cubic-bezier(0.8, 0,0.4, 1)';
  bgHex.textContent = randomColor;
});