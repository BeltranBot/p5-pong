var puck;
var left_paddle;
var right_paddle;
var skip_collision = false;
var skip_collision_frames = 5;
var skip_collision_counter = 0;


function setup() {
  // put setup code here
  createCanvas(500, 600);
  puck = new Puck();
  left_paddle = new Paddle(true);
  right_paddle = new Paddle(false);

}

function draw() {
  background(0);
  stroke('white');
  noFill();

  left_paddle.checkInput();
  right_paddle.checkInput();

  if (!skip_collision) {
    skip_collision = puck.checkCollision(left_paddle);
    if (!skip_collision) skip_collision = puck.checkCollision(right_paddle);
  } else {
    skip_collision_counter++;
    if (skip_collision_counter == skip_collision_frames) {
      skip_collision = false;
      skip_collision_counter = 0;
    }
  }

  puck.update();
  puck.edges();
  puck.show();

  left_paddle.show();
  right_paddle.show();

  // right_paddle.drawDistanceLinetoPuck(puck, 'green');
  // left_paddle.drawDistanceLinetoPuck(puck, 'red');

  // right_paddle.drawTriangletoPuck(puck, 'green');
  // left_paddle.drawTriangletoPuck(puck, 'red');
}
