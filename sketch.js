const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles=[];
var Divisions=[];
var plinkos=[];


var Ground1
var divisionHeight=300

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;


  background("black")
  

  Ground1=new Ground(390,200,800,10)

  for(var k=0 ; k<=width ;k=k+80){
    Divisions.push(new divisions(k,height-DivisionHeight/2,10,divisionHeight))
    }
    
    for(var j =40 ; j<=width ;j=j+50){
    plinkos.push(new Plinko(j,75))
    }
    
    for(var m=15 ;m<=width ; m=m+50){
    plinkos.push(new Plinko(m,175))
    }
}

function draw() {
  Engine.update(engine)
  background(255,255,255);
  if(frameCount%60===0){
particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }
  
  for(var j=0 ; j<particles.length ; j++){
particles[j].display();
  }
   for(var m=0 ; m<divisions.length ; m++){
divisions[m].display();
}

for(var j=0 ; j<plinkos.length ; j++){
  plinkos[j].display();
    }

    
  
  drawSprites();


}

