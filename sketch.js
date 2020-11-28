
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bird, log1, log2, log3;
var ground;

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
   //Create the Bodies Here.
	 ground= new Ground(400,20,700,20)
	 log1= new Log(600,600,50,100);
	 log2= new Log(500,600,50,100);
	 log3= new Log(600,600,100,50);
	 ball= new Ball(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();
  drawSprites();
 
}



