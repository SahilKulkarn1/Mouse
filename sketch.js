var survivalTime=0
var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score = 0
var survivalTime
var PLAY=1
var END=0
var gameState=PLAY
var back,backImage
var invground

function preload(){
  backImage=loadImage("jungle.jpg")
  
  monkey_running =            loadAnimation("mouse.jpg")
  
  bananaImage = loadImage("cheesey.png");
  obstacleImage = loadImage("mousetrap.jpg");
  
}

function setup() {
  createCanvas(400,400)
  
  back=createSprite(200,200,400,400)
  back.addImage(backImage)
  back.velocityX=-4
  
  monkey=createSprite(60,340,10,10)
  monkey.addAnimation("monkeyrunning",monkey_running)
  monkey.scale=0.07    
 
  invground=createSprite(200,380,400,10)
  
  obstacleGroup=createGroup(); 
  FoodGroup=createGroup();
}

function draw(){
background("white")
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+1  
 if(back.x<0){
 back.x=back.width/2
 } 
  if(monkey.isTouching(FoodGroup)){
   score++ 
  FoodGroup.destroyEach()
  }
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.03
  }
  
  switch(score){
    case 10: monkey.scale=0.12
             break;
    case 20: monkey.scale=0.14
             break;
    case 30: monkey.scale=0.16
             break;
   case 40: monkey.scale=0.18
             break;
             default:
      break; 
  }
  
  monkey.collide(invground)
  invground.visible=false 
  fruit()
  obstacles();
  drawSprites();
 
  
  text("Score"+score,300,60)
} 



function obstacles(){
  if(frameCount % 100 === 0) {
    obstacle = createSprite(400,360,40,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4;
    obstacle.scale = 0.06;
    obstacle.lifetime = 140;
    
    obstacleGroup.add(obstacle);
  }
}


function fruit(){
  if(frameCount % 100 === 0) {
    bannana = createSprite(400,200,40,40);
    bannana.addImage(bananaImage);
    bannana.velocityX=-4
    bannana.scale=0.1
    FoodGroup.add(bannana)
  }
}