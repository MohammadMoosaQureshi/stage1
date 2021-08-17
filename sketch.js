var mangoo, Ground
function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  mangoo = createSprite(50, windowHeight / 2 + 20, 40, 40)
  ground = createSprite(windowWidth / 2, windowHeight, windowWidth, 100)
}

function draw() {
  background("blue")
  ground.velocityX = -3

  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  if (keyDown("left")) {
    mangoo.velocityX = -2
  }

  if (keyDown("right")) {
    mangoo.velocityX = 2
  }
  if (keyDown("up")) {
    mangoo.velocityY = -2
  }
  if (keyDown("M")){
    Shooting()
  }
  mangoo.velocityY = mangoo.velocityY + 0.1
  mangoo.collide(ground)

  drawSprites()
}
function Shooting(){
  
  if (frameCount % 60 === 0) {
    obj=createSprite(mangoo.x,mangoo.y,10,10)
    obj.velocityX = 2
  }
}