let titleFont;

let playerX = 400;
let playerY = 300;

let soul = 100;



let career = 0;
let family = 0;
let wealth = 0;
let creativity = 0;

let gameState = "START";

let lifePath="";
let goals = [];



function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);

  goals.push({ name: "Calling", x: 150, y: 250, done: false });
  goals.push({ name: "Love", x: 650, y: 250, done: false });
  goals.push({ name: "Wealth", x: 150, y: 450, done: false });
  goals.push({ name: "Creation", x: 650, y: 450, done: false });
  goals.push({ name: "Spirit", x: 400, y: 350, done: false });
}

function draw() {

  if (gameState == "START") {
    startScreen();
  }

  if (gameState == "PLAY") {
    playGame();
  }

  if (gameState == "END") {
    endScreen();
  }
}

function startScreen() {

  background(20, 15, 35);

  // stars

  fill(255, 255, 255, 120);

  for (let i = 0; i < 60; i++) {
    circle(
      (i * 127) % width,
      (i * 73) % height,
      2
    );
  }

  // moon

  fill(250, 245, 220);
  circle(670, 120, 90);

  fill(20, 15, 35);
  circle(690, 110, 75);

  // title shadow

  fill(40, 20, 10);

  textFont("Garamond");
  textSize(60);

  text("LIFE PATH", width / 2 + 4, 124);

  // gold title

  fill(212, 175, 55);

  text("LIFE PATH", width / 2, 120);

  // subtitle

  fill(235, 220, 170);

textSize(24);

text(
  "Under the moon,\nevery choice leaves a shadow.",
  width / 2,
  260
);

text(
  "What fills the hand\nmay empty the soul.",
  width / 2,
  340
);

text(
  "A life is not measured\nby what is gained,\nbut by what remains.",
  width / 2,
  440
);
 fill(180, 160, 220);

textSize(16);

text(
  "Use the Arrow Keys to follow your path",
  width / 2,
  570
);
}


function playGame() {

  background(28, 20, 48);

  // crystal shop floor

  fill(70, 50, 90);
  rect(0, 450, width, 150);

  stroke(90, 70, 120);

  for (let x = 0; x < width; x += 40) {
    line(x, 450, x, height);
  }

  for (let y = 450; y < height; y += 30) {
    line(0, y, width, y);
  }

  noStroke();

  // moon

  fill(245, 245, 220);
  circle(700, 90, 80);

  fill(28, 20, 48);
  circle(720, 80, 70);

  // stars

  fill(255);

  for (let i = 0; i < 40; i++) {
    circle(
      (i * 157) % width,
      (i * 91) % height,
      2
    );
  }

  movePlayer();

  // soul bar

  fill(255);

  textSize(18);
  text("Soul Energy", 90, 30);

  fill(100);
  rect(180, 20, 200, 20);

  fill(180, 120, 255);
  rect(180, 20, soul * 2, 20);

  // stats

  fill(255);

  textSize(16);

  text("Calling: " + career + "%", 100, 70);
  text("Love: " + family + "%", 100, 100);
  text("Wealth: " + wealth + "%", 100, 130);
  text("Creation: " + creativity + "%", 100, 160);

  // player

  fill(181, 126, 220);
  circle(playerX, playerY, 30);

  fill(255);
  textSize(14);
  text("☾", playerX, playerY);

  // goals

  for (let g of goals) {

    if (!g.done) {

      // glowing orb

      for (let r = 70; r > 20; r -= 10) {

        fill(255, 255, 255, 15);
        noStroke();
        circle(g.x, g.y, r);
      }

      // orb center

      fill(255);
      circle(g.x, g.y, 25);

      // orb shine

      fill(255);
      circle(g.x - 4, g.y - 4, 8);

      // label

      fill(220, 220, 255);
      textSize(12);
      text(g.name, g.x, g.y + 30);

      let d = dist(
        playerX,
        playerY,
        g.x,
        g.y
      );

      if (d < 35) {

  if (lifePath == "") {
    lifePath = g.name;
  }

  if (g.name == "Calling") {
    career = 100;
    soul -= 15;
  }

  if (g.name == "Love") {
    family = 100;
    soul -= 5;
  }

  if (g.name == "Wealth") {
    wealth = 100;
    soul -= 20;
  }

  if (g.name == "Creation") {
    creativity = 100;
    soul += 10;
  }

  if (g.name == "Spirit") {
    soul += 15;
  }

  soul = constrain(soul, 0, 100);

  g.done = true;
}
    }
  }

  let complete = true;

  for (let g of goals) {

    if (!g.done) {
      complete = false;
    }
  }

  if (complete) {
    gameState = "END";
  }
}

function movePlayer() {

  // Arrow Keys

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 4;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= 4;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY += 4;
  }

  // WASD

  if (keyIsDown(65)) {
    playerX -= 4;
  }

  if (keyIsDown(68)) {
    playerX += 4;
  }

  if (keyIsDown(87)) {
    playerY -= 4;
  }

  if (keyIsDown(83)) {
    playerY += 4;
  }

  playerX = constrain(playerX, 15, width - 15);
  playerY = constrain(playerY, 15, height - 15);
}

function endScreen() {

  //Animated Indigo background
  background(75, 0, 130 + sin(frameCount* 0.05) * 20);
  //Floating sparkles

  fill(255,255,255,120)
  for  (let i =0; i <40;i++){

   circle(
      (i * 73) % width,
      ((i * 51) + frameCount * 2) % height,
      4
    );
  }

  fill(255);

  textFont("Garamond")
  
  textSize(50);
  text("Your Life Path", width / 2, 120);

  textSize(24);

  text("Calling: " + career + "%", width / 2, 220);
  text("Love: " + family + "%", width / 2, 260);
  text("Wealth: " + wealth + "%", width / 2, 300);
  text("Creation: " + creativity + "%", width / 2, 340);
  
textSize(30);
  
  text(
    "Soul Energy: " + soul + "%",
    width / 2,
    430
  );

  textSize(22);
 if (lifePath == "Wealth") {

    text(
      "Success was gained, but at a cost.",
      width / 2,
      520
    );

  }

  else if (lifePath == "Love") {

    text(
      "Relationships shaped your journey.",
      width / 2,
      520
    );

  }

  else if (lifePath == "Calling") {

    text(
      "You followed your purpose through life.",
      width / 2,
      520
    );

  }

  else if (lifePath == "Creation") {

    text(
      "A life of imagination and expression.",
      width / 2,
      520
    );

  }

  else if (lifePath == "Spirit") {

    text(
      "You sought wisdom beyond the material world.",
      width / 2,
      520
    );
  }
}

function mousePressed() {

  if (gameState == "START") {
    gameState = "PLAY";
  }
}