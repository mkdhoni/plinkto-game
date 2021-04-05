const Engine = Matter.Engine;//adding engine to Matter.
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//game objects
var ground,platform,plinko



function preload(){


}

function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    log1 = new Log(600,400,20,300,200)
    plinko = new Plinko(200,200,20,2)
    log2 = new Log(400,400,20,300,200)
    log3 = new Log(200,400,20,300,100)

}
function draw(){
   
    
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    plinko.display();
}

    
