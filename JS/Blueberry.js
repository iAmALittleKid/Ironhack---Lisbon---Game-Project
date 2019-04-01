class Blueberry {
  
  constructor(col, row, src){
    this.col = col
    this.row = row
    this.setRandomPosition()

    this.img = new Image()
    this.img.src = src
  }
  setRandomPosition(){
      this.col = Math.floor(Math.random() *10)   
      this.row = Math.floor(Math.random() *10)
  }
}