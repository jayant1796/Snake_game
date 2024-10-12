let s;
let scl = 20;
let food;
let score = 0;
let snakeImage;
let eatSound;
let bgMusic;

function preload() {

  snakeImage = loadImage('https://images.unsplash.com/photo-1597010741881-2ff50f18e0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNua2V8ZW58MHx8fHwxNjcwNjg2MjM2&ixlib=rb-1.2.1&q=80&w=400');
  eatSound = loadSound('https://www.soundjay.com/button/sounds/button-3.mp3');
  bgMusic = loadSound('https://www.bensound.com/bensound-music/bensound-tomorrow.mp3'); 

function setup() {
  createCanvas(500, 500);
  startGame();
}

function startGame() {
  s = new Snake();
  frameRate(20); 
  pickLocation();
  score = 0;
  updateScore();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(34, 34, 34); 

  if (s.eat(food)) {
    pickLocation();
    score++;
    updateScore();
    eatSound.play(); 
  }

  if (s.death()) {
    startGame(); 
  }

  s.update();
  s.show();


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
