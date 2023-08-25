let percentegeText = document.querySelector('.percentage-text');
let bg = document.querySelector('.container');
let percentage = 0;
let blurBg = 40;

function increasePercentage() {
    percentage++
    blurBg = blurBg - 0.4;
    if (percentage > 99) {
        clearInterval(idInterval);
    }
    percentegeText.textContent = percentage.toString() + '%';
    bg.style.filter = `blur(${blurBg}px)`;

}
const idInterval = setInterval(increasePercentage, 30);
