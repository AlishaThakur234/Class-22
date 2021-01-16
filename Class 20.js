var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,300,50,80)

}

function draw(){
  background("red");  

  movingRect.x=mouseX
  movingRect.y = mouseY

  if(abs(movingRect.x - fixedRect.x) <= movingRect.width/2 + fixedRect.width/2 && 
  abs(movingRect.y - fixedRect.y) <= movingRect.height/2 + fixedRect.height/2) {
   movingRect.shapeColor = "green"
   fixedRect.shapeColor = "green"
  }
  else {
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "blue"
   }

  drawSprites();
}