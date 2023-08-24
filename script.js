let percentegeHtml = document.querySelector('.percentage-text');
let percentage = 0;

function increasePercentage() {
    percentage++
    percentegeHtml.textContent = percentage;
    console.log(percentage);
}
const idInterval = setInterval(increasePercentage, 300);

setTimeout(function () {
    clearInterval(idInterval);
}, 900);

