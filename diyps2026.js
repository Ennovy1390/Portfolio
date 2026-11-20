var img;
var choice = "1";
var screenbg = 220;

function preload() {
  img = loadImage("74.png");
}

function setup() {
  createCanvas(600, 600);
  background(220, 215, 245);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
  }

  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {

  if (toolChoice == "1") {
    noStroke();
    fill(220,235,255);
    circle(mouseX, mouseY, 15);
  }

  else if (toolChoice == "2") {
    noStroke();
    fill(205,195,245);
    circle(mouseX, mouseY, 30);
    fill(220,215,245);
    circle(mouseX + 8, mouseY, 24);
  }

  else if (toolChoice == "3") {
    stroke(180,120,255);
    line(mouseX-5,mouseY,mouseX+5,mouseY);
    line(mouseX,mouseY-5,mouseX,mouseY+5);
  }

  else if (toolChoice == "4") {
    noStroke();
    fill(190,180,255,30);
    circle(mouseX, mouseY, 80);
  }

  else if (toolChoice == "5") {
    noStroke();

    fill(235,175,220);
    circle(mouseX-10,mouseY,15);
    circle(mouseX+10,mouseY,15);
    circle(mouseX,mouseY-10,15);
    circle(mouseX,mouseY+10,15);

    fill(255,215,160);
    circle(mouseX,mouseY,10);
  }

  else if (toolChoice == "6") {
    stroke(110,170,120);
    line(mouseX,mouseY,mouseX+random(-8,8),mouseY-30);
  }

  else if (toolChoice == "7") {
    noStroke();
    fill(130,200,140);
    ellipse(mouseX,mouseY,20,35);
  }

  else if (toolChoice == "8") {
    noStroke();
    fill(215,190,255);
    ellipse(mouseX-8,mouseY,15,12);
    ellipse(mouseX+8,mouseY,15,12);
  }

  else if (toolChoice == "9") {
    noStroke();
    fill(235,235,255,70);
    circle(mouseX-15,mouseY,30);
    circle(mouseX,mouseY-10,35);
    circle(mouseX+15,mouseY,30);
  }

  else if (toolChoice == "g" || toolChoice == "G") {
    image(img, mouseX, mouseY, 100, 100);
  }

  else if (toolChoice == "e" || toolChoice == "E") {
    noStroke();
    fill(220,215,245);
    circle(mouseX, mouseY, 80);
  }
}

function keyPressed() {

  if (key == "x" || key == "X") {
    background(220,215,245);
  }

  if (key == "p" || key == "P") {
    saveCanvas("MoonGarden", "jpg");
  }
}
