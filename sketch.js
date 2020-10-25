var balln =[];

function setup() {
  createCanvas(400, 400);

for (let i = 0; i < 2; i++) {
  balln[i] = {
      x: random(50),
      y: random(height),
      dx: 0,
    }
}
}

function draw() {
  background(200);

  balln[0].x += balln[0].dy;
  balln[0].dx += 0.25;
  circle(balln[0].x, balln[0].y, 50);

  balln[1].x += balln[1].dx;
  balln[1].dx += 0.25;
  circle(balln[1].x, balln[1].y, 50);


  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (balln[0].x >= width) {
    balln[0].dx = -0.95 * balln[0].dx;
  }
  if (balln[1].x >= width) {
    balln[1].dx = -0.95 * balln[1].dx;
  }
}