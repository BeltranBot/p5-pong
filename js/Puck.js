function Puck() {
  this.position = createVector(width/2, height/2);
  // this.velocity = createVector(-5,-5);
  this.velocity = createVector(-5,-5);
  this.radius = 13;

  // draws puck
  this.show = function() {
    fill(255);
    ellipse(
      this.position.x,
      this.position.y,
      this.radius*2);
  }

  this.update = function() {
    this.position.add(this.velocity);
  }

  this.reset = function() {
    this.position = createVector(width/2, height/2);
  }

  this.edges = function() {
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }

    if (this.position.x > width) {
      this.reset();
    }

    if (this.position.x < 0) {
      this.reset();
    }
  }

  this.checkCollision = function(paddle) {
    for (var i = 0; i < 8; i++) {
      if (this.checkCollisionPoint(paddle, paddle.position.y + (paddle.paddle_height/2) - (i * paddle.paddle_height/8))) {
        this.velocity.x *= -1;
        this.velocity.y = this.velocity.mag() * sin(radians((i >= 3 && i <= 4) ? 0 : 45 - (15 * i))); // with 8
        // this.velocity.y = this.velocity.mag() * sin(radians(45 - (15 * i)));
        this.velocity.setMag(this.velocity.mag() + 0.5);
        this.velocity.limit(13);
        return true;
      }
    }
    return false;
  }

  this.checkCollisionPoint = function(paddle, height_point) {
    var distance = dist(
      this.position.x, this.position.y,
      paddle.position.x + (paddle.dir * paddle.paddle_width/2),
      height_point);

    return (distance < this.radius + paddle.paddle_width/2) ? true : false;
  }
}
