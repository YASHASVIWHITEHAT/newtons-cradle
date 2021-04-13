
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1
function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(450,50,700,20)
	bob1=new Bob(100,100,80)
	bob2=new Bob(200,100,80)
	bob3=new Bob(300,100,80)
	bob4=new Bob(400,100,80)
	bob5=new Bob(500,100,80)
    rope1=new Rope(bob1.body,{x:300,y:50})
	rope2=new Rope(bob2.body,{x:380,y:50})
	rope3=new Rope(bob3.body,{x:460,y:50})
	rope4=new Rope(bob4.body,{x:540,y:50}) 
	rope5=new Rope(bob5.body,{x:620,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 
}



