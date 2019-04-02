var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
const GRID_SIZE = 10

let timer = 1000
let foodGrid = new FoodGrid()
let squirrel = new Squirrel(0,0,"right")



function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  foodGrid.draw(ctx)
  squirrel.draw(ctx) 
  // timer.draw(ctx)

}

function updateEverything() {
  squirrel.update()
  foodGrid.update()
  let foodOnSquirrel = foodGrid.content[squirrel.row][squirrel.col]
  if (foodOnSquirrel) {
    if (foodOnSquirrel.type === "nut") {
      // TODO
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