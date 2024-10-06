let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let xC = canvas.width / 2, yC = canvas.width / 2;
let radius = canvas.width / 2 - 2;

function drawCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let circle = new Path2D();
    circle.arc(xC, yC, radius, 0, 2 * Math.PI);
    context.lineWidth = 1;
    context.stroke(circle);
}

function drawLines() {
    for(let i = 0; i < 60; i++) {
        let angle = (i / 60) * 2 * Math.PI;
        let pX = Math.cos(angle) * radius;
        let pY = -Math.sin(angle) * radius;
        let lX = 0.9 * pX;
        let lY = 0.9 * pY;
        pX+=radius;
        pY+=radius;
        lX+=radius;
        lY+=radius;
        let line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(lX, lY);
        if(i % 5 === 0) {
            context.lineWidth = 3;
        }
        context.stroke(line);
        context.lineWidth = 1;
    }
}

function drawHours(hours) {
    let angle = Math.PI / 2 - (hours / 12) * 2 * Math.PI ;
    let pX = Math.cos(angle) * radius * 0.5 + radius;
    let pY = -Math.sin(angle) * radius * 0.5 + radius;
    let line = new Path2D();
    line.moveTo(xC, yC);
    line.lineTo(pX, pY);
    context.lineWidth = 6;
    context.stroke(line);
}

function drawMinutes(minutes) {
    let angle = Math.PI / 2 - (minutes / 60) * 2 * Math.PI ;
    let pX = Math.cos(angle) * radius * 0.7 + radius;
    let pY = -Math.sin(angle) * radius * 0.7 + radius;
    let line = new Path2D();
    line.moveTo(xC, yC);
    line.lineTo(pX, pY);
    context.lineWidth = 3;
    context.stroke(line);
}

function drawSeconds(seconds) {
    let angle = Math.PI / 2 - (seconds / 60) * 2 * Math.PI ;
    let pX = Math.cos(angle) * radius * 0.8 + radius;
    let pY = -Math.sin(angle) * radius * 0.8 + radius;
    let line = new Path2D();
    line.moveTo(xC, yC);
    line.lineTo(pX, pY);
    context.strokeStyle = "red";
    context.stroke(line);
    context.strokeStyle = "black";
}

function drawClocks() {
    let date = new Date();
    console.log(date);
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    drawCircle();
    drawLines();
    drawHours(hours);
    drawMinutes(minutes);
    drawSeconds(seconds);
}


drawClocks();
setInterval(() => drawClocks(), 1000)
