const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {
angle = (angle + 2) % 360;
squareElement.style.transform = `rotate(${angle}deg)`;
}, 1000/60);

const squareElement1 = document.getElementById('square1');
function rotate() {
    angle = (angle + 2)%360;
    squareElement1.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
    