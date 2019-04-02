class FoodGrid {
  constructor() {
    this.content = []
    for (let row = 0; row < GRID_SIZE; row++) {
      this.content.push([])
      for (let col = 0; col < GRID_SIZE; col++) {
        this.content[row].push(null)
      }
    }
    this.food = ["apple","blueberry","carrot","cheese","egg","mushroom","poison"]
    this.content[GRID_SIZE-1][GRID_SIZE-1] = new FoodItem("nut")
    this.nbOfFramesBeforeNewItem = 60*10 // After 10 seconds
    this.foodOnGrid = 0
  }
  
  draw(ctx) {
    // Draw the lines
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
    
    // Draw all food items
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if(this.content[row][col]) {
          this.content[row][col].draw(ctx, col, row)
        }
      }
    }
  }

  insertNewNut() {
    let randomRow = Math.floor(Math.random()*GRID_SIZE)
    let randomCol = Math.floor(Math.random()*GRID_SIZE)
    this.content[randomRow][randomCol] = new FoodItem("nut") 
  }
  
  update() {
    let randomNumber = Math.floor(Math.random()*this.food.length)
    this.nbOfFramesBeforeNewItem--
    if (this.nbOfFramesBeforeNewItem === 0) {
      this.nbOfFramesBeforeNewItem = 60*10
      let randomRow = Math.floor(Math.random()*GRID_SIZE)
      let randomCol = Math.floor(Math.random()*GRID_SIZE)
        this.content[randomRow][randomCol] = new FoodItem(this.food[randomNumber])
    }
  }
}