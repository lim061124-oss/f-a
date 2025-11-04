let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  if(mouseIsPressd)
    let wind = createVector(0, 0.1)
  ball.addForce(wind)

  ball.update();
  ball.show();
}
