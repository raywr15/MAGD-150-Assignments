/*In this poster I made my own revenge of the sith poster where it shows the light and dark side of the chosen one. This is displayed by being on one side of the lightsaber.
*/

var skywalker, vader, saber, starJediBubble, starJediNormal, start, pdf;

//Preloads the txt,string,fonts,&images I use
function preload(){
   skywalker = loadImage("Skywalker.png");
  vader = loadImage("darthVader.jpg");
  saber = loadImage("light.jpg");
  
  starJediBubble = loadFont('StarJediLogoMonoline-6nGg.ttf');
  starJediNormal = loadFont('StarJediLogoDoubleline1-z0e0.ttf');
   start = loadStrings("Revenge of the sith start.txt");
}

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER);
  
  //Filter makes a slight difference in the light of the picture
  skywalker.filter(ERODE);
  
  //Allows the pdf to start and indicate that you simply save it
  pdf = createPDF();
  pdf.beginRecord();
  print("Click on the poster to save");
}

function draw() {
  background(0);
 /*The interactivity of this poster is done on being one side of the light saber. Either light or dark and is shown through Anakin Skywalker and Darth Vader. */
  if(mouseX < width/2){
    image(saber, 0, 50, width, height-150);
    image(skywalker, 35, 200, 120, 100);
    fill('#002395');
    textFont(starJediNormal);
    textSize(24);
    text("Anakin", 95, 180);
    textSize(24);
    text("Skywalker", 95, 350);
  }else{
    push();
    tint(256, 0, 10); ///Allows the lightsaber to be red
    image(saber, 0, 50, width, height-150);
    pop();
    image(vader, 235, 200, 120, 120);
    fill(235,33,46);
    textFont(starJediNormal);
    textSize(24);
    text("Darth", 295, 180);
    textSize(24);
    text("vader", 295, 350);
  }
  
  fill('#f9d71c');
  textFont(starJediBubble);
  textSize(30);
  text("Revenge of the Sith", width/2, 35);
  
  
  //This string is the opening text in Revenge of the Sith
  textFont('Helvetica');
  textSize(11);
  text(start, 0, 500,width,100);
}

function mousePressed(){
          pdf.save();
  
}