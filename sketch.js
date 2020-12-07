var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 800, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  gameObject1=createSprite(200, 400, 80, 30);
  gameObject1.shapeColor="blue";
  gameObject1.debug=true;
  gameObject2=createSprite(800, 400, 80, 30);
  gameObject2.shapeColor="blue";
  gameObject2.debug=true;

 
  movingRect.velocityY=-5;
  fixedRect.velocityY=5
  gameObject1.velocityX=5;
  gameObject2.velocityX=-5;
}

function draw() {
  background(0);
  
 
bounceOff(gameObject1,gameObject2);
 bounceOff(fixedRect,movingRect); 
  
  drawSprites();
}

