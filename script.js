let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const line = new Path2D();
line.moveTo(100, 100);
line.lineTo(200, 100);
line.lineTo(200, 200);
line.lineTo(100, 200);
line.lineTo(100, 100);
context.lineWidth = 3;
context.strokeStyle = "red";
context.stroke(line);

const circle = new Path2D();
circle.arc(300, 300, 25, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill(circle);
