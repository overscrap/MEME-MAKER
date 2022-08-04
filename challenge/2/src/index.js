const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const fill = document.getElementById("fill");
const stroke = document.getElementById("stroke");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;

function startPainting(event){
    isPainting = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
}

function cancelPainting(){
    if(isFilling){
        console.log("isFilling: " +isPainting);
        ctx.fill();
    }else{
        ctx.stroke();
    }
    isPainting = false; 
}
function onColorChange(event){
    const colorValue = event.target.value;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
}
function onModeFillClick(){
    isFilling = true;
}
function onModeStrokeClick(){
    isFilling = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);

color.addEventListener("change", onColorChange);
fill.addEventListener("click", onModeFillClick);
stroke.addEventListener("click", onModeStrokeClick);