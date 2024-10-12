function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.death = function () {

    if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height) {
      console.log("Game Over! Starting over...");
      return true;
    }


    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log("Game Over! Starting over...");
        return true;
      }
    }
    return false; 
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;


    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = function () {
   
    for (let i = 0; i < this.tail.length; i++) {
      image(snakeImage, this.tail[i].x, this.tail[i].y, scl, scl);
    }
    image(snakeImage, this.x, this.y, scl, scl); 
  };
}
