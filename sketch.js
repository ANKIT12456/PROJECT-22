var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bgIMG;
var packageBody,ground,background_1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bgIMG=loadImage("W_3.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	background_1=createSprite(400,350);
	background_1.addImage(bgIMG);
	background_1.scale=1.7;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color("black");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:	true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key
	Matter.Body.setStatic(packageBody,false);
  }
}



