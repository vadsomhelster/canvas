const platno = document.getElementById("platno");
const context = platno.getContext('2d');
const clearButton = document.getElementById("clear");
const rainbow = document.getElementById("rainbow");

platno.width = "1200";
platno.height = "800";
context.strokeStyle = "#000";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = "15";

let isDrawing = false;
let startX = 0;
let startY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [startX, startY] = [e.offsetX, e.offsetY];
    if (rainbow.checked) {
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue++;
    } else context.strokeStyle = "#000";
       
}

platno.addEventListener("mousemove", draw);
platno.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [startX, startY] = [e.offsetX, e.offsetY];
});
platno.addEventListener("mouseup", () => isDrawing = false);
platno.addEventListener("mouseout", () => isDrawing = false);

clearButton.addEventListener("click", () => context.clearRect(0, 0, platno.width, platno.height));
