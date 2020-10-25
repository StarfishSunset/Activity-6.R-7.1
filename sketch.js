var balln =[];

function setup() {
  createCanvas(400, 400);

for (let i = 0; i < 2; i++) {
  balln[i] = {
      x: random(width),
      y: random(50),
      dy: 0,
    }
}
}


function draw() {
  background(200);

  balln[0].y += balln[0].dy;
  balln[0].dy += 0.25;
  circle(balln[0].x, balln[0].y, 50);

  balln[1].y += balln[1].dy;
  balln[1].dy += 0.25;
  circle(balln[1].x, balln[1].y, 50);


  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (balln[0].y >= height) {
    balln[0].dy = -0.95 * balln[0].dy;
  }
  if (balln[1].y >= height) {
    balln[1].dy = -0.95 * balln[1].dy;
  }
}