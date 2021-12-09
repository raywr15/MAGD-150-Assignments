
var rectX, rectY;      // Position of square button
var circleX, circleY;  // Position of circle button
var rectSize = 20;     // Diameter of rect
var circleSize = 50;   // Diameter of circle
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;
var powerOn = false;
var rx, ry //rect speed
var paused = false;



function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  rectMode(CENTER);
  rectColor = color('#BA210D');
  rectHighlight = color('#FF8C66');
  rectX = 360;
  rectY = 200;
  circleColor = color(50);
  circleHighlight = color(204);
  circleX = 325;
  circleY = 275;
  baseColor = color(0);
  currentColor = baseColor;
   stroke(255);
  rx=40;
  ry=125;
  rxSpeed=1;
  rySpeed=1;
  
}
  
  
function draw() {
  update(mouseX, mouseY);
  background('#00D4FF');
  
  
  //tv
 fill(currentColor);
  stroke(40);
  strokeWeight(10);

  rect(125,175,200,130);
  
  //remote
  noStroke();
  fill(0);
  rect(325, 275,100,200);
  
   
  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  noStroke();
  rect(rectX, rectY, rectSize, rectSize);
  noStroke();
  fill(255);
  textSize(10);
  text('Power', rectX-15, rectY+25);
  
  //power button
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  noStroke();
  fill(255);
  textSize(10);
  text('Play/', circleX-8, circleY+35);
  text('Pause', circleX-12, circleY+45);
  
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(315,260);
  vertex(315,290);
  vertex(340,275);
  vertex(315,260);
  endShape();
  
  if(powerOn && paused){
    rectMode(CENTER)
    fill(0);
    noStroke();
    rect (rx,ry,30,30);
    textSize(8);
    fill(255);
    text('Paused', rx-14, ry);
  rx+= rxSpeed;
  ry+= rySpeed;
  
  if (rx -15<=25 || rx+15 >= 225){
    rxSpeed *= -1;
  }
  
  if (ry-15<=110 || ry+15 >= 240){
    rySpeed *=-1;
  }
  
  }
  
  if(paused == false){
    textSize(30);
    noStroke();
    fill(0);
    text('Price is Right', 35 , 175);
  }
}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    if(powerOn){
    if(paused){
      currentColor = color('#8A0CE8');
      paused =false;
    }else{
      currentColor = color('#004654');
      paused = true;
    }
    }
  }
  if (rectOver) {
    if(powerOn){
      currentColor = color(0);
      powerOn =false;
    }else{
      powerOn = true;
      currentColor = color('#004654');
      paused = true;
    }
    
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

