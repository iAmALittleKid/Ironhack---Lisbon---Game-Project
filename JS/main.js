var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

let squirrel = new Squirrel(0,0,"right")
let nut = new Nut()
let blueberry = new Blueberry()
let cheese = new Cheese()
let egg = new Egg()
let poison = new Poison()
let apple = new RottenApple()
let carrot = new RottenCarrot()


function drawGrid() {
  ctx.lineWidth = 3
  for (let x = 0; x < width; x+=100){
    ctx.beginPath()
    ctx.moveTo(x,0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  for (let y = 0; y < width; y+=100){
    ctx.beginPath()
    ctx.moveTo(0,y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}

function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawGrid()
  nut.draw(ctx)
  cheese.draw(ctx)
  blueberry.draw(ctx)
  egg.draw(ctx)
  poison.draw(ctx)
  apple.draw(ctx)
  carrot.draw(ctx)
  squirrel.draw(ctx) 
}

function updateEverything() {
  squirrel.update()
} 

function animation() {
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}

animation()

document.onkeydown = function(e) {
  e.preventDefault()
  switch (e.keyCode) {
    case 37: 
      squirrel.moveLeft()
      break
    case 38: 
      squirrel.moveUp()
      break
    case 39: 
      squirrel.moveRight()
      break
    case 40: 
      squirrel.moveDown()
      break
  }
}