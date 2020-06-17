let card = document.querySelector('.card');
//Button
let aboutMeBtn = document.querySelector('.aboutMe')
let backToProfile = document.querySelector('.backToProfile')
// Div's
let cardContent = document.querySelector('.card-content')
let showCard = document.querySelector('.card-back-content')

document.addEventListener('mousemove', function (e) {
    let xAxis = (window.innerWidth / 1 - e.pageX) / 300;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 950;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// document.addEventListener('click', (e) => {
//     console.log('Show Me');
//     cardContent.className="active"
//     showCard.className="inActive"

// })

aboutMeBtn.addEventListener('click', () => {
    showCard.className = "inActive"
    cardContent.className = "active"
})

backToProfile.addEventListener('click', () => {
    showCard.className = "card-back-content"
    cardContent.className = "card-content"
})