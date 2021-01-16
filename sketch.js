var world,engine
var ground,ball

const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies


function setup (){

  createCanvas (800,500)
  
  engine = Engine.create()
  world = engine.world

  var groundProperties = {
    isStatic: true
  }
  ground = Bodies.rectangle (400,490,800,20,groundProperties)
  World.add (world,ground)

 // console.log (ground)

  ball = Bodies.circle (200,200,20,{restitution: 1.5})
  World.add (world,ball)
}

function draw () {
  background ("blue")

  Engine.update (engine)

  rectMode (CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  circle (ball.position.x,ball.position.y,40)
}