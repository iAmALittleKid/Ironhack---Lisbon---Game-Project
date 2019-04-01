class Squirrel {
  
  constructor(col,row,direction) {
    this.col = col
    this.row = row
    this.direction = direction

    this.imgs = {
      right: new Image(),
      left: new Image(),
      down: new Image(),
      up: new Image(),
    }
    this.imgs.right.src = '../Assets/IMG/Squirrel.png'
    this.imgs.left.src = '../Assets/IMG/Squirrel.png'
    this.imgs.down.src = '../Assets/IMG/Squirrel.png'
    this.imgs.up.src = '../Assets/IMG/Squirrel.png'

    this.nbOfFramesBeforeMoving = 15
  }
  moveUp(){
    this.direction = "up"
  }
  moveRight(){
    this.direction = "right"
  }
  moveDown(){
    this.direction = "down"
  }
  moveLeft(){
    this.direction = "left"
  }
  draw(ctx) {
    ctx.drawImage(this.imgs[this.direction], squirrel.col*100, squirrel.row*100,90,90)
  }
  update() {
    this.nbOfFramesBeforeMoving--
    if (this.nbOfFramesBeforeMoving === 0) {
      this.nbOfFramesBeforeMoving = 15
      switch (this.direction) {
        case "right":
          this.col++
          break
        case "left":
          this.col--
          break
        case "down":
          this.row++
          break
        case "up":
          this.row--
          break
      }
    }
  }
}