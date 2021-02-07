const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImage
var boy;
var drop=[];
var thunder;
var thunder1,thunder2;
var maxdrops=100;
var boyImage;

function preload() {

    thunder1=loadImage("thunder1.png")
    thunder2=loadImage("thunder2.png")
    boyImage=loadImage("walking_1.png")

}

function setup(){
    engine = Engine.create();
    world = engine.world;
    
    var canvas = createCanvas(400,600);

    
    for(var i= 0; i < maxdrops ;i++){
      
      drop.push(new Drop(random(0,400),random(0,400)))
    }

    boy = createSprite(180,470,200,200)
    boy.addImage(boyImage)    
    boy.scale=0.5;
    
    
    //boy = new Boy(250,470);
    Engine.run(engine);


}

function draw(){
    background("black");

    //boy.display();

    
    rand=Math.round(random(1,2))
    
    if(frameCount%80===0){
    thunder = createSprite(random(10,370),random(10,30),10,10)
    
    switch(rand){
    case 1:thunder.addImage(thunder1)
    break;
    case 2:thunder.addImage(thunder2)
    break;
    default:break;
    }

    thunder.scale = random(0.3,0.6)
    thunder.lifetime=10;
}

    if(frameCount>=880){

        thunder.visible=false;
    }

    for(var i= 0; i < maxdrops ;i++){
      drop[i].showdrop();
      drop[i].updatePosition();
        
      }

    
    drawSprites();
    
}









