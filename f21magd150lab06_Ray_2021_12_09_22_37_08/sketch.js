/*This code is a simple version of pong but it goes from the top to the bottom so I call it Ping. This game consists of two players controlling the paddles with 'a' and 's' or 'j' and 'k'. 
i made this game myself but I refered to "https://editor.p5js.org/annawasson/sketches/BQFIoo6s2" for the ball collision.
*/

//Ball variables
let rad = 10; 
let xpos, ypos; 
let xspeed = 3; 
let yspeed = 3; 
let xdirection = 1;
let ydirection = 1; 

//paddles
let x1,x2;

//score
let p1Score =0;
let p2Score = 0;

//Detail in the center
let angle = 0;

function setup() {
  createCanvas(600, 500);
  //Directions for the game
  print("Welcome to 1v1 Pong");
  print("Player 1 is the bottom paddle and uses 'w' and 's' to move");
  print("Player 2 is the top paddle and uses 'j' and 'k' to move");
  
  noStroke();
  angleMode(DEGREES);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = height / 2;
  rectMode(CENTER);
  x1= width/2;
  x2=width/2;
  
}

function draw() {
  background(0);
  
  drawArena();
  update();  
  movement();
  
 //ball
  fill('#92C3F0')
  ellipse(xpos, ypos, rad, rad);
  
  //Paddle1
  rect(x1,490,80,8);
  
  
  //Paddle2
  rect(x2,10,80,8);
  
  //Scoreboard and Name
  textSize(60);
  text("P", 10, 150);
  text("I", 10, 225);
  text("N", 10, 315);
  text("G", 10, 385);
  textSize(48);
  text(p2Score, 550, 240);
  text(p1Score, 550, 295);


}

function drawArena(){ //this function adds all the details to the game aka arena
  
  //This push pop makes the rectangles that make it look like a dotted like
  push();
  fill(100,100);
  noStroke();
  let x = 15;
  for(let i = 0; i < 20; i++){
    rect(x,height/2, 30,10);
    translate(40,0);
  }
  pop();
  
  //Center circles of the arena
  fill(0);
  stroke(100,100);
  strokeWeight(5);
  ellipse(width/2,height/2,50);
  scale(1)
  ellipse(width/2,height/2,30);
  noStroke();
  
  //extra detail in the circle
  push();
    translate(width/2, height/2);
    rotate(angle);
    fill(100,100);
    rect(0, 0, 25, 25);
    angle = angle + 1;
  pop();
}

function update(){
    
  // Update the position
  xpos += xspeed * xdirection;
  ypos += yspeed * ydirection;

 //Bounce off walls
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  //top of canvas
  if (ypos + rad > height) {
    ydirection *= -1;
    score(2); //player 2 score
  }
  //bottom of canvas
  if (ypos < rad) {
    ydirection *= -1;
    score(1); //player 1 score
  }
  //bounce of Player 1 paddle
  if((ypos + rad >= 486) && (xpos >= x1 -40 && xpos <= x1 + 40)){
      ydirection *= -1;
  }
  //bounce of Player 2 paddle;
  if((ypos - rad <= 14) && (xpos >= x2 -40 && xpos <= x2 + 40)){
      ydirection *= -1;
  }
}

function movement(){
    
  //p1 movement
  //65 = a
  if (keyIsDown(65)) { // left
    if(x1 -40 >= 0){
      x1 -= 5; 
    }
  }
  //83 = s
  if (keyIsDown(83)) {//right
    if(x1 +40 <= width){
      x1 += 5; 
    }
  }
  
  //p2 movement
  //74=j
  if (keyIsDown(74)) {//left
    if(x2 -40 >= 0){
      x2 -= 5; 
    }
  }
  //75 = k
  if (keyIsDown(75)) {//right
    if(x2 +40 <= width){
      x2 += 5; 
    }
  }
}

function score(playerNum){ 
  //This function is embedded in the update function and keeps scores easier
  if(playerNum == 1){
    print("Player 1 scores!");
    p1Score++;
  }
  if(playerNum == 2){
    print("Player 2 scores!");
    p2Score++;
  }
  print('The Score is P1: ' + p1Score + " P2: " + p2Score);
  

}