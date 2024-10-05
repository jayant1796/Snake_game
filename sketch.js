let s;
let scl = 20;
let food;
let score = 0;

function setup() {
  createCanvas(500, 500);
  s = new Snake();
  frameRate(20); // Default frame rate
  pickLocation();
  updateScore();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(34, 34, 34); // Dark background

  if (s.eat(food)) {
    pickLocation();
    score++;
    updateScore();
  }

  s.death();
  s.update();
  s.show();

  // Food with a different color
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed === 0) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed === 0) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed === 0) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed === 0) {
    s.dir(-1, 0);
  }
}

function updateScore() {
  document.getElementById("score").innerHTML = "Score: " + score;
}
