/*This code uses the video capture the users video and creates "mirror" of themselves in different filters. It also has a button that alllows for reverbed music to be played*/
let capture, button, soundFile;
let playing = false;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  soundFile = loadSound('bensound-slowmotion.mp3');
}

function setup() {
  createCanvas(500,400);
  button = createButton('play'); //HTML element
  button.mousePressed(playSound);
  
  reverb = new p5.Reverb();
  soundFile.disconnect();
  reverb.process(soundFile, 5, 70);
  
  capture = createCapture(VIDEO);
  capture.size(200, 150);
  capture.hide();
}

function draw() {
  background(255);
  //Top right
  image(capture, 250, 0, 250, 200);
  //Top left
  filter(INVERT);
  image(capture, 0, 0, 250, 200);
  //Bottom right
  filter(GRAY);
  image(capture, 250, 200, 250, 200);
  //Bottom Left
  filter(INVERT);
  image(capture, 0, 200, 250, 200);
  
}
//Play/Pause button for the music
function playSound() {
  if (playing) {
    soundFile.pause();
    button.html('play');
  } else {
    soundFile.loop();
    button.html('pause');
  }
  playing = !playing;
}
