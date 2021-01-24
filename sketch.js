var bg;

function preload() {
 bg=loadImage("bg.png");
}
function setup() {
  createCanvas(800,550);
  angleMode(DEGREES);
}

function draw() {
  background(bg);

  textSize(13);
  fill("black");
  text("When will my master come back?",570,250);

  translate(200,200);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
 noFill();
 stroke(255,0,0);
 let secondAngle = map(sc,0,60,0,360);
 arc(0,0,300,300,0,secondAngle);

 stroke(0,255,0);
 let minuteAngle = map(mn,0,60,0,360);
 arc(0,0,280,280,0,minuteAngle);
 
 stroke(0,0,255);
 let hourAngle = map(hr % 12,0,12,0,360);
 arc(0,0,260,260,0,hourAngle);

 push();
 rotate(secondAngle);
 stroke("red");
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteAngle);
 stroke(0,255,0);
 line(0,0,75,0);
 pop();

 push();
 rotate(hourAngle);
 stroke("blue");
 line(0,0,50,0);
 pop();

 stroke(255);
 point(0,0);
}