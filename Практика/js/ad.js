//Скрип рекламы
const myAd = document.querySelector('#ad-dialog');
const closeAdBtn = document.querySelector('#close-ad-btn');

setTimeout(showAd, 5000);

function showAd(){
    myAd.showModal();
}

closeAdBtn.addEventListener('click', () => {
    myAd.close();
});