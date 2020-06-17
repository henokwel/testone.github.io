let card = document.querySelector('.card');

document.addEventListener('mousemove', function (e) {
    let xAxis = (window.innerWidth / 1 - e.pageX) / 1000;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 1000;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});