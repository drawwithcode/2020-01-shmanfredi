function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('black');
  rectMode(CENTER);

}

function draw() {
  // put drawing code here
  push();
  noFill();
  stroke(lerpColor(color('Cyan'), color('Crimson'), frameCount / 2160));
  strokeWeight(0.01);


  translate (width / 2, height / 2);
  scale(mouseX/200);

  rotate(frameCount/120);
  rect(0, 0, 100, 100);


  if (frameCount == 2520) {
    noLoop();
  }
}
