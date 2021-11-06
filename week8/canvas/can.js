var canvas = document.getElementById("myCanvas");
var canvasCircle = document.getElementById("myCanvasCircle");
var saveCircle = document.getElementById("demo5");

var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
var gradient = context.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "blue"); 
gradient.addColorStop(1, "white"); 
context.fillStyle = gradient; 
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

circleContext = canvasCircle.getContext("2d");
circleContext.beginPath();
circleContext.arc(100, 100, 50, 0, Math.PI * 2, true);
circleContext.closePath();
circleContext.strokeStyle = "red";
circleContext.fillStyle = "rgb(75,50,50, .6)";
circleContext.lineWidth = 3;
circleContext.fill();
circleContext.stroke();

circleImage = saveCircle.getContext("2d");
circleImage.beginPath();
circleImage.arc(100, 100, 50, 0, Math.PI * 2, true);
circleImage.closePath();
circleImage.strokeStyle = "red";
circleImage.fillStyle = "rgb(75,50,50, .6)";
circleImage.lineWidth = 3;
circleImage.fill();
circleImage.stroke();

function saveDrawing() {
    console.log("In saveDrawing")
    var canvas5 = document.getElementById("demo5");
    var img = canvas5.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);



   