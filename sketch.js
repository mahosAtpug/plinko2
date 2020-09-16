const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,divisionHeight;
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var engine,world;
var score=0
var turn=0
var gameState="start";

var score1=0;
var score2=0;
var score3=0;
var score4=0;
var score5=0;
var score6=0;


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground1 = new Ground(600,height,1200,20);

  divisionHeight=300;
  for (var k=0 ; k<=width; k=k+ 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko (j,75));
  }
  for (var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
 

}


function draw() {
  Engine.update(engine);
  background("black"); 
  text(score1, 30, 550);
  text(score2, 105, 550);
  text(score3, 185, 550);
  text(score4, 265, 550);
  text(score5, 345, 550);
  text(score6, 425, 550);

  text (mouseX+":" + mouseY,mouseX,mouseY)
  
  ground1.display(); 
  text ("Score :" + score,50,50);
   
  for(var y in divisions){
    divisions[y].display();
    
  }
  for(var a in plinkos){
    plinkos[a].display();
  }
  for(var b in particles){
    particles[b].display();
  }
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
  
   if (particle.body.position.y>390 && particle.body.position.x>450){
     score=score+100;
     textSize(30)
     text ("Score :" +score,100,200);
   }
  drawSprites();
  mousePressed();
}

function mousePressed(){
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10),10,10));
   }
}
  
