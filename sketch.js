// https://p5js.org/reference/
let sound, amplitude;

function preload(){
  sound = loadSound('music.mp3');
}

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background('black');
  let level = amplitude.getLevel();
  fill('crimson')
  ellipse(150, 150,level * 150);
  fill('blue')
  ellipse(250,300,level * 300);
}

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}