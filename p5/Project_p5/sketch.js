let counter = 0;
let trail = [];

function setup() {
  // put setup code here
  createCanvas(710, 400);
  //noStroke();
  fill(255, 204, 0);
  background(0);

  d = height/2;


}
function draw() {
 //background(0);
  background("rgba(4,1,2,0.01)");
  
  let y = (sin(counter) * 100) + height/2;
  let x = (cos(counter) * 100)+ width/2;
  ellipse(x, y, 20, 20);
text("HAVE FUN ",width-80, height-40);
  counter += 0.05;
trail.push(createVector(mouseX, mouseY));

if (trail.length > 25) {
  trail.shift();
}

for (let i = 0; i < trail.length; i++) {
const curr = trail[i];
circle (curr.x, curr.y, i);

}


}