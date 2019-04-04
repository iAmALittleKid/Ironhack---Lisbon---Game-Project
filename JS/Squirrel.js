class Squirrel {
  
  constructor(col,row,direction) {
    this.col = col
    this.row = row
    this.direction = direction

    this.img = new Image()
    this.img.src = "./Assets/IMG/Squirrel-Sprites.png"

    this.newNbOfFramesBeforeMoving = INITIAL_NB_OF_FRAMES_BEFORE_MOVING
    this.nbOfFramesBeforeMoving = INITIAL_NB_OF_FRAMES_BEFORE_MOVING

    this.frame = 0
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
    let spriteSize = 32
    let sx, sy
    sx = (this.frame * spriteSize) % 96
    switch(this.direction) {
      case "right": sy = 4*spriteSize; break;
      case "left": sy = 5*spriteSize; break;
      case "down": sy = 6*spriteSize; break;
      case "up": sy = 7*spriteSize; break;
    }
    ctx.drawImage(
      this.img, 
      sx, sy,
      spriteSize, spriteSize,
      squirrel.col*100+(100-size)/2, squirrel.row*100+(100-size)/2,
      size,size,
    )
  }
  update() {
    this.nbOfFramesBeforeMoving--
    if (this.nbOfFramesBeforeMoving === 0) {
      this.frame++
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