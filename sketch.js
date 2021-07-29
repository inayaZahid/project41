const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var droplets=[];
var walkImg;
var thunderImg,light;

function preload(){
   
    thunderImg=loadAnimation("thunder.png","thunder2.png","thunder3.png","thunder4.png")
}

function setup(){
   createCanvas(400,600)
   engine = Engine.create();
  world = engine.world;
   
    light=createSprite(width/2,5,width,10);
    light.addAnimation("lightening",thunderImg)
    light.visible=false;
    umbrella = new Umbrella(200,400);

}

function draw(){
    background("black")
    Engine.update(engine);
   if(frameCount%60===0){
       light.visible=true;
   }
   else{
       light.visible=false;
   }
   if(frameCount%10===0){
    droplets.push(new Drop(random(1,400),10,10));
  }
  for(var h = 0;h<droplets.length;h++){
    droplets[h].display();
  }

 umbrella.display();
    drawSprites();
}   

