function Paddle(left) {
  this.position;
  this.paddle_width = 20;
  this.paddle_height = 100;
  this.input_up;
  this.input_down;
  this.yspeed = 10;
  this.dir = (left) ? -1 : 1;

  if (left) {
    this.position = createVector(this.paddle_width, height/2);
    this.input_up = 87;
    this.input_down = 83;
  } else {
    this.position = createVector(width - this.paddle_width, height/2);
    this.input_up = 38;
    this.input_down = 40;
  }


  // draws Paddle
  this.show = function () {
    fill(255);
    rectMode(CENTER);
    rect(
      this.position.x,
      this.position.y,
      this.paddle_width,
      this.paddle_height
    );
  }

  this.move = function(dir) {
    this.position.y += (dir * this.yspeed);
  }

  this.checkInput = function () {
    if (keyIsDown(this.input_up) && this.position.y > this.paddle_height/2) {
      this.move(-1);
    }
    if (keyIsDown(this.input_down) && this.position.y < (height - this.paddle_height/2)) {
      this.move(1);
    }
  }

  // Helper Functions
  this.drawDistanceLinetoPuck = function(puck, color) {
    stroke(color);
    strokeWeight(4);
    line(
      puck.position.x,
      puck.position.y,
      this.position.x,
      this.position.y);
  }

  this.drawTriangletoPuck = function(puck, color) {
    stroke(color);
    strokeWeight(2);
    fill(color);

    triangle(
      puck.position.x, puck.position.y,
      this.position.x - (this.dir * this.paddle_width/2), this.position.y - this.paddle_height/2,
      this.position.x - (this.dir * this.paddle_width/2), this.position.y + this.paddle_height/2
    );

  }
}
