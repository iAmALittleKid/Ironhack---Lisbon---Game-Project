class Timer {
  constructor() {
    this.currentTime = 20*60
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
    if (this.timeFreezeTtl > 0) {
      this.timeFreezeTtl--
    }
    else {
      this.currentTime--
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
        this.
        break;
      case "apple":
        this.currentTime -= 10*60
        break;
      case "poison":
        this.
        break;
      case "mushroom":
        this.
        break;
    }
  }
}
