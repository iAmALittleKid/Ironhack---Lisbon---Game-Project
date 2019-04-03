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

    this.newNbOfFramesBeforeMoving = INITIAL_NB_OF_FRAMES_BEFORE_MOVING
    this.nbOfFramesBeforeMoving = INITIAL_NB_OF_FRAMES_BEFORE_MOVING
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
    let size = 100
    ctx.drawImage(this.imgs[this.direction], squirrel.col*100+(100-size)/2, squirrel.row*100+(100-size)/2,size,size)
  }
  update() {
    this.nbOfFramesBeforeMoving--
    if (this.nbOfFramesBeforeMoving === 0) {
      if (this.newNbOfFramesBeforeMoving < INITIAL_NB_OF_FRAMES_BEFORE_MOVING) {
        this.newNbOfFramesBeforeMoving++
      }
      if (this.newNbOfFramesBeforeMoving > INITIAL_NB_OF_FRAMES_BEFORE_MOVING) {
        this.newNbOfFramesBeforeMoving--
      }
      this.nbOfFramesBeforeMoving = this.newNbOfFramesBeforeMoving
      switch (this.direction) {
        case "right":
          if (this.col === 9) {
            this.col = 0
          } else {
            this.col++
          }
          break
        case "left":
          if (this.col === 0) {
            this.col = 9
          } else {
          this.col--
          }
          break
        case "down":
          if (this.row === 9){
            this.row = 0
          } else {
          this.row++
          }
          break
        case "up":
        if(this.row === 0){
          this.row = 9
        } else {
        this.row--
        }
          break
      }
    }
  }
}