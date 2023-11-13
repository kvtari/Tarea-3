/*
   Estrellas de Recursión
*/

let numPointsSlider, numPoints;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 255, 0, 150); // Amarillo transparente

  // Crear un control deslizante para ajustar el número de puntas de la estrella
  numPointsSlider = createSlider(5, 20, 5, 1);
  numPointsSlider.position(20, 20);
  numPointsSlider.changed(updateNumPoints);

  noLoop();
}

function draw() {
  background(0); // Fondo negro para resaltar las estrellas
  numPoints = numPointsSlider.value();
  drawStar(width / 2, height / 2, numPoints, 200); // Dibuja una estrella en el centro
}

function drawStar(x, y, numPoints, radius) {
  beginShape();
  for (let i = 0; i < numPoints * 2; i++) {
    let angle = map(i, 0, numPoints * 2, 0, TWO_PI);
    let r = radius * (i % 2 === 0 ? 0.5 : 1); // Ajusta el radio para los puntos pares
    let sx = x + cos(angle) * r;
    let sy = y + sin(angle) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function updateNumPoints() {
  redraw(); // Redibuja cuando se cambia el número de puntas
}




