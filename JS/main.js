var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
const GRID_SIZE = 10
const INITIAL_NB_OF_FRAMES_BEFORE_MOVING = 15
const INITIAL_NB_OF_FRAMES_BEFORE_NEW_ITEM = 10*60

let timer = new Timer()
let foodGrid = new FoodGrid()
let squirrel = new Squirrel(0,0,"right")



function drawEverything() {
  timer.draw()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  foodGrid.draw(ctx)
  squirrel.draw(ctx) 
  // timer.draw(ctx)

}

function updateEverything() {
  timer.update()
  squirrel.update()
  foodGrid.update()
  let foodOnSquirrel = foodGrid.content[squirrel.row][squirrel.col]
  if (foodOnSquirrel) {
    timer.usePowerUp(foodOnSquirrel.type)
    if (foodOnSquirrel.type === "nut") {
      foodGrid.insertNewNut(squirrel)
    }
    foodGrid.content[squirrel.row][squirrel.col] = null
    foodGrid.foodOnGrid--
  }
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