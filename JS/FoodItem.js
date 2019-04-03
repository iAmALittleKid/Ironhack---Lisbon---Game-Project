class FoodItem {
  constructor(type) {
    this.type = type
    this.img = new Image()
    this.img.src = `../Assets/IMG/${type}.png`
    switch (type) {
      case "nut":
        this.ttl = 5*60
        break
      default: 
        this.ttl = 5*60
    }
  }
  draw(ctx, col, row) {
    let size = 60
    ctx.drawImage(this.img, col*100+(100-size)/2,row*100+(100-size)/2,size,size)
  }
  update(){
    this.ttl--
  }
}

// TODO: add this.ttl