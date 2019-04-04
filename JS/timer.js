class Timer {
  constructor() {
    this.currentTime = 15*60
    this.timeFreezeTtl = 0
    this.scoreFrame = 0
  }

  draw() {
    document.getElementById("score").innerText = this.getScore()
    document.getElementById("timer").innerText = Math.floor(this.currentTime / 60)
    let color = "white"; 
    if (this.timeFreezeTtl > 0) {
      color = "#4444dd"
    } 
    document.getElementById("timer").style.color = color 
  }

  update() {
    this.scoreFrame++
    if (this.currentTime === 0) {
 
    } else {
      if (this.timeFreezeTtl > 0) {
        this.timeFreezeTtl--
      }else {
        this.currentTime--
      }
    }
  }

  getScore() {
    return Math.floor(this.scoreFrame / 60)
  }

  usePowerUp(type) {
    switch (type) {
      case "nut": 
        this.currentTime += 2*60
        break;
      case "cheese": 
        this.currentTime += 5*60
        break;
      case "blueberry": 
        this.timeFreezeTtl = 5*60
        break;
      case "egg":
          squirrel.newNbOfFramesBeforeMoving = Math.floor(INITIAL_NB_OF_FRAMES_BEFORE_MOVING/8)
        break;
      case "apple":
        this.currentTime -= 5*60
        break;
      case "poison":11
        this.currentTime = 0
        break;
      case "mushroom":
          squirrel.newNbOfFramesBeforeMoving = INITIAL_NB_OF_FRAMES_BEFORE_MOVING*4
        break;
    }
  }
}
