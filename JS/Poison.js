class Poison {
  
  constructor(col, row){
    this.col = col
    this.row = row
    this.setRandomPosition()

    this.img = new Image()
    this.img.src = "../Assets/IMG/Poison.png"
  }
  setRandomPosition(){
      this.col = Math.floor(Math.random() *10)   
      this.row = Math.floor(Math.random() *10)
  }

  draw(ctx){
    if (this.row == this.row && this.col == this.col) {
    }else {}
    ctx.drawImage(this.img, this.col*100,this.row*100,70,70)
  }
}