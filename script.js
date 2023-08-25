let percentegeText = document.querySelector('.percentage-text');
let bg = document.querySelector('.container');
let percentage = 0;
let blurBg = 40;
let opacityPercentText = 1.00;

function increasePercentage() {
    percentage++
    blurBg = blurBg - 0.4;
    opacityPercentText = (opacityPercentText - 0.01).toFixed(2);
    if (percentage > 99) {
        clearInterval(idInterval);
    }
    percentegeText.textContent = percentage.toString() + '%';
    bg.style.filter = `blur(${blurBg}px)`;
    percentegeText.style.opacity = `${opacityPercentText}`;

}
const idInterval = setInterval(increasePercentage, 30);
