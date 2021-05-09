const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;
var ground1, ground2, ground3;
var score = 0;
var chain;
var hex;
var ball;
var hexImg;
var backgroundImg;
var gameState = "on slingshot";
var bg = "bg1.jpg";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("bg1.jpg");
  hexImg = loadImage("hexagon (1).png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
  strokeWeight(2);

  block1 = new Block(600, 260, 30, 40);
  block2 = new Block(570, 260, 30, 40);
  block3 = new Block(540, 260, 30, 40);
  block4 = new Block(630, 260, 30, 40);
  block5 = new Block(660, 260, 30, 40);


  block6 = new Block(585, 220, 30, 40);
  block7 = new Block(555, 220, 30, 40);
  block8 = new Block(615, 220, 30, 40);
  block9 = new Block(645, 220, 30, 40);


  bolck10 = new Block(600, 170, 30, 40);
  block11 = new Block(570, 180, 30, 40);
  block12 = new Block(630, 180, 30, 40);


  block13 = new Block(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  block14 = new Block(900, 170, 30, 40);
  block15 = new Block(930, 170, 30, 40);
  block16 = new Block(870, 170, 30, 40);
  block17 = new Block(840, 170, 30, 40);
  block18 = new Block(960, 170, 30, 40);


  block19 = new Block(900, 140, 30, 40);
  block20 = new Block(930, 140, 30, 40);
  block21 = new Block(870, 140, 30, 40);
  block22 = new Block(900, 110, 30, 40);

  hex = new Hex(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:150, y:160});
  
}

function draw() {
  if(backgroundImg) {
    background(backgroundImg);
}
  
  noStroke();
  textSize(20);
  fill("red");
  text("SCORE :" + score, 650, 40);
  text("Press the space key for another chance!", 400, 380);

  Engine.update(engine);

  stroke("black");
  

  block1.score();
  block1.display();
  block2.score();
  block2.display();
  block3.score();
  block3.display();
  block4.score();
  block4.display();
  block5.score();
  block5.display();
  block6.score();
  block6.display();
  block7.score();
  block7.display();
  block8.score();
  block8.display();
  block9.score();
  block9.display();
  block10.score();
  block10.display();
  block11.score();
  block11.display();
  block12.score();
  block12.display();
  block13.score();
  block13.display();
  block14.score();
  block14.display();
  block15.score();
  block15.display();
  block16.score();
  block16.display();
  block17.score();
  block17.display();
  block18.score();
  block18.display();
  block19.score();
  block19.display();
  block20.score();
  block20.display();
  block21.score();
  block21.display();
  block22.score();
  block22.display();
  ground3.display();
  ground2.display()
  ground1.display();
  hex.display();
  chain.display();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  chain.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32) {
      chain.attach(hex.body);
      gameState = "on slingshot";
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "bg1.jpg"
  } else {
      bg = "bg.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}