const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base;





function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
    engine = Engine.create();
    world = engine.world;
	
    playerBase = new PlayerBase(200,400,150,100);
    compBase = new ComputerBase(1000,400,150,100);
    player = new Player(200,300,60,130)
    computer = new Computer(1000,300,60,130)


 }

function draw() {

  background(180);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  playerBase.display();
  compBase.display()
  player.display()
  computer.display()

  //display Player and computerplayer


}
