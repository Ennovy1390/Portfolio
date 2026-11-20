var img;
var initials = "jm";
var choice = "1";
var screenbg;
var lastscreenshot = 61;

function preload() {
  img = loadImage("abby kora holiday.jpg");
}

function setup() {
  screenbg = color(35, 45, 120);

  createCanvas(600, 600);
  background(screenbg);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }

  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {

  // 1 = Star Brush
  if (toolChoice == "1") {

    noStroke();

    fill(255, 215, 0);
    circle(mouseX, mouseY, 8);

    fill(255);
    circle(mouseX, mouseY, 3);
  }

  // 2 = Moon Brush
  else if (toolChoice == "2") {

    noStroke();

    fill(220, 220, 255);
    circle(mouseX, mouseY, 30);

    fill(screenbg);
    circle(mouseX + 10, mouseY, 24);
  }
// 3 = Sparkle Brush
else if (toolChoice == "3") {

 let sparkleColor = int(random(3));

  if (sparkleColor == 0) {
    stroke(255, 215, 0);     // gold
  }
  else if (sparkleColor == 1) {
    stroke(170, 120, 255);   // purple
  }
  else {
    stroke(120, 220, 255);   // blue
  }

  line(mouseX - 5, mouseY, mouseX + 5, mouseY);
  line(mouseX, mouseY - 5, mouseX, mouseY + 5);

}
  

  // 4 = Mist Brush
  else if (toolChoice == "4") {

    noStroke();

    fill(100, 180, 255, 25);
    circle(mouseX, mouseY, 70);
  }

  // 5 = Flower Stamp
  else if (toolChoice == "5") {

    noStroke();

    fill(40, 175, 220);

    circle(mouseX - 10, mouseY, 15);
    circle(mouseX + 10, mouseY, 15);
    circle(mouseX, mouseY - 10, 15);
    circle(mouseX, mouseY + 10, 15);

    fill(180, 220, 255);
    circle(mouseX, mouseY, 10);
  }

  // 6 = Grass Brush
  else if (toolChoice == "6") {

    stroke(40, 120, 70);

    line(
      mouseX,
      mouseY,
      mouseX + random(-8, 8),
      mouseY - 30
    );
  }

  // 7 = Leaf Brush
else if (toolChoice == "7") {

    fill(
      random(15, 40),
      random(90, 150),
      random(60, 110)
    );

    noStroke();

    push();

    translate(mouseX, mouseY);
    rotate(radians(random(-60, 60)));

    ellipse(0, 0, 18, 30);

    stroke(180, 220, 180);

    // center vein
    line(0, -12, 0, 12);

    // side veins
    line(0, -5, -4, -8);
    line(0, -5, 4, -8);

    line(0, 2, -4, 5);
    line(0, 2, 4, 5);

    pop();
}
  

  // 8 = Butterfly Brush
  else if (toolChoice == "8") {

    noStroke();

    fill(255, 140, 0);

    ellipse(mouseX - 8, mouseY, 15, 12);
    ellipse(mouseX + 8, mouseY, 15, 12);

    stroke(80);
    line(mouseX, mouseY - 8, mouseX, mouseY + 8);
  }

  // 9 = Cloud Brush
  else if (toolChoice == "9") {

    noStroke();

    fill(235, 170, 255, 70);

    circle(mouseX - 15, mouseY, 30);
    circle(mouseX, mouseY - 10, 35);
    circle(mouseX + 15, mouseY, 30);
  }

  // 0 = Magic Color Blocks
  else if (toolChoice == "0") {

    noStroke();

    fill(
      random(60, 140),
      random(120, 220),
      random(180, 255),
      80
    );

    rect(mouseX, mouseY, 40, 40);
  }

  // G = Image Stamp
  else if (toolChoice == "g" || toolChoice == "G") {

    image(img, mouseX, mouseY, 60, 60);
  }

  // E = Eraser
  else if (toolChoice == "e" || toolChoice == "E") {

    noStroke();

    fill(screenbg);

    circle(mouseX, mouseY, 100);
  }
}

function clear_print() {

  if (key == "x" || key == "X") {

    background(screenbg);
  }

  else if (key == "p" || key == "P") {

    saveme();
  }
}

function saveme() {

  let filename =
    initials +
    day() +
    hour() +
    minute() +
    second();

  if (second() != lastscreenshot) {

    saveCanvas(filename, "jpg");
    key = "";
  }

  lastscreenshot = second();
}