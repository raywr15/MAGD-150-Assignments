//This code makes a map of city that shows on both sides of the plane
let x,y,z;
let city = [];
var r,g,b,a;
let count;

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  
  for(let i=0; i < 144; i++){ //This for loop allows for an array to be made for the city
  city.push(new Buildings());
  }
  
  count = 0;
}

function draw() {
  background('#87ceeb');
  orbitControl(5,5,5); //Allow the user to contorl the camera
  

  directionalLight(250, 250, 250, -0.7725, 0.8275, -1);
  ambientLight(50);
  
  normalMaterial();
  push();
  fill('#208643');
  plane(800,800);
  pop();
  
  //Streets
  push();
  fill(0);
  translate(-187.5,0,0);
  box(25,800,1);
  translate(187.5,0,0);
  box(25,800,1);
  translate(187.5,0,0);
  box(25,800,1);
  pop();
  
  push();
  fill(0);
  translate(0,-187.5,0);
  box(800,25,1);
  translate(0,187.5,0);
  box(800,25,1);
  translate(0,187.5,0);
  box(800,25,1);
  pop();
  
  //sets the building to start
  push();
  translate(-300,-300,0);
  pop();
  push();
  translate(-337.5,-337.5,0);
  
  rotateY(90);
  
  for(let i = 0; i < 144; i++){
    if((i) % 12 == 0 && i != 0){
      
      if(i == 36 || i == 72 || i == 108 || i == 144){ //allows the buildings to not be on the horizontal road
        translate(0,100, -770);
      }else{
        translate(0,50, -770);
      }
      
    }
    
    city[i].display();
    if((i+1) % 3 == 0 && i != 0){ //Skips the vetical roads
      translate(0,0,50);
    }
      city[i].move();
    
  }
  pop();
  
  
}

class Buildings {
  
  constructor(){
    this.x = random(-50,450);
    this.y = random(50,700);
    this.speed = 1;
      
  this.r = random(255); // r is a random number between 0 - 255
  this.g = random(0,100); // g is a random number betwen 100 - 200
  this.b = random(255); // b is a random number between 0 - 100
  this.a = random(200,255); // a is a random number between 200 - 255
    
  }
  
  move(){
    translate(0,0,47.5);
    
  }
  
  display(){
  stroke(0);
  fill( this.r,  this.g,  this.b,  this.a);
  box(this.y, 30, 30);
  }
  
}


