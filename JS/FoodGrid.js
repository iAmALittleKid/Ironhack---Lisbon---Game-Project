class FoodGrid {
  constructor() {
    this.content = []
    for (let row = 0; row < GRID_SIZE; row++) {
      this.content.push([])
      for (let col = 0; col < GRID_SIZE; col++) {
        this.content[row].push(null)
      }
    }
    this.food = ["apple","blueberry","cheese","egg","mushroom","poison"]
    this.content[GRID_SIZE-1][GRID_SIZE-1] = new FoodItem("nut")
    this.nbOfFramesBeforeNewItem = INITIAL_NB_OF_FRAMES_BEFORE_NEW_ITEM // After 10 seconds
    this.foodOnGrid = 0
  }
  
  draw(ctx) {
    // Draw the lines
    ctx.lineWidth = 3
    for (let x = 0; x < width; x+=100){
      ctx.beginPath()
      ctx.moveTo(x,0)
      ctx.lineTo(x, height)
    }
    for (let y = 0; y < width; y+=100){
      ctx.beginPath()
      ctx.moveTo(0,y)
      ctx.lineTo(width, y)
    }
    
    // Draw all food items
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        let foodItem = this.content[row][col]
        if(foodItem) {
          foodItem.draw(ctx, col, row)
        }
      }
    }
  }

  insertNewNut() {
    let randomRow = Math.floor(Math.random()*GRID_SIZE)
    let randomCol = Math.floor(Math.random()*GRID_SIZE)
    // If there is already something on the grid
    if (this.content[randomRow][randomCol]) {
      this.insertNewNut()
    }
    else {
      this.content[randomRow][randomCol] = new FoodItem("nut") 
    }
  }

  insertNewPowerUp() {
    let randomNumber = Math.floor(Math.random()*this.food.length)
    this.nbOfFramesBeforeNewItem--
    if (this.nbOfFramesBeforeNewItem === 0) {
      this.nbOfFramesBeforeNewItem = INITIAL_NB_OF_FRAMES_BEFORE_NEW_ITEM
      let randomRow = Math.floor(Math.random()*GRID_SIZE)
      let randomCol = Math.floor(Math.random()*GRID_SIZE)
      if (this.content[randomRow][randomCol]) {
        this.insertNewPowerUp()
      }
      else {
        this.content[randomRow][randomCol] = new FoodItem(this.food[randomNumber])
      }
    }
  }
  
  update() {
    this.insertNewPowerUp()

    // Update everything on the content
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        let foodItem = this.content[row][col]
        if(foodItem) {
          foodItem.update()
          if (foodItem.ttl <= 0) {
            this.content[row][col] = null
            if (foodItem.type === "nut") {
              this.insertNewNut()
            }
          }
        }
      }
    }
  }
}