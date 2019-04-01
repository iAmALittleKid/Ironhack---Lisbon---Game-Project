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


// Iteration 1
function drawGrid(x,y) {
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


function drawSquirrel(){}

// nut
nut.setRandomPosition()
let nutImg = new Image()
nutImg.src = "../Assets/IMG/Walnut.png"
function drawNut(){
  if (nut.row == nut.row && nut.col == nut.col) {
  }else {}
  ctx.drawImage(nutImg, nut.col*100,nut.row*100,70,70)
}

// blueberry
blueberry.setRandomPosition()
let blueberryImg = new Image()
blueberryImg.src = "../Assets/IMG/Blueberry.png"
function drawBlueberry(){
  if (blueberry.row == blueberry.row && blueberry.col == blueberry.col) {
  }else {}
  ctx.drawImage(blueberryImg, blueberry.col*100,blueberry.row*100,70,70)
}

// cheese
cheese.setRandomPosition()
let cheeseImg = new Image()
cheeseImg.src = "../Assets/IMG/Cheese.png"
function drawCheese(){
  if (cheese.row == cheese.row && cheese.col == cheese.col) {
  }else {}
  ctx.drawImage(cheeseImg, cheese.col*100,cheese.row*100,70,70)
}

// egg
egg.setRandomPosition()
let eggImg = new Image()
eggImg.src = "../Assets/IMG/Egg.png"
function drawEgg(){
  if (egg.row == egg.row && egg.col == egg.col) {
  }else {}
  ctx.drawImage(eggImg, egg.col*100,egg.row*100,70,70)
}

// poison
poison.setRandomPosition()
let poisonImg = new Image()
poisonImg.src = "../Assets/IMG/Poison.png"
function drawPoison(){
  if (poison.row == poison.row && poison.col == poison.col) {
  }else {}
  ctx.drawImage(poisonImg, poison.col*100,poison.row*100,70,70)
}

// apple
apple.setRandomPosition()
let appleImg = new Image()
appleImg.src = "../Assets/IMG/Apple.png"
function drawApple() {
  if (apple.row == apple.row && apple.col == apple.col) {
  }else {}
  ctx.drawImage(appleImg, apple.col*100,apple.row*100,70,70)
}

// carrot
carrot.setRandomPosition()
let carrotImg = new Image()
carrotImg.src = "../Assets/IMG/Carrot.png"
function drawCarrot(){
  if (carrot.row == carrot.row && carrot.col == carrot.col) {
  }else {}
  ctx.drawImage(carrotImg, carrot.col*100,carrot.row*100,70,70)
}

function drawEverything(direction) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawGrid()
  drawNut()
  drawCheese()
  drawBlueberry()
  drawEgg()
  drawPoison()
  drawApple()
  drawCarrot()
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