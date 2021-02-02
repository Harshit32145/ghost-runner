var tower,towerImg;
var ghost,ghostImg;

var door,doorImg,doorGroup;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
 
  ghostImg = loadImage("ghost-standing.png");

}


function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300,20,20);
  tower.addImage ("tower",towerImg);
  
  ghost=createSprite(300,150,10,10);
  ghost.addImage ("ghost",ghostImg);
  ghost.scale=0.5;
  
  
  
  tower.velocityY=1;
}

function draw(){
  background("black");
  
  if(keyDown("up_arrow")){
    ghost.velocityY=-5;
  }
  if(keyDown("left_arrow")){
    ghost.x-=3;
  }
  if(keyDown("right_arrow")){
    ghost.x+=3;
  }
  ghost.velocityY+=0.6;
  
  
  
  
  
  
  
  if (tower.y >400){
      tower.y = 300;
    }
  spawndoor();
  drawSprites();
  
  
}

function spawndoor() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    door = createSprite(600,100,40,10);
    door.x = Math.round(random(120,400));
    door.addImage(doorImg);
    door.scale = 0.5;
    door.velocityY = 1;
    door.lifetime = 134;
    
    //adjust the depth
    door.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
    
    
  }
}


