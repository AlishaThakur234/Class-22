function isTouching (rectOne,rectTwo){

    if(abs(rectOne.x - rectTwo.x) <= rectOne.width/2 + rectTwo.width/2 && 
    abs(rectOne.y - rectTwo.y) <= rectOne.height/2 + rectTwo.height/2) {
    return true;
  
    }
    else {
      return false ;
    }
  
  }
  
  function bounceOff (rect1,rect2){
  
  if (isTouching (rect1,rect2)){
      rect1.velocityX = -rect1.velocityX
      rect1.velocityY = -rect1.velocityY
  
      rect2.velocityX = -rect2.velocityX
      rect2.velocityY = -rect2.velocityY
  
  }
}  