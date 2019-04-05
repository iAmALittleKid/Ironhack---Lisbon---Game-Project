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
    return
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
  ctx.fillStyle = "rgba(123, 239, 178, 0.4)"
  ctx.fillRect(200,200,600,600)

  // Text
  ctx.fillStyle = "black"
  ctx.font = "40px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("1 - PLAY", width / 2, 300)
  ctx.fillText("2 - INSTRUCTIONS", width / 2, 700)
  
  ctx.restore()
}


let imageNut = new Image()
imageNut.src = `./Assets/IMG/nut.png`
let imageCheese = new Image()
imageCheese.src = `./Assets/IMG/cheese.png`
let imageEgg = new Image()
imageEgg.src = `./Assets/IMG/egg.png`
let imageBlueberry = new Image()
imageBlueberry.src = `./Assets/IMG/blueberry.png`
let imageApple = new Image()
imageApple.src = `./Assets/IMG/apple.png`
let imageMushroom = new Image()
imageMushroom.src = `./Assets/IMG/mushroom.png`
let imagePoison = new Image()
imagePoison.src = `./Assets/IMG/poison.png`


function drawInstructionsPage() {
  ctx.save()
  
  // Background
  ctx.fillStyle = "rgba(123, 239, 178, 0.4)"
  ctx.fillRect(0,0,width,height)

  // Text
  ctx.fillStyle = "black"
  ctx.font = "60px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Last as Long as you can", width / 2, 80)
  ctx.font = "30px sans-serif"
  ctx.fillStyle = "yellow"
  ctx.textAlign = "left"
  ctx.drawImage(imageNut, 50, 160, 50, 50)
  ctx.fillText(" - Gain 2 Seconds", 100, 200)
  ctx.drawImage(imageCheese, 50, 260, 50, 50)
  ctx.fillText(" - Gain 5 Seconds", 100, 300)
  ctx.drawImage(imageEgg, 50, 360, 50, 50)
  ctx.fillText(" - Squirrel Faster for 5 Seconds", 100, 400)
  ctx.drawImage(imageBlueberry, 50, 460, 50, 50)
  ctx.fillText(" - Time Freezes for 5 Seconds", 100, 500)
  ctx.drawImage(imageApple, 50, 560, 50, 50)
  ctx.fillText(" - Lose 5 Seconds", 100, 600)
  ctx.drawImage(imageMushroom, 50, 660, 50, 50)
  ctx.fillText(" - Squiller Slower for 5 Seconds", 100, 700)
  ctx.drawImage(imagePoison, 50, 760, 50, 50)
  ctx.fillText(" - Squirrel Dies", 100, 800)
  ctx.font = "40px sans-serif"
  ctx.fillStyle = "black"
  ctx.textAlign = "center"
  ctx.fillText("1 - PLAY ", 200, 900)
  ctx.fillText("0 - HOME ", 800, 900)
  
  ctx.restore()
}

function drawGameOverPage() {
  ctx.save()
  
  // Background
  ctx.fillStyle = "rgba(123, 239, 178, 0.4)"
  ctx.fillRect(200,200,600,600)
1
  // Text
  ctx.fillStyle = "black"
  ctx.font = "80px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("GAME OVER", width / 2, 300)
  ctx.fillStyle = "black"
  ctx.font = "50px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("Score: " + timer.scoreFrame / 60
  , width / 2, 500)
  ctx.fillStyle = "black"
  ctx.font = "40px sans-serif"
  ctx.textAlign = "center"
  ctx.fillText("1 - PLAY", width / 2, 750)

  ctx.restore()
}