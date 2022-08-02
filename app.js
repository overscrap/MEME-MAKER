const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);

ctx.fillRect(260, 350, 20, 150);
ctx.fillRect(300, 350, 90, 250);
ctx.fillRect(410, 350, 20, 150);
ctx.arc(345, 250, 80, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(215 + 100, 215, 13, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(275 + 100, 215, 13, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(345, 250, 40, 2 * Math.PI, Math.PI);
ctx.fill();