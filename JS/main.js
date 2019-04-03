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

let page = "home" // Possible values: "game", "game-over", "home", "high-scores", "instructions"


function resetGame() {
  timer = new Timer()
  foodGrid = new FoodGrid()
  squirrel = new Squirrel(0,0,"right")
}

function drawEverything() {
  timer.draw()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  foodGrid.draw(ctx)
  squirrel.draw(ctx) 
  // timer.draw(ctx)

}

function updateEverything() {
  if (timer.currentTime > 0) {
    timer.update()
  } else {
  }
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
  if (page === "game") {
    updateEverything()
    drawEverything()
  }
  if (page === "home") {
    drawHomePage()
  }
  if (page === "instructions") {
    drawInstructionsPage()
  }
  if (timer.currentTime === 0) {
    drawGameOverPage()
  }
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
    case 96: // 0
    case 48: // 0
      page = "home"
      break
    case 97: // 1
    case 49: // 1
      resetGame()
      page = "game"
      break
    case 98: // 2
    case 50: // 2
      page = "instructions"
      break
  }
}

function drawHomePage() {
  ctx.save()
  
  // Background
  ctx.fillStyle = "white"
  ctx.fillRect(0,0,width,height)

  // Text
  ctx.fillStyle = "black"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("1 - PLAY", width / 2, 300)
  ctx.fillText("2 - INSTRUCTIONS", width / 2, 700)
  
  ctx.restore()
}

function drawInstructionsPage() {
  ctx.save()
  
  // Background
  ctx.fillStyle = "white"
  ctx.fillRect(0,0,width,height)

  // Text
  ctx.fillStyle = "black"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("To play, you have to ...", width / 2, 100)
  ctx.fillText("0 - HOME", width / 2, 400)
  ctx.fillText("1 - PLAY", width / 2, 600)
  
  ctx.restore()
}

function drawGameOverPage() {
  ctx.save()
  
  // Background
  ctx.fillStyle = "white"
  ctx.fillRect(0,0,width,height)

  // Text
  ctx.fillStyle = "black"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("GAME OVER", width / 2, 300)
  ctx.fillText("1 - PLAY", width / 2, 700)

  ctx.restore()
}