let percentegeHtml = document.querySelector('.percentage-text');
let percentage = 0;

function increasePercentage() {
    percentage++
    let percentageText = percentage.toString();
    percentegeHtml.textContent = percentageText + '%';
}
const idInterval = setInterval(increasePercentage, 300);

setTimeout(function () {
    clearInterval(idInterval);
}, 900);

