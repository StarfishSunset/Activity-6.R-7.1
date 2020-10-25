var balln =[];

function setup() {
  createCanvas(400, 400);

  let r = random(0, 255);
  let g =random(0, 255);
  let b = random(0, 255);

for (let i = 0; i < 2; i++) {
  balln[i] = {
      x: random(20),
      y: random(height),
      dx: random(-3, 3),
    }
    fill(r, g, b)
}
}
function draw() {
  background(200);

  balln[0].x += balln[0].dx;
  balln[0].dx += 0.25;
  circle(balln[0].x, balln[0].y, 50);

  balln[1].x += balln[1].dx;
  balln[1].dx += 0.25;
  rect(balln[1].x, balln[1].y, 50);

  // if the object hits the bottom of the canvas
  // make it go up instead of down

  if (balln[0].x >= width) {
    balln[0].dx = -0.97 * balln[0].dx;
  }
  if (balln[1].x >= width) {
    balln[1].dx = -0.97 * balln[1].dx;
  }
}