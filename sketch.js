let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);
   
    
  ball.update();
  ball.show();
}

function mouseRelease (){
  let d = dist(ball.pos.x, ball.pos.y, mouseX, mouseY) 
  if (d < ball.w/2)
    let ff = p5.Vector.sub(ball.pos, creareVector(mouseX, mouseY)), ball.pos);
  ff.mult(0.3);
  ball.addforce(ff);
}